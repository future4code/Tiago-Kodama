import { Response, Request } from "express";
import { User } from "../../entities/User";
import { ServerError } from "../../errors/ServerError";
import { generateToken } from "../../services/authenticator";
import { IAuthenticationDTO } from "../../services/IAuthenticationDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const name: string = req.body.name;
      const email: string = req.body.email;
      const password: string = req.body.password;

      if (!name || !email || !password)
        throw new ServerError("Missing arguments", 422);
      else if (!email.includes("@"))
        throw new ServerError("Email format is incorrecting", 422);
      else if (password.length < 6)
        throw new ServerError("Pasword must have 6 characteres", 422);

      const iCreateUserDTO: ICreateUserDTO = {
        name,
        email,
        password,
      };

      const user: User = await this.createUserUseCase.execute(iCreateUserDTO);
      const payload: IAuthenticationDTO = {
        id: user.id,
      };

      res.status(201).send({
        access_token: generateToken(payload),
      });
    } catch (error: any) {
      res.status(error.code || 400).send(error.message || "Unexpected error");
    }
  }
}
