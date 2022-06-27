export interface UserCreateData {
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

export interface UserRepository {
  create: (data: UserCreateData) => Promise<any>;
  read: () => Promise<any>;
}
