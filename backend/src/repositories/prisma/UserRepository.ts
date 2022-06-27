import { UserCreateData, UserRepository } from "../User";
import prisma from "../../services/prisma";

export class PrismaUserRepository implements UserRepository {
  async create({
    name,
    lastName,
    email,
    password,
    cellphone,
    city,
    country,
    github,
    linkedIn,
    avatar,
  }: UserCreateData) {
    const user = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password,
        cellphone,
        city,
        country,
        github,
        linkedIn,
        avatar,
      },
    });

    return user;
  }

  async read() {
    const users = await prisma.user.findMany();

    return users;
  }
}
