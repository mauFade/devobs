import prisma from "../../services/prisma";
import { AuthRepository, LoginCreateData } from "../Auth";

export class PrismaCompanyLoginRepository implements AuthRepository {
  async create({ email, password }: LoginCreateData) {
    const company = await prisma.company.findFirst({
      where: {
        email,
        password,
      },
    });

    return company;
  }
}
