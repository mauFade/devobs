import { Request, Response } from "express";
import crypto from "crypto";

import { PrismaUserRepository } from "../repositories/prisma/UserRepository";
import { UserCreateUseCase } from "../use-cases/User/create-use-case";
import { UserReadUseCase } from "../use-cases/User/read-use-case";

import helper from "../services/helper";

import { CSuccess, CError } from "../classes/responses";

class UserController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const {
        name,
        lastName,
        email,
        password,
        cellphone,
        city,
        country,
        github,
        linkedIn,
      }: {
        name: string;
        lastName: string;
        email: string;
        password: string;
        cellphone: string;
        city: string;
        country: string;
        github?: string;
        linkedIn?: string;
      } = Object(request["body"]);

      const PrismaRepository = new PrismaUserRepository();
      const CreateUseCase = new UserCreateUseCase(PrismaRepository);

      const user = await CreateUseCase.execute({
        name,
        lastName,
        email,
        password,
        cellphone,
        city,
        country,
        github,
        linkedIn,
      });

      const hash = crypto.randomBytes(16).toString("hex");

      const token = await helper.generateToken(user["id"], hash);

      return response.status(200).send(new CSuccess(true, { user, token }));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }

  async read(request: Request, response: Response): Promise<any> {
    try {
      const PrismaRepository = new PrismaUserRepository();
      const ReadUseCase = new UserReadUseCase(PrismaRepository);

      const users = await ReadUseCase.read();

      return response.status(200).send(new CSuccess(true, users));
    } catch (error) {
      return response.status(500).send(new CError("Error at method read.", error));
    }
  }
}

export default new UserController();
