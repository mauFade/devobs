import { AuthRepository, LoginCreateData } from "../Auth";
import prisma from "../../services/prisma";

export class PrismaUserLoginRepository implements AuthRepository {
  async create({ email, password }: LoginCreateData) {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    return user;
  }
}
