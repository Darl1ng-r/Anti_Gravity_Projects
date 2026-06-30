import type { Request, Response, NextFunction } from "express";
import { type UserPayload } from "../../modules/auth/service.js";
export interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}
export declare function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction): void;
//# sourceMappingURL=auth.d.ts.map