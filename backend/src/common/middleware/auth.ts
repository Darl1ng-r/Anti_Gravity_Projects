import type { Request, Response, NextFunction } from "express";
import { authService, type UserPayload } from "../../modules/auth/service.js";

export interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

export function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({ error: "No authorization header provided" });
    return;
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    res.status(401).json({ error: "Invalid authorization header format" });
    return;
  }

  const token = parts[1];
  if (!token) {
    res.status(401).json({ error: "Token not found" });
    return;
  }

  try {
    const decoded = authService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
