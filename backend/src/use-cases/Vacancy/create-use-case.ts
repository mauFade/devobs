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

    if (!title) {
      throw new Error("Title is required.");
    }

    if (!description) {
      throw new Error("Description is required.");
    }

    if (!skill) {
      throw new Error("Skill level or experience is required.");
    }

    if (salary < 1 || salary === 0) {
      throw new Error("Salary is required.");
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
