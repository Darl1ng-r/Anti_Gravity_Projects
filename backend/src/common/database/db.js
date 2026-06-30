import { PrismaClient } from "../../../generated/prisma/client.js";
const globalForPrisma = global;
export const prisma = globalForPrisma.prisma ||
    new PrismaClient({
        accelerateUrl: process.env["DATABASE_URL"],
        log: ["query"],
    });
if (process.env["NODE_ENV"] !== "production") {
    globalForPrisma.prisma = prisma;
}
export default prisma;
//# sourceMappingURL=db.js.map