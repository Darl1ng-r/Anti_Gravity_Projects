import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.js";
import { workspacesController } from "./controller.js";

const router = Router();

router.post("/", authenticate as any, workspacesController.create.bind(workspacesController));
router.get("/", authenticate as any, workspacesController.list.bind(workspacesController));
router.get("/:id", authenticate as any, workspacesController.get.bind(workspacesController));

export default router;
