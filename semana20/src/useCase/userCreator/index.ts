import { UserRepository } from "../../repository/UserRepository";
import { UserCreatorController } from "./UserCreatorController";
import { UserCreatorUseCase } from "./UserCreatorUseCase";

const userRepository = new UserRepository()
const userCreatorUseCase = new UserCreatorUseCase(userRepository)
const userCreatorController = new UserCreatorController(userCreatorUseCase)

export { userCreatorController }