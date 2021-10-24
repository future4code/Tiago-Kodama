import { UserDataBase } from "../../database/UserDataBase";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userDataBase = new UserDataBase()
const userRepository = new UserRepository(userDataBase)
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }