import { UserDataBase } from "../../database/UserDataBase";
import { UserRepository } from "../../repositories/UserRepository";
import { GetUserInfoController } from "./GetUserInfoController";
import { GetUserInfoUseCase } from "./GetUserInfoUseCase";

const userDataBase = new UserDataBase()
const userRepository = new UserRepository(userDataBase)
const getUserInfoUseCase = new GetUserInfoUseCase(userRepository)
const getUserIntoController = new GetUserInfoController(getUserInfoUseCase)

export { getUserIntoController }