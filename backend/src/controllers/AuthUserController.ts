import { Request, Response } from "express";
import crypto from "crypto";

import { PrismaUserLoginRepository } from "../repositories/prisma/AuthUserRepository";
import { CreateLoginUseCase } from "../use-cases/Auth/create-use-case";

import helper from "../services/helper";

import { CSuccess, CError } from "../classes/responses";

class UserAuthController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const { email, password }: { email: string; password: string } = Object(request["body"]);

      const PrismaRepository = new PrismaUserLoginRepository();
      const LoginUseCase = new CreateLoginUseCase(PrismaRepository);

      const user = await LoginUseCase.execute({
        email,
        password,
      });

      if (!user || user == null) {
        return response.status(404).send(new CError("Error at method create.", "User not found."));
      }

      if (password !== user["password"]) {
        return response.status(403).send(new CError("Error at method create.", "Wrong password."));
      }
      const hash = crypto.randomBytes(16).toString("hex");

      const token = await helper.generateToken(user["id"], hash);

      return response.status(200).send(new CSuccess(true, { user, token }));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }
}

export default new UserAuthController();
