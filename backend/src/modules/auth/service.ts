import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../common/database/db.js";

const JWT_SECRET = process.env["JWT_SECRET"] || "supersecretkey-change-me-in-production";

export interface UserPayload {
  id: string;
  email: string;
  name: string;
}

export class AuthService {
  async register(email: string, passwordPlain: string, name: string) {
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

  async login(email: string, passwordPlain: string) {
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

  generateToken(payload: UserPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  }

  verifyToken(token: string): UserPayload {
    return jwt.verify(token, JWT_SECRET) as UserPayload;
  }
}

export const authService = new AuthService();
