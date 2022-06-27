import { AuthRepository } from "../../repositories/Auth";

interface LoginRequest {
  email: string;
  password: string;
}

export class CreateLoginUseCase {
  constructor(private LoginRepo: AuthRepository) {}

  async execute(request: LoginRequest) {
    const { email, password } = request;

    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const user = await this.LoginRepo.create({
      email,
      password,
    });

    return user;
  }
}
