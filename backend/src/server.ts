import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/routes.js";
import workspacesRoutes from "./modules/workspaces/routes.js";
import documentsRoutes from "./modules/documents/routes.js";
import blocksRoutes from "./modules/blocks/routes.js";
import { errorHandler } from "./common/middleware/errorHandler.js";

const app = express();
const PORT = process.env["PORT"] || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Status / Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workspaces", workspacesRoutes);
app.use("/api/documents", documentsRoutes);
app.use("/api/blocks", blocksRoutes);

// Error Handling Middleware
app.use(errorHandler as any);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
