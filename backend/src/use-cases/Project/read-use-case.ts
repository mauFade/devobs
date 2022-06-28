import { ProjectRepository } from "./../../repositories/Project";

export class ProjectReadUseCase {
  constructor(private projectRepo: ProjectRepository) {}

  async read() {
    const projects = await this.projectRepo.read();

    return projects;
  }
}
