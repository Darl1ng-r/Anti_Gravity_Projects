import { documentsService } from "./service.js";
export class DocumentsController {
    async create(req, res, next) {
        try {
            const { workspaceId, title } = req.body;
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            if (!workspaceId) {
                res.status(400).json({ error: "Workspace ID is required" });
                return;
            }
            const document = await documentsService.createDocument(workspaceId, title, userId);
            res.status(201).json(document);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to create document" });
        }
    }
    async get(req, res, next) {
        try {
            const id = req.params["id"];
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            if (!id) {
                res.status(400).json({ error: "Document ID is required" });
                return;
            }
            const document = await documentsService.getDocument(id, userId);
            res.status(200).json(document);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to retrieve document" });
        }
    }
    async update(req, res, next) {
        try {
            const id = req.params["id"];
            const { title } = req.body;
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            if (!id) {
                res.status(400).json({ error: "Document ID is required" });
                return;
            }
            if (title === undefined) {
                res.status(400).json({ error: "Title is required" });
                return;
            }
            const document = await documentsService.updateDocument(id, title, userId);
            res.status(200).json(document);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to update document" });
        }
    }
    async delete(req, res, next) {
        try {
            const id = req.params["id"];
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            if (!id) {
                res.status(400).json({ error: "Document ID is required" });
                return;
            }
            await documentsService.deleteDocument(id, userId);
            res.status(200).json({ message: "Document deleted successfully" });
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to delete document" });
        }
    }
}
export const documentsController = new DocumentsController();
//# sourceMappingURL=controller.js.map