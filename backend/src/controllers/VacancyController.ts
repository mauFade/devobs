import { Request, Response } from "express";

import { VacancyReadUseCase } from "./../use-cases/Vacancy/read-use-case";
import { VacancyCreateUseCase } from "./../use-cases/Vacancy/create-use-case";
import { PrismaVacancyRepository } from "./../repositories/prisma/VacancyRepository";

import { CSuccess, CError } from "../classes/responses";

class VacancyController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const {
        title,
        description,
        skill,
        salary,
      }: { title: string; description: string; skill: string; salary: number } = Object(request["body"]);

      const token = Object(request["query"]);

      const companyId = token["token"]["id"];

      const PrismaRepository = new PrismaVacancyRepository();
      const CreateUseCase = new VacancyCreateUseCase(PrismaRepository);

      const vacancy = await CreateUseCase.execute({
        companyId,
        title,
        description,
        skill,
        salary,
      });

      return response.status(200).send(new CSuccess(true, vacancy));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }

  async read(request: Request, response: Response): Promise<any> {
    try {
      const PrismaRepository = new PrismaVacancyRepository();
      const ReadUseCase = new VacancyReadUseCase(PrismaRepository);

      const vacancies = await ReadUseCase.read();

      return response.status(200).send(new CSuccess(true, vacancies));
    } catch (error) {
      return response.status(500).send(new CError("Error at method read.", error));
    }
  }
}

export default new VacancyController();
