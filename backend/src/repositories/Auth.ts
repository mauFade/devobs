export interface LoginCreateData {
  email: string;
  password: string;
}

export interface AuthRepository {
  create: (data: LoginCreateData) => Promise<any>;
}
