import { ProjectRepository } from "./../../repositories/Project";

interface ProjectCreateRequest {
  userId: number;
  name: string;
  description: string;
}

export class ProjectCreateUseCase {
  constructor(private projectRepo: ProjectRepository) {}

  async execute(request: ProjectCreateRequest) {
    const { userId, name, description } = request;

    if (!name) {
      throw new Error("Name is required.");
    }

    if (!description) {
      throw new Error("Description is required.");
    }

    const project = await this.projectRepo.create({
      userId,
      name,
      description,
    });

    return project;
  }
}
