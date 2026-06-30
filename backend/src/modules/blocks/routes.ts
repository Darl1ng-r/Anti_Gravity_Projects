import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.js";
import { blocksController } from "./controller.js";

const router = Router();

router.post("/", authenticate as any, blocksController.create.bind(blocksController));
router.patch("/:id", authenticate as any, blocksController.update.bind(blocksController));
router.delete("/:id", authenticate as any, blocksController.delete.bind(blocksController));
router.put("/reorder", authenticate as any, blocksController.reorder.bind(blocksController));

export default router;
