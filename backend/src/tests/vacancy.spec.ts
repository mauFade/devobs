import { VacancyReadUseCase } from "./../use-cases/Vacancy/read-use-case";
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

    expect(createSpy).toHaveBeenCalled();
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

describe("Get all vacancies", () => {
  const readVacancy = new VacancyReadUseCase({ create: createSpy, read: readSpy });

  it("Should return all vacancies", async () => {
    await expect(readVacancy.read()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
