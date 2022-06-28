import { ProjectReadUseCase } from "./../use-cases/Project/read-use-case";
import { ProjectCreateUseCase } from "./../use-cases/Project/create-use-case";
const createSpy = jest.fn();
const readSpy = jest.fn();

describe("Create a project", () => {
  const createProject = new ProjectCreateUseCase({ create: createSpy, read: readSpy });

  it("Should create a new project", async () => {
    expect(
      createProject.execute({
        userId: 1,
        name: "Any",
        description: "any",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should return error due to missing name", async () => {
    expect(
      createProject.execute({
        userId: 1,
        name: "",
        description: "any",
      })
    ).rejects.toThrow();
  });

  it("Should return error due to missing description", async () => {
    expect(
      createProject.execute({
        userId: 1,
        name: "Any",
        description: "",
      })
    ).rejects.toThrow();
  });
});

describe("Get all projects", () => {
  const readProject = new ProjectReadUseCase({ create: createSpy, read: readSpy });

  it("Should return all projects", async () => {
    expect(readProject.read()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
