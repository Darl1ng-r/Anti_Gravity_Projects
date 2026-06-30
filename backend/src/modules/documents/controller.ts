import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../../common/middleware/auth.js";
import { documentsService } from "./service.js";

export class DocumentsController {
  async create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
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
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to create document" });
    }
  }

  async get(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params["id"] as string;
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
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to retrieve document" });
    }
  }

  async update(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params["id"] as string;
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
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to update document" });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params["id"] as string;
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
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to delete document" });
    }
  }
}

export const documentsController = new DocumentsController();
