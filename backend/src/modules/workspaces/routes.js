import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.js";
import { workspacesController } from "./controller.js";
const router = Router();
router.post("/", authenticate, workspacesController.create.bind(workspacesController));
router.get("/", authenticate, workspacesController.list.bind(workspacesController));
router.get("/:id", authenticate, workspacesController.get.bind(workspacesController));
export default router;
//# sourceMappingURL=routes.js.map