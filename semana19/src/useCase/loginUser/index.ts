import { UserDataBase } from "../../database/UserDataBase";
import { UserRepository } from "../../repositories/UserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const userDataBase = new UserDataBase()
const userRepository = new UserRepository(userDataBase)
const loginUserUseCase = new LoginUserUseCase(userRepository)
const loginUserController = new LoginUserController(loginUserUseCase)

export { loginUserController }