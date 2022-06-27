import { CreateLoginUseCase } from "./../use-cases/Auth/create-use-case";
import { PrismaCompanyLoginRepository } from "./../repositories/prisma/AuthCompanyRepository";
import { Request, Response } from "express";
import crypto from "crypto";

import helper from "../services/helper";

import { CSuccess, CError } from "../classes/responses";

class AuthCompanyController {
  async create(request: Request, response: Response) {
    try {
      const { email, password }: { email: string; password: string } = Object(request["body"]);

      const PrismaRepository = new PrismaCompanyLoginRepository();
      const LoginUseCase = new CreateLoginUseCase(PrismaRepository);

      const company = await LoginUseCase.execute({
        email,
        password,
      });

      if (!company || company == null) {
        return response.status(404).send(new CError("Error at method create.", "Company not found."));
      }

      if (password !== company["password"]) {
        return response.status(403).send(new CError("Error at method create.", "Invalid password."));
      }

      const hash = crypto.randomBytes(16).toString("hex");

      const token = await helper.generateToken(company["id"], hash);

      return response.status(200).send(new CSuccess(true, { company, token }));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }
}

export default new AuthCompanyController();
