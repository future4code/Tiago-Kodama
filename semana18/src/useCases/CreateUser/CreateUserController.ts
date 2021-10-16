import { Request, Response } from "express";
import { MyError } from "../../MyError";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(201).send();
    } catch (error: MyError | any) {
      return res.status(error.statusCode).send(error.message);
    }
  }
}
