export declare class WorkspacesService {
    createWorkspace(name: string, createdById: string): Promise<any>;
    listWorkspaces(userId: string): Promise<({
        createdBy: {
            id: string;
            email: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
    })[]>;
    getWorkspace(workspaceId: string, userId: string): Promise<{
        documents: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            createdById: string;
            workspaceId: string;
            title: string;
        }[];
        createdBy: {
            id: string;
            email: string;
            name: string;
        };
        members: ({
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            workspaceId: string;
            userId: string;
            role: import("../../../generated/enums.js").WorkspaceRole;
            joinedAt: Date;
        })[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
    }>;
}
export declare const workspacesService: WorkspacesService;
//# sourceMappingURL=service.d.ts.map