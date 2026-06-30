export declare class DocumentsService {
    verifyWorkspaceAccess(workspaceId: string, userId: string): Promise<void>;
    verifyDocumentAccess(documentId: string, userId: string): Promise<{
        workspaceId: string;
    }>;
    createDocument(workspaceId: string, title: string, createdById: string): Promise<any>;
    getDocument(documentId: string, userId: string): Promise<{
        createdBy: {
            id: string;
            email: string;
            name: string;
        };
        blocks: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            position: number;
            documentId: string;
            type: string;
            content: import("@prisma/client/runtime/client").JsonValue;
            parentBlockId: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
        workspaceId: string;
        title: string;
    }>;
    updateDocument(documentId: string, title: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
        workspaceId: string;
        title: string;
    }>;
    deleteDocument(documentId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
        workspaceId: string;
        title: string;
    }>;
}
export declare const documentsService: DocumentsService;
//# sourceMappingURL=service.d.ts.map