export interface VacancyCreateData {
  companyId: number;
  title: string;
  description: string;
  skill: string;
  salary: number;
}

export interface VacancyRepository {
  create: (data: VacancyCreateData) => Promise<any>;
  read: () => Promise<any>;
}
