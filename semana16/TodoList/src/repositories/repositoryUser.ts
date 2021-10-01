import { connection } from "../database/mysql";
import { User } from "../models/user";
import { toStringFormatDDD } from "../tools/handleID";

/**
 *  id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
 */

export const findUsers = async () => {
  return await connection("TodoListUser");
};

export const findUsersById = async (id: string):(Promise<User | undefined>) => {
    const result = await connection("TodoListUser").where({id});

    console.log('O RESULTADO ENCONTRADO PELO ID É', result)
    
    if(!result){
        return undefined;
    }

    const user: User = {
        id: result[0].id,
        name: result[0].name,
        nickname: result[0].nickname,
        email: result[0].email
    }

    return user
  };

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<User> => {

  const users = await connection("TodoListUser");
  const id = toStringFormatDDD(users.length);

  await connection("TodoListUser").insert({
    id,
    name,
    nickname,
    email,
  });

  const newUser:User = {
    id,
    name,
    nickname,
    email,
  }

  return newUser
};

export const updateUser = async (user: User): Promise<any> => {

    await connection("TodoListUser")
        .where({
            id: user.id
        })
        .update({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email
        })
}

export const removeUser = async (id: number): Promise<any> => {

    await connection("TodoListUser")
        .where({
            id
        })
        .del()
}