export interface ProjectCreateData {
  userId: number;
  name: string;
  description: string;
}

export interface ProjectRepository {
  create: (data: ProjectCreateData) => Promise<any>;
  read: () => Promise<any>;
}
