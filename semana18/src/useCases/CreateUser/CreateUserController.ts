import { Request, Response } from "express";
import { MyError } from "../../MyError";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const {name, email, age} = req.body

      if(!name || typeof name !== 'string') throw new MyError('Missing name', 402)
      else if(!email) throw new MyError("Missing email", 402)
      else if(!age || typeof age !== 'number') throw new MyError("Missing age", 402)

      const data: ICreateUserRequestDTO = {
        name,
        email,
        age
      }

      await this.createUserUseCase.execute(data)

      res.status(201).end();

    } catch (error: MyError | any) {
      res.status(error.statusCode || 400).send(error.sqlMessage || error.message || "Unexpected error");
    }
  }
}
