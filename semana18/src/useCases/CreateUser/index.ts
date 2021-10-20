import { MySQLUsersRepositories } from "../../repositories/implementations/MySQLUsersRepositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mySQLUsersRepositories = new MySQLUsersRepositories();
const createUserUseCase = new CreateUserUseCase(mySQLUsersRepositories);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
