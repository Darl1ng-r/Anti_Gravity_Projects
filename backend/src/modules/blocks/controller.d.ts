import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../../common/middleware/auth.js";
export declare class BlocksController {
    create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    update(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    delete(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    reorder(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
}
export declare const blocksController: BlocksController;
//# sourceMappingURL=controller.d.ts.map