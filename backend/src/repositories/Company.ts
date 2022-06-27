export interface CompanyCreateData {
  name: string;
  email: string;
  password: string;
  bio: string;
  city: string;
  country: string;
  avatar?: string;
}

export interface CompanyRepository {
  create: (data: CompanyCreateData) => Promise<any>;
  read: () => Promise<any>;
}
