import prisma from "../../services/prisma";
import { VacancyRepository, VacancyCreateData } from "./../Vacancy";

export class PrismaVacancyRepository implements VacancyRepository {
  async create({ companyId, title, description, skill, salary }: VacancyCreateData) {
    const vacancy = await prisma.vacancy.create({
      data: {
        companyId,
        title,
        description,
        skill,
        salary,
      },
    });

    return vacancy;
  }

  async read() {
    const companies = await prisma.company.findMany();

    return companies;
  }
}
