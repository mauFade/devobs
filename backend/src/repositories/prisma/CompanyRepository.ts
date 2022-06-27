import { CompanyCreateData, CompanyRepository } from "../Company";
import prisma from "../../services/prisma";

export class PrismaCompanyRepository implements CompanyRepository {
  async create({ name, email, password, bio, city, country, avatar }: CompanyCreateData) {
    const company = await prisma.company.create({
      data: {
        name,
        email,
        password,
        bio,
        city,
        country,
        avatar,
      },
    });

    return company;
  }

  async read() {
    const companies = await prisma.company.findMany();

    return companies;
  }
}
