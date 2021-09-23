import { Response, Request } from "express";
import { user, PRIVILAGE } from "../constants/types";
import {
  findUsers,
  findUsersByType,
  findUserByName,
  createUser,
  alterateUser
} from "../models/user";

export const getUsers = (req: Request, res: Response) => {
  try {
    const users: Array<user> = findUsers();

    res.send(users);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getUsersByType = (req: Request, res: Response) => {
  try {
    const type: PRIVILAGE = req.params.type as PRIVILAGE;

    if (!Object.values(PRIVILAGE).includes(type)) {
      res.statusCode = 404;
      throw new Error("Incorrect params");
    }

    res.send(findUsersByType(type));
  } catch (error: any) {
    res.send(error.message);
  }
};

export const getUserByName = (req: Request, res: Response) => {
  try {
    const name: string = req.params.name as string;

    if (!name) {
      res.statusCode = 422;
      throw new Error("Missing name.");
    }

    const findedUser: user | undefined = findUserByName(name);

    if (!findedUser) {
      res.statusCode = 404;
      throw new Error("This user do not exists.");
    }

    res.send(findedUser);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const newUser = (req: Request, res: Response) => {
  try {
    res.statusCode = 409

    const { name, email, age, type } = req.body;

    if(!name || !email || !age || !type){
        res.statusCode = 422
        throw new Error('Missing arguments')
    }

    if(!Object.values(PRIVILAGE).includes(type)){
        res.statusCode = 422
        throw new Error('Type has to be NORMAL OR ADMIN')
    }

    const user = createUser(name, age, email, type);

    res.status(201).send(user)

  } catch (error:any) {
      res.send(error.message)
  }
};

export const updateUser = (req:Request, res:Response) => {
    try {
        res.statusCode = 401

        const id:number = req.body.id

        if(isNaN(id)){
            res.statusCode = 422
            throw new Error('Missing id')
        }

        alterateUser(id)

        res.status(201).end()

    } catch (error) {
        res.end()
    }
}