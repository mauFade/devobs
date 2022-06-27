import { UserRepository } from "../../repositories/User";

export class UserReadUseCase {
  constructor(private userRepo: UserRepository) {}

  async read() {
    const users = await this.userRepo.read();

    return users;
  }
}
