import { UserRepository } from "../../repositories/User";

interface UserCreateRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  cellphone: string;
  city: string;
  country: string;
  github?: string;
  linkedIn?: string;
  avatar?: string;
}

export class UserCreateUseCase {
  constructor(private UserRepo: UserRepository) {}

  async execute(request: UserCreateRequest) {
    const { name, lastName, email, password, cellphone, city, country, github, linkedIn, avatar } = request;

    if (!name || !lastName || !email || !password || !cellphone || !city || !country) {
      throw new Error("All fields are is required.");
    }

    const user = await this.UserRepo.create({
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
    });

    return user;
  }
}
