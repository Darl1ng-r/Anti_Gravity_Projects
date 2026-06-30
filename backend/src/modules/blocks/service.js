import prisma from "../../common/database/db.js";
import { documentsService } from "../documents/service.js";
export class BlocksService {
    async createBlock(documentId, type, content, position, parentBlockId, userId) {
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
    async updateBlock(blockId, type, content, position, parentBlockId, userId) {
        const block = await prisma.documentBlock.findUnique({
            where: { id: blockId },
            select: { documentId: true },
        });
        if (!block) {
            throw new Error("Block not found");
        }
        await documentsService.verifyDocumentAccess(block.documentId, userId);
        const updateData = {};
        if (type !== undefined)
            updateData.type = type;
        if (content !== undefined)
            updateData.content = content;
        if (position !== undefined)
            updateData.position = position;
        if (parentBlockId !== undefined)
            updateData.parentBlockId = parentBlockId;
        return await prisma.documentBlock.update({
            where: { id: blockId },
            data: updateData,
        });
    }
    async deleteBlock(blockId, userId) {
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
    async updateBlocksPositions(documentId, blocks, userId) {
        await documentsService.verifyDocumentAccess(documentId, userId);
        return await prisma.$transaction(blocks.map((b) => prisma.documentBlock.update({
            where: { id: b.id },
            data: { position: b.position },
        })));
    }
}
export const blocksService = new BlocksService();
//# sourceMappingURL=service.js.map