import { CompanyRepository } from "../../repositories/Company";

interface CompanyCreateRequest {
  name: string;
  email: string;
  password: string;
  bio: string;
  city: string;
  country: string;
  avatar?: string;
}

export class CompanyCreateUseCase {
  constructor(private companyRepo: CompanyRepository) {}

  async execute(request: CompanyCreateRequest) {
    const { name, email, password, bio, city, country, avatar } = request;

    if (!name || !email || !password || !bio || !city || !country) {
      throw new Error("All fileds are required.");
    }

    const company = await this.companyRepo.create({
      name,
      email,
      password,
      bio,
      city,
      country,
      avatar,
    });

    return company;
  }
}
