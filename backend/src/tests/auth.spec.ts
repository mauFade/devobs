import { CreateLoginUseCase } from "../use-cases/Auth/create-use-case";

const createSpy = jest.fn();

const createlogin = new CreateLoginUseCase({ create: createSpy });

describe("User login", () => {
  it("Should resolve the login", () => {
    expect(
      createlogin.execute({
        email: "any@email.com",
        password: "any",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error if there's no parameters", () => {
    expect(
      createlogin.execute({
        email: "",
        password: "any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error if there's no parameters", () => {
    expect(
      createlogin.execute({
        email: "any@email.com",
        password: "",
      })
    ).rejects.toThrow();
  });
});

describe("Company login", () => {
  it("Should resolve the login", () => {
    expect(
      createlogin.execute({
        email: "company@email.com",
        password: "company",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error if there's no email", () => {
    expect(
      createlogin.execute({
        email: "",
        password: "any",
      })
    ).rejects.toThrow();
  });

  it("Should throw error if there's no password", () => {
    expect(
      createlogin.execute({
        email: "any@email.com",
        password: "",
      })
    ).rejects.toThrow();
  });
});
