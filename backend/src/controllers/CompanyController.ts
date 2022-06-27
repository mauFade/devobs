import { CompanyReadUseCase } from "./../use-cases/Company/read-use-case";
import { Request, Response } from "express";

import { CompanyCreateUseCase } from "./../use-cases/Company/create-use-case";
import { PrismaCompanyRepository } from "./../repositories/prisma/CompanyRepository";

import { CSuccess, CError } from "../classes/responses";

class CompanyController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const {
        name,
        email,
        password,
        bio,
        city,
        country,
        avatar,
      }: { name: string; email: string; password: string; bio: string; city: string; country: string; avatar: string } =
        Object(request["body"]);

      const PrismaRepository = new PrismaCompanyRepository();
      const CreateUseCase = new CompanyCreateUseCase(PrismaRepository);

      const company = await CreateUseCase.execute({
        name,
        email,
        password,
        bio,
        city,
        country,
        avatar,
      });

      return response.status(200).send(new CSuccess(true, company));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }

  async read(request: Request, response: Response): Promise<any> {
    try {
      const PrismaRepository = new PrismaCompanyRepository();
      const ReadUseCase = new CompanyReadUseCase(PrismaRepository);

      const companies = await ReadUseCase.read();

      return response.status(200).send(new CSuccess(true, companies));
    } catch (error) {
      return response.status(200).send(new CError("Error at method read.", error));
    }
  }
}

export default new CompanyController();
