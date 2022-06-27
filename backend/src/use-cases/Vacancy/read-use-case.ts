import { VacancyRepository } from "./../../repositories/Vacancy";

export class VacancyReadUseCase {
  constructor(private vacancyRepo: VacancyRepository) {}

  async read() {
    const vacancies = await this.vacancyRepo.read();

    return vacancies;
  }
}
