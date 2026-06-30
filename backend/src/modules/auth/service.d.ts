export interface UserPayload {
    id: string;
    email: string;
    name: string;
}
export declare class AuthService {
    register(email: string, passwordPlain: string, name: string): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    login(email: string, passwordPlain: string): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
        };
    }>;
    generateToken(payload: UserPayload): string;
    verifyToken(token: string): UserPayload;
}
export declare const authService: AuthService;
//# sourceMappingURL=service.d.ts.map