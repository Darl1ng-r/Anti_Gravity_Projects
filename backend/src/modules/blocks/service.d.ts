export declare class BlocksService {
    createBlock(documentId: string, type: string, content: any, position: number, parentBlockId: string | null, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        position: number;
        documentId: string;
        type: string;
        content: import("@prisma/client/runtime/client").JsonValue;
        parentBlockId: string | null;
    }>;
    updateBlock(blockId: string, type: string | undefined, content: any | undefined, position: number | undefined, parentBlockId: string | null | undefined, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        position: number;
        documentId: string;
        type: string;
        content: import("@prisma/client/runtime/client").JsonValue;
        parentBlockId: string | null;
    }>;
    deleteBlock(blockId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        position: number;
        documentId: string;
        type: string;
        content: import("@prisma/client/runtime/client").JsonValue;
        parentBlockId: string | null;
    }>;
    updateBlocksPositions(documentId: string, blocks: {
        id: string;
        position: number;
    }[], userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        position: number;
        documentId: string;
        type: string;
        content: import("@prisma/client/runtime/client").JsonValue;
        parentBlockId: string | null;
    }[]>;
}
export declare const blocksService: BlocksService;
//# sourceMappingURL=service.d.ts.map