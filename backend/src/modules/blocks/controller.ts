import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../../common/middleware/auth.js";
import { blocksService } from "./service.js";

export class BlocksController {
  async create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { documentId, type, content, position, parentBlockId } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      if (!documentId || !type) {
        res.status(400).json({ error: "Document ID and type are required" });
        return;
      }

      const block = await blocksService.createBlock(
        documentId,
        type,
        content,
        position ?? 0,
        parentBlockId ?? null,
        userId
      );
      res.status(201).json(block);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to create block" });
    }
  }

  async update(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params["id"] as string;
      const { type, content, position, parentBlockId } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      if (!id) {
        res.status(400).json({ error: "Block ID is required" });
        return;
      }

      const block = await blocksService.updateBlock(
        id,
        type,
        content,
        position,
        parentBlockId,
        userId
      );
      res.status(200).json(block);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to update block" });
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
        res.status(400).json({ error: "Block ID is required" });
        return;
      }

      await blocksService.deleteBlock(id, userId);
      res.status(200).json({ message: "Block deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to delete block" });
    }
  }

  async reorder(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { documentId, blocks } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      if (!documentId || !Array.isArray(blocks)) {
        res.status(400).json({ error: "Document ID and blocks array are required" });
        return;
      }

      await blocksService.updateBlocksPositions(documentId, blocks, userId);
      res.status(200).json({ message: "Blocks reordered successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Failed to reorder blocks" });
    }
  }
}

export const blocksController = new BlocksController();
