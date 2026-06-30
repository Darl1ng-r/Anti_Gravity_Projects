import { create } from "zustand";

const API_BASE = "http://localhost:5000/api";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Workspace {
  id: string;
  name: string;
  createdById: string;
  createdAt: string;
  documents?: DocumentMetadata[];
}

export interface DocumentMetadata {
  id: string;
  title: string;
  workspaceId: string;
  createdAt: string;
  updatedAt: string;
}

export interface DocumentBlock {
  id: string;
  documentId: string;
  type: string;
  content: { text?: string; [key: string]: any };
  position: number;
  parentBlockId: string | null;
}

export interface FullDocument extends DocumentMetadata {
  blocks: DocumentBlock[];
}

interface AuthStore {
  token: string | null;
  user: User | null;
  error: string | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  setError: (err: string | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("auth_token"),
  user: localStorage.getItem("auth_user") ? JSON.parse(localStorage.getItem("auth_user")!) : null,
  error: null,
  setAuth: (token, user) => {
    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));
    set({ token, user, error: null });
  },
  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    set({ token: null, user: null, error: null });
  },
  setError: (error) => set({ error }),
}));

interface AppStore {
  workspaces: Workspace[];
  activeWorkspace: Workspace | null;
  activeDocument: FullDocument | null;
  isLoading: boolean;
  error: string | null;
  
  fetchWorkspaces: () => Promise<void>;
  createWorkspace: (name: string) => Promise<Workspace | null>;
  selectWorkspace: (workspaceId: string) => Promise<void>;
  
  createDocument: (workspaceId: string, title: string) => Promise<DocumentMetadata | null>;
  fetchDocument: (documentId: string) => Promise<void>;
  updateDocumentTitle: (documentId: string, title: string) => Promise<void>;
  deleteDocument: (documentId: string) => Promise<void>;
  
  addBlock: (documentId: string, type: string, content: any, position: number) => Promise<void>;
  updateBlockContent: (blockId: string, type: string, content: any) => Promise<void>;
  deleteBlock: (blockId: string) => Promise<void>;
}

export const useAppStore = create<AppStore>((set, get) => {
  const getHeaders = () => {
    const token = useAuthStore.getState().token;
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  return {
    workspaces: [],
    activeWorkspace: null,
    activeDocument: null,
    isLoading: false,
    error: null,

    fetchWorkspaces: async () => {
      set({ isLoading: true, error: null });
      try {
        const res = await fetch(`${API_BASE}/workspaces`, {
          headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch workspaces");
        const data = await res.json();
        set({ workspaces: data, isLoading: false });
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    createWorkspace: async (name) => {
      set({ isLoading: true, error: null });
      try {
        const res = await fetch(`${API_BASE}/workspaces`, {
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify({ name }),
        });
        if (!res.ok) throw new Error("Failed to create workspace");
        const data = await res.json();
        await get().fetchWorkspaces();
        set({ isLoading: false });
        return data;
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
        return null;
      }
    },

    selectWorkspace: async (workspaceId) => {
      set({ isLoading: true, error: null, activeDocument: null });
      try {
        const res = await fetch(`${API_BASE}/workspaces/${workspaceId}`, {
          headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to load workspace details");
        const data = await res.json();
        set({ activeWorkspace: data, isLoading: false });
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    createDocument: async (workspaceId, title) => {
      set({ error: null });
      try {
        const res = await fetch(`${API_BASE}/documents`, {
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify({ workspaceId, title }),
        });
        if (!res.ok) throw new Error("Failed to create document");
        const newDoc = await res.json();
        
        // Refresh active workspace to get updated documents list
        if (get().activeWorkspace?.id === workspaceId) {
          await get().selectWorkspace(workspaceId);
        }
        return newDoc;
      } catch (err: any) {
        set({ error: err.message });
        return null;
      }
    },

    fetchDocument: async (documentId) => {
      set({ isLoading: true, error: null });
      try {
        const res = await fetch(`${API_BASE}/documents/${documentId}`, {
          headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to fetch document");
        const data = await res.json();
        set({ activeDocument: data, isLoading: false });
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    updateDocumentTitle: async (documentId, title) => {
      try {
        const res = await fetch(`${API_BASE}/documents/${documentId}`, {
          method: "PATCH",
          headers: getHeaders(),
          body: JSON.stringify({ title }),
        });
        if (!res.ok) throw new Error("Failed to update document title");
        
        // Update local state
        const activeDoc = get().activeDocument;
        if (activeDoc && activeDoc.id === documentId) {
          set({ activeDocument: { ...activeDoc, title } });
        }
        
        const activeWorkspace = get().activeWorkspace;
        if (activeWorkspace) {
          await get().selectWorkspace(activeWorkspace.id);
        }
      } catch (err: any) {
        set({ error: err.message });
      }
    },

    deleteDocument: async (documentId) => {
      try {
        const res = await fetch(`${API_BASE}/documents/${documentId}`, {
          method: "DELETE",
          headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to delete document");
        
        const activeDoc = get().activeDocument;
        if (activeDoc && activeDoc.id === documentId) {
          set({ activeDocument: null });
        }
        
        const activeWorkspace = get().activeWorkspace;
        if (activeWorkspace) {
          await get().selectWorkspace(activeWorkspace.id);
        }
      } catch (err: any) {
        set({ error: err.message });
      }
    },

    addBlock: async (documentId, type, content, position) => {
      try {
        const res = await fetch(`${API_BASE}/blocks`, {
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify({ documentId, type, content, position }),
        });
        if (!res.ok) throw new Error("Failed to add block");
        await get().fetchDocument(documentId);
      } catch (err: any) {
        set({ error: err.message });
      }
    },

    updateBlockContent: async (blockId, type, content) => {
      try {
        const res = await fetch(`${API_BASE}/blocks/${blockId}`, {
          method: "PATCH",
          headers: getHeaders(),
          body: JSON.stringify({ type, content }),
        });
        if (!res.ok) throw new Error("Failed to update block");
        
        const activeDoc = get().activeDocument;
        if (activeDoc) {
          // Optimistic local state update
          const updatedBlocks = activeDoc.blocks.map((b) =>
            b.id === blockId ? { ...b, type, content } : b
          );
          set({ activeDocument: { ...activeDoc, blocks: updatedBlocks } });
        }
      } catch (err: any) {
        set({ error: err.message });
      }
    },

    deleteBlock: async (blockId) => {
      try {
        const activeDoc = get().activeDocument;
        if (!activeDoc) return;
        
        const res = await fetch(`${API_BASE}/blocks/${blockId}`, {
          method: "DELETE",
          headers: getHeaders(),
        });
        if (!res.ok) throw new Error("Failed to delete block");
        
        // Refresh document from backend
        await get().fetchDocument(activeDoc.id);
      } catch (err: any) {
        set({ error: err.message });
      }
    },
  };
});
