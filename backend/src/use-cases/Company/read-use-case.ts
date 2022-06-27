import { CompanyRepository } from "./../../repositories/Company";
export class CompanyReadUseCase {
  constructor(private companyRepo: CompanyRepository) {}

  async read() {
    const companies = await this.companyRepo.read();

    return companies;
  }
}
