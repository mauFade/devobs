import { UserCreateUseCase } from "../use-cases/User/create-use-case";
import { UserReadUseCase } from "../use-cases/User/read-use-case";

const createSpy = jest.fn();
const readSpy = jest.fn();

describe("Create a user", () => {
  const createUser = new UserCreateUseCase({ create: createSpy, read: readSpy });

  it("Should create a user", async () => {
    await expect(
      createUser.execute({
        name: "Test",
        lastName: "da Silva",
        email: "test@test.com",
        password: "testhash",
        cellphone: "41999999999",
        city: "Curitiba",
        country: "Brasil",
        github: "test",
        linkedIn: "/in/test",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw a error if no fields are sent", async () => {
    await expect(
      createUser.execute({
        name: "",
        lastName: "da Silva",
        email: "test@test.com",
        password: "testhash",
        cellphone: "41999999999",
        city: "Curitiba",
        country: "Brasil",
        github: "test",
        linkedIn: "/in/test",
      })
    ).rejects.toThrow();
  });

  it("Should throw a error if no fields are sent", async () => {
    await expect(
      createUser.execute({
        name: "Test",
        lastName: "",
        email: "test@test.com",
        password: "testhash",
        cellphone: "41999999999",
        city: "Curitiba",
        country: "Brasil",
        github: "test",
        linkedIn: "/in/test",
      })
    ).rejects.toThrow();
  });

  it("Should throw a error if no fields are sent", async () => {
    await expect(
      createUser.execute({
        name: "Test",
        lastName: "da Silva",
        email: "",
        password: "testhash",
        cellphone: "41999999999",
        city: "Curitiba",
        country: "Brasil",
        github: "test",
        linkedIn: "/in/test",
      })
    ).rejects.toThrow();
  });
});

describe("Read users", () => {
  const readUser = new UserReadUseCase({ create: createSpy, read: readSpy });

  it("Should return users", async () => {
    await expect(readUser.read()).resolves.not.toThrow();

    expect(readSpy).toHaveBeenCalled();
  });
});
