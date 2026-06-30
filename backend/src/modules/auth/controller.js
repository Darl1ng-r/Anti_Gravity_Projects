import { authService } from "./service.js";
export class AuthController {
    async register(req, res, next) {
        try {
            const { email, password, name } = req.body;
            if (!email || !password || !name) {
                res.status(400).json({ error: "Missing email, password, or name" });
                return;
            }
            const result = await authService.register(email, password, name);
            res.status(201).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to register" });
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ error: "Missing email or password" });
                return;
            }
            const result = await authService.login(email, password);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to login" });
        }
    }
}
export const authController = new AuthController();
//# sourceMappingURL=controller.js.map