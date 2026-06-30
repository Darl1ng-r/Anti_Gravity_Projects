import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../../common/middleware/auth.js";
export declare class WorkspacesController {
    create(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    list(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
    get(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
}
export declare const workspacesController: WorkspacesController;
//# sourceMappingURL=controller.d.ts.map