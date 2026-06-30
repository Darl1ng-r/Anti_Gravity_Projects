import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.js";
import { documentsController } from "./controller.js";
const router = Router();
router.post("/", authenticate, documentsController.create.bind(documentsController));
router.get("/:id", authenticate, documentsController.get.bind(documentsController));
router.patch("/:id", authenticate, documentsController.update.bind(documentsController));
router.delete("/:id", authenticate, documentsController.delete.bind(documentsController));
export default router;
//# sourceMappingURL=routes.js.map