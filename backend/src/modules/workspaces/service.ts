import prisma from "../../common/database/db.js";

export class WorkspacesService {
  async createWorkspace(name: string, createdById: string) {
    if (!name) {
      throw new Error("Workspace name is required");
    }

    // Create workspace and owner membership in a transaction
    return await prisma.$transaction(async (tx: any) => {
      const workspace = await tx.workspace.create({
        data: {
          name,
          createdById,
        },
      });

      await tx.workspaceMember.create({
        data: {
          workspaceId: workspace.id,
          userId: createdById,
          role: "OWNER",
        },
      });

      return workspace;
    });
  }

  async listWorkspaces(userId: string) {
    // Return workspaces where the user is a member
    return await prisma.workspace.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        createdBy: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getWorkspace(workspaceId: string, userId: string) {
    // Check if the user is a member
    const membership = await prisma.workspaceMember.findUnique({
      where: {
        workspaceId_userId: {
          workspaceId,
          userId,
        },
      },
    });

    if (!membership) {
      throw new Error("Access denied: You are not a member of this workspace");
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      include: {
        createdBy: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
          },
        },
        documents: {
          orderBy: {
            updatedAt: "desc",
          },
        },
      },
    });

    if (!workspace) {
      throw new Error("Workspace not found");
    }

    return workspace;
  }
}

export const workspacesService = new WorkspacesService();
