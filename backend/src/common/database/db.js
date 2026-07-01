import { PrismaClient } from "../../../generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
const connectionString = process.env["DATABASE_URL"];
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const globalForPrisma = global;
export const prisma = globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
        log: ["query"],
    });
if (process.env["NODE_ENV"] !== "production") {
    globalForPrisma.prisma = prisma;
}
export default prisma;
//# sourceMappingURL=db.js.map