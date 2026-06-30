import { workspacesService } from "./service.js";
export class WorkspacesController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            const workspace = await workspacesService.createWorkspace(name, userId);
            res.status(201).json(workspace);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to create workspace" });
        }
    }
    async list(req, res, next) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            const workspaces = await workspacesService.listWorkspaces(userId);
            res.status(200).json(workspaces);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to list workspaces" });
        }
    }
    async get(req, res, next) {
        try {
            const id = req.params["id"];
            const userId = req.user?.id;
            if (!userId) {
                res.status(401).json({ error: "Unauthorized" });
                return;
            }
            if (!id) {
                res.status(400).json({ error: "Workspace ID is required" });
                return;
            }
            const workspace = await workspacesService.getWorkspace(id, userId);
            res.status(200).json(workspace);
        }
        catch (error) {
            res.status(400).json({ error: error.message || "Failed to retrieve workspace" });
        }
    }
}
export const workspacesController = new WorkspacesController();
//# sourceMappingURL=controller.js.map