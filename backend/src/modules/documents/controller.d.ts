import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../../common/middleware/auth.js";
export declare class DocumentsController {
    create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    get(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    update(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    delete(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
}
export declare const documentsController: DocumentsController;
//# sourceMappingURL=controller.d.ts.map