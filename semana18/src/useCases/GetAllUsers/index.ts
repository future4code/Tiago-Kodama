import { MySQLUsersRepositories } from "../../repositories/implementations/MySQLUsersRepositories";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

const usersRepositories = new MySQLUsersRepositories()
const getAllUsersUseCase = new GetAllUsersUseCase(usersRepositories)
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)

export { getAllUsersController, getAllUsersUseCase }