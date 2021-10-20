import { MySQLProductsRepository } from "../../repositories/implementations/MySQLProductsRepository";
import { GetAllProductsController } from "./GetAllProductsController";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

const productsRepository = new MySQLProductsRepository()
const getAllProductsUseCase = new GetAllProductsUseCase(productsRepository)
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)

export {getAllProductsUseCase, getAllProductsController}