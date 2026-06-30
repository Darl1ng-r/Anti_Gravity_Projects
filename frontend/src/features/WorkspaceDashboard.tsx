import React, { useEffect, useState } from "react";
import { useAuthStore, useAppStore } from "../stores.js";
import {
  LogOut,
  Plus,
  Trash2,
  Folder,
  FileText,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export const WorkspaceDashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const {
    workspaces,
    activeWorkspace,
    activeDocument,
    fetchWorkspaces,
    createWorkspace,
    selectWorkspace,
    createDocument,
    fetchDocument,
    updateDocumentTitle,
    deleteDocument,
    addBlock,
    updateBlockContent,
    deleteBlock,
  } = useAppStore();

  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  
  const [showDocModal, setShowDocModal] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState("");

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const handleCreateWorkspace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWorkspaceName.trim()) return;
    const ws = await createWorkspace(newWorkspaceName);
    setNewWorkspaceName("");
    setShowWorkspaceModal(false);
    if (ws) {
      selectWorkspace(ws.id);
    }
  };

  const handleCreateDocument = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeWorkspace) return;
    const doc = await createDocument(activeWorkspace.id, newDocTitle || "Untitled");
    setNewDocTitle("");
    setShowDocModal(false);
    if (doc) {
      fetchDocument(doc.id);
    }
  };

  // Auto-resizable textarea
  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Antigravity Docs</h2>
        </div>

        {user && (
          <div className="sidebar-user">
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
            <button className="logout-btn" onClick={logout} title="Sign Out">
              <LogOut size={16} />
            </button>
          </div>
        )}

        <div className="sidebar-content">
          {/* Workspaces Section */}
          <div>
            <div className="section-title">Workspaces</div>
            <div className="workspace-list">
              {workspaces.map((ws) => (
                <div
                  key={ws.id}
                  className={`sidebar-item ${activeWorkspace?.id === ws.id ? "active" : ""}`}
                  onClick={() => selectWorkspace(ws.id)}
                >
                  <span className="sidebar-item-label">
                    <Folder size={16} />
                    {ws.name}
                  </span>
                </div>
              ))}
              <button className="add-btn" onClick={() => setShowWorkspaceModal(true)}>
                <Plus size={14} /> New Workspace
              </button>
            </div>
          </div>

          {/* Documents Section */}
          {activeWorkspace && (
            <div>
              <div className="section-title">Documents</div>
              <div className="document-list">
                {activeWorkspace.documents?.map((doc) => (
                  <div
                    key={doc.id}
                    className={`sidebar-item ${activeDocument?.id === doc.id ? "active" : ""}`}
                    onClick={() => fetchDocument(doc.id)}
                  >
                    <span className="sidebar-item-label">
                      <FileText size={16} />
                      {doc.title}
                    </span>
                    <button
                      className="delete-item-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete "${doc.title}"?`)) {
                          deleteDocument(doc.id);
                        }
                      }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
                <button className="add-btn" onClick={() => setShowDocModal(true)}>
                  <Plus size={14} /> New Document
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="navbar">
          <div>
            {activeWorkspace && (
              <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                {activeWorkspace.name} /
              </span>
            )}
            <span style={{ marginLeft: "6px", fontWeight: 600 }}>
              {activeDocument ? activeDocument.title : "Workspace"}
            </span>
          </div>
        </div>

        <div className="editor-area">
          {activeDocument ? (
            <div className="editor-container">
              {/* Document Title */}
              <input
                type="text"
                className="doc-title-input"
                value={activeDocument.title}
                onChange={(e) => updateDocumentTitle(activeDocument.id, e.target.value)}
                placeholder="Untitled Document"
              />

              {/* Blocks list */}
              <div className="blocks-list">
                {activeDocument.blocks.map((block, idx) => (
                  <div key={block.id} className="block-row">
                    <div className="block-drag-handle">
                      {/* Simple ordering controls */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <button
                          className="block-action-btn"
                          disabled={idx === 0}
                          onClick={() => {
                            // Swap positions locally or reorder
                          }}
                        >
                          <ChevronUp size={12} />
                        </button>
                        <button
                          className="block-action-btn"
                          disabled={idx === activeDocument.blocks.length - 1}
                          onClick={() => {
                            // Swap positions locally or reorder
                          }}
                        >
                          <ChevronDown size={12} />
                        </button>
                      </div>
                    </div>

                    <div className="block-editor-wrapper">
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                        {/* Selector for block types */}
                        <select
                          className="block-type-select"
                          value={block.type}
                          onChange={(e) =>
                            updateBlockContent(block.id, e.target.value, block.content)
                          }
                        >
                          <option value="paragraph">Paragraph</option>
                          <option value="heading">Heading 1</option>
                          <option value="heading-2">Heading 2</option>
                          <option value="quote">Quote</option>
                          <option value="code">Code Block</option>
                        </select>
                      </div>

                      <textarea
                        className={`block-input-element block-type-${block.type}`}
                        rows={1}
                        placeholder={
                          block.type.startsWith("heading")
                            ? "Heading"
                            : block.type === "code"
                            ? "// Enter code..."
                            : block.type === "quote"
                            ? "Quote"
                            : "Type '/' for commands or start writing..."
                        }
                        value={block.content?.text || ""}
                        ref={(el) => {
                          if (el) {
                            adjustHeight(el);
                          }
                        }}
                        onChange={(e) => {
                          adjustHeight(e.target);
                          updateBlockContent(block.id, block.type, {
                            ...block.content,
                            text: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="block-row-actions">
                      <button
                        className="block-action-btn delete"
                        onClick={() => deleteBlock(block.id)}
                        title="Delete Block"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add Block at Bottom */}
                <button
                  className="add-btn"
                  style={{ marginTop: "20px" }}
                  onClick={() =>
                    addBlock(
                      activeDocument.id,
                      "paragraph",
                      { text: "" },
                      activeDocument.blocks.length
                    )
                  }
                >
                  <Plus size={14} /> Add Block
                </button>
              </div>
            </div>
          ) : (
            <div className="dashboard-empty">
              <h3>Select or Create a Document</h3>
              <p>Choose a document from the sidebar list or create a new workspace to get started.</p>
            </div>
          )}
        </div>
      </div>

      {/* Workspace Creation Modal */}
      {showWorkspaceModal && (
        <div className="modal-overlay">
          <form className="modal-card" onSubmit={handleCreateWorkspace}>
            <h3>Create New Workspace</h3>
            <div className="form-group">
              <label htmlFor="ws-name">Workspace Name</label>
              <input
                id="ws-name"
                type="text"
                className="form-input"
                placeholder="e.g. Engineering Team"
                value={newWorkspaceName}
                onChange={(e) => setNewWorkspaceName(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setNewWorkspaceName("");
                  setShowWorkspaceModal(false);
                }}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Document Creation Modal */}
      {showDocModal && (
        <div className="modal-overlay">
          <form className="modal-card" onSubmit={handleCreateDocument}>
            <h3>Create New Document</h3>
            <div className="form-group">
              <label htmlFor="doc-title">Document Title</label>
              <input
                id="doc-title"
                type="text"
                className="form-input"
                placeholder="e.g. Design Roadmap"
                value={newDocTitle}
                onChange={(e) => setNewDocTitle(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setNewDocTitle("");
                  setShowDocModal(false);
                }}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
