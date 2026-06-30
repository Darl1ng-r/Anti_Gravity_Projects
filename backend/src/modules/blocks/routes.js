import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.js";
import { blocksController } from "./controller.js";
const router = Router();
router.post("/", authenticate, blocksController.create.bind(blocksController));
router.patch("/:id", authenticate, blocksController.update.bind(blocksController));
router.delete("/:id", authenticate, blocksController.delete.bind(blocksController));
router.put("/reorder", authenticate, blocksController.reorder.bind(blocksController));
export default router;
//# sourceMappingURL=routes.js.map