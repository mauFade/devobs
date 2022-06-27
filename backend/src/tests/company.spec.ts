import { CompanyReadUseCase } from "./../use-cases/Company/read-use-case";
import { CompanyCreateUseCase } from "./../use-cases/Company/create-use-case";

const createSpy = jest.fn();
const readSpy = jest.fn();

describe("Create a company", () => {
  const createCompany = new CompanyCreateUseCase({ create: createSpy, read: readSpy });

  it("Should create a company", async () => {
    await expect(
      createCompany.execute({
        name: "example",
        email: "email@email.com",
        password: "any",
        bio: "any company",
        city: "Curitiba",
        country: "Brasil",
        avatar: undefined,
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error due to fields missing", async () => {
    await expect(
      createCompany.execute({
        name: "",
        email: "email@email.com",
        password: "any",
        bio: "any company",
        city: "Curitiba",
        country: "Brasil",
        avatar: undefined,
      })
    ).rejects.toThrow();
  });

  it("Should throw error due to fields missing", async () => {
    await expect(
      createCompany.execute({
        name: "any",
        email: "",
        password: "any",
        bio: "any company",
        city: "Curitiba",
        country: "Brasil",
        avatar: undefined,
      })
    ).rejects.toThrow();
  });

  it("Should throw error due to fields missing", async () => {
    await expect(
      createCompany.execute({
        name: "any",
        email: "email@email.com",
        password: "",
        bio: "any company",
        city: "Curitiba",
        country: "Brasil",
        avatar: undefined,
      })
    ).rejects.toThrow();
  });

  it("Should throw error due to fields missing", async () => {
    await expect(
      createCompany.execute({
        name: "any",
        email: "email@email.com",
        password: "any",
        bio: "",
        city: "Curitiba",
        country: "Brasil",
        avatar: undefined,
      })
    ).rejects.toThrow();
  });
});

describe("Get all companies", () => {
  const readCompany = new CompanyReadUseCase({ create: createSpy, read: readSpy });

  it("Should return all companies", async () => {
    await expect(readCompany.read()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
