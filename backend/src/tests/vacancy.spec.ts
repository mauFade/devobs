import { VacancyCreateUseCase } from "../use-cases/Vacancy/create-use-case";

const createSpy = jest.fn();
const readSpy = jest.fn();

describe("Create a vacancy", () => {
  const createVacancy = new VacancyCreateUseCase({ create: createSpy, read: readSpy });

  it("Should create a vacancy", async () => {
    await expect(
      createVacancy.execute({
        companyId: 1,
        title: "Any",
        description: "Any",
        skill: "Jr",
        salary: 2000,
      })
    ).resolves.not.toThrow();
  });

  it("Should return error due to missing title", async () => {
    await expect(
      createVacancy.execute({
        companyId: 1,
        title: "",
        description: "Any",
        skill: "Jr",
        salary: 2000,
      })
    ).rejects.toThrow();
  });

  it("Should return error due to missing description", async () => {
    await expect(
      createVacancy.execute({
        companyId: 1,
        title: "Any",
        description: "",
        skill: "Jr",
        salary: 2000,
      })
    ).rejects.toThrow();
  });

  it("Should return error due to missing skill", async () => {
    await expect(
      createVacancy.execute({
        companyId: 1,
        title: "Any",
        description: "Any",
        skill: "",
        salary: 2000,
      })
    ).rejects.toThrow();
  });

  it("Should return error due to missing salary", async () => {
    await expect(
      createVacancy.execute({
        companyId: 1,
        title: "Any",
        description: "Any",
        skill: "Any",
        salary: 0,
      })
    ).rejects.toThrow();
  });
});
