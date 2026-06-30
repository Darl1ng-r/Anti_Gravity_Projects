import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.js";
import { documentsController } from "./controller.js";

const router = Router();

router.post("/", authenticate as any, documentsController.create.bind(documentsController));
router.get("/:id", authenticate as any, documentsController.get.bind(documentsController));
router.patch("/:id", authenticate as any, documentsController.update.bind(documentsController));
router.delete("/:id", authenticate as any, documentsController.delete.bind(documentsController));

export default router;
