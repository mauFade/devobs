import { ProjectRepository, ProjectCreateData } from "./../Project";
import prisma from "../../services/prisma";

export class PrismaProjectRepository implements ProjectRepository {
  async create({ userId, name, description }: ProjectCreateData) {
    const project = await prisma.project.create({
      data: {
        userId,
        name,
        description,
      },
    });

    return project;
  }

  async read() {
    const projects = await prisma.project.findMany({
      include: {
        author: true,
      },
    });

    return projects;
  }
}
