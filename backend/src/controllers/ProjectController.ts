import { Request, Response } from "express";

import { ProjectReadUseCase } from "./../use-cases/Project/read-use-case";
import { ProjectCreateUseCase } from "./../use-cases/Project/create-use-case";
import { PrismaProjectRepository } from "./../repositories/prisma/ProjectRepository";

import { CError, CSuccess } from "../classes/responses";

class ProjectController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const token = Object(request["query"]);

      const userId = token["token"]["id"];

      const { name, description }: { name: string; description: string } = Object(request["body"]);

      const PrismaRepository = new PrismaProjectRepository();
      const CreateUseCase = new ProjectCreateUseCase(PrismaRepository);

      const project = await CreateUseCase.execute({
        userId,
        name,
        description,
      });

      return response.status(200).send(new CSuccess(true, project));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }

  async read(request: Request, response: Response): Promise<any> {
    try {
      const PrismaRepository = new PrismaProjectRepository();
      const ReadUseCase = new ProjectReadUseCase(PrismaRepository);

      const projects = await ReadUseCase.read();

      return response.status(200).send(new CSuccess(true, projects));
    } catch (error) {
      return response.status(500).send(new CError("Error at method read.", error));
    }
  }
}

export default new ProjectController();
