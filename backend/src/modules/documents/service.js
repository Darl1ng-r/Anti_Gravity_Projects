import prisma from "../../common/database/db.js";
export class DocumentsService {
    // Check if user is a member of the workspace that the document belongs to
    async verifyWorkspaceAccess(workspaceId, userId) {
        const member = await prisma.workspaceMember.findUnique({
            where: {
                workspaceId_userId: {
                    workspaceId,
                    userId,
                },
            },
        });
        if (!member) {
            throw new Error("Access denied: You are not a member of this workspace");
        }
    }
    async verifyDocumentAccess(documentId, userId) {
        const doc = await prisma.document.findUnique({
            where: { id: documentId },
            select: { workspaceId: true },
        });
        if (!doc) {
            throw new Error("Document not found");
        }
        await this.verifyWorkspaceAccess(doc.workspaceId, userId);
        return doc;
    }
    async createDocument(workspaceId, title, createdById) {
        await this.verifyWorkspaceAccess(workspaceId, createdById);
        return await prisma.$transaction(async (tx) => {
            const doc = await tx.document.create({
                data: {
                    workspaceId,
                    title: title || "Untitled",
                    createdById,
                },
            });
            // Create a default paragraph block
            await tx.documentBlock.create({
                data: {
                    documentId: doc.id,
                    type: "paragraph",
                    content: { text: "" },
                    position: 0,
                },
            });
            return doc;
        });
    }
    async getDocument(documentId, userId) {
        await this.verifyDocumentAccess(documentId, userId);
        const doc = await prisma.document.findUnique({
            where: { id: documentId },
            include: {
                blocks: {
                    orderBy: {
                        position: "asc",
                    },
                },
                createdBy: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
            },
        });
        if (!doc) {
            throw new Error("Document not found");
        }
        return doc;
    }
    async updateDocument(documentId, title, userId) {
        await this.verifyDocumentAccess(documentId, userId);
        return await prisma.document.update({
            where: { id: documentId },
            data: {
                title,
            },
        });
    }
    async deleteDocument(documentId, userId) {
        await this.verifyDocumentAccess(documentId, userId);
        return await prisma.document.delete({
            where: { id: documentId },
        });
    }
}
export const documentsService = new DocumentsService();
//# sourceMappingURL=service.js.map