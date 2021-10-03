import { Request, Response } from "express";
import { User } from "../models/user";
import {
  createUser,
  findUsersById,
  findUsers,
  removeUser,
  updateUser,
  searchUsers,
} from "../repositories/repositoryUser";

export const searchUsersController = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const query: string = req.query.query as string;

    if (!query) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const foundUser = await searchUsers(query);

    res.status(200).send({ users: foundUser });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const users = await findUsers();

    res.status(200).send(users);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const name: string = req.body.name;
    const email: string = req.body.email;
    const nickname: string = req.body.nickname;

    if (!name || !email || !nickname) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const user: User = await createUser(name, nickname, email);

    res.status(201).send(user);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const id: string = req.params.id;

    if (!id) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const user = await findUsersById(id);

    if (!user) {
      res.statusCode = 404;
      throw new Error("User not found");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const id: string = req.params.id;
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;

    if (!id || !name || !nickname) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const user: User = {
      id,
      name,
      nickname,
    };

    await updateUser(user);

    res.status(200).end();
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const removeUserById = async (req:Request, res:Response) => {
  try {
    res.statusCode = 400

    const userId:string = req.params.id as string

    if(!userId){
      res.statusCode = 422
      throw new Error("Missing arguments")
    }

    await removeUser(userId)

    res.status(200).end()

  } catch (error:any) {
    res.send(error.message || error.sqlMessage)
  }
}