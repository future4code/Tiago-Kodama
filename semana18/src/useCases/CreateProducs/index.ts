import { MySQLProductsRepository } from "../../repositories/implementations/MySQLProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

const productRepository = new MySQLProductsRepository()
const createProductsUseCase = new CreateProductsUseCase(productRepository)
const createProductController = new CreateProductController(createProductsUseCase)

export { createProductController, createProductsUseCase }