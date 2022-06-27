import { VacancyRepository } from "../../repositories/Vacancy";

interface VacancyCreateRequest {
  companyId: number;
  title: string;
  description: string;
  skill: string;
  salary: number;
}

export class VacancyCreateUseCase {
  constructor(private vacancyRepo: VacancyRepository) {}

  async execute(request: VacancyCreateRequest) {
    const { companyId, title, description, skill, salary } = request;

    if (!companyId || !title || !description || !skill || !salary) {
      throw new Error("All fields are required.");
    }

    const vacancy = await this.vacancyRepo.create({
      companyId,
      title,
      description,
      skill,
      salary,
    });

    return vacancy;
  }
}
