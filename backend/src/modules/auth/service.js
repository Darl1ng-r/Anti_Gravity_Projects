import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../common/database/db.js";
const JWT_SECRET = process.env["JWT_SECRET"] || "supersecretkey-change-me-in-production";
export class AuthService {
    async register(email, passwordPlain, name) {
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            throw new Error("Email already registered");
        }
        const passwordHash = await bcrypt.hash(passwordPlain, 10);
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                name,
            },
        });
        const token = this.generateToken({ id: user.id, email: user.email, name: user.name });
        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        };
    }
    async login(email, passwordPlain) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isValid = await bcrypt.compare(passwordPlain, user.passwordHash);
        if (!isValid) {
            throw new Error("Invalid email or password");
        }
        const token = this.generateToken({ id: user.id, email: user.email, name: user.name });
        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        };
    }
    generateToken(payload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    }
    verifyToken(token) {
        return jwt.verify(token, JWT_SECRET);
    }
}
export const authService = new AuthService();
//# sourceMappingURL=service.js.map