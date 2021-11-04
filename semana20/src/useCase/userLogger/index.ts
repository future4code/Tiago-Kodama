import { UserRepository } from "../../repository/UserRepository";
import { UserLoggerController } from "./UserLoggerController";
import { UserLoggerUseCase } from "./UserLoggerUseCase";

const userRepository = new UserRepository()
const userLoggerUseCase = new UserLoggerUseCase(userRepository)
const userLoggerController = new UserLoggerController(userLoggerUseCase)

export { userLoggerController }