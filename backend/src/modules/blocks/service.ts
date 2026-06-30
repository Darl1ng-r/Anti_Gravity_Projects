import prisma from "../../common/database/db.js";
import { documentsService } from "../documents/service.js";

export class BlocksService {
  async createBlock(
    documentId: string,
    type: string,
    content: any,
    position: number,
    parentBlockId: string | null,
    userId: string
  ) {
    await documentsService.verifyDocumentAccess(documentId, userId);

    return await prisma.documentBlock.create({
      data: {
        documentId,
        type,
        content: content || {},
        position,
        parentBlockId,
      },
    });
  }

  async updateBlock(
    blockId: string,
    type: string | undefined,
    content: any | undefined,
    position: number | undefined,
    parentBlockId: string | null | undefined,
    userId: string
  ) {
    const block = await prisma.documentBlock.findUnique({
      where: { id: blockId },
      select: { documentId: true },
    });
    if (!block) {
      throw new Error("Block not found");
    }

    await documentsService.verifyDocumentAccess(block.documentId, userId);

    const updateData: any = {};
    if (type !== undefined) updateData.type = type;
    if (content !== undefined) updateData.content = content;
    if (position !== undefined) updateData.position = position;
    if (parentBlockId !== undefined) updateData.parentBlockId = parentBlockId;

    return await prisma.documentBlock.update({
      where: { id: blockId },
      data: updateData,
    });
  }

  async deleteBlock(blockId: string, userId: string) {
    const block = await prisma.documentBlock.findUnique({
      where: { id: blockId },
      select: { documentId: true },
    });
    if (!block) {
      throw new Error("Block not found");
    }

    await documentsService.verifyDocumentAccess(block.documentId, userId);

    return await prisma.documentBlock.delete({
      where: { id: blockId },
    });
  }

  async updateBlocksPositions(
    documentId: string,
    blocks: { id: string; position: number }[],
    userId: string
  ) {
    await documentsService.verifyDocumentAccess(documentId, userId);

    return await prisma.$transaction(
      blocks.map((b) =>
        prisma.documentBlock.update({
          where: { id: b.id },
          data: { position: b.position },
        })
      )
    );
  }
}

export const blocksService = new BlocksService();
