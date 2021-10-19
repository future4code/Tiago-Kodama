import { connection } from "../database/mysql";
import { User } from "../models/user";
import { toStringFormatDDD } from "../tools/handleID";

export const searchUsers = async (query: string): Promise<Array<User>> => {
  const response = await connection.raw(`
    select id, nickname from TodoListUser
    where (name like '%${query}%')
    or (nickname like '%${query}%')
    or (email like '%${query}%');
  `);

  return response[0];
};

export const findUsers = async () => {
  return await connection("TodoListUser");
};

export const findUsersById = async (id: string): Promise<User | undefined> => {
  const result = await connection("TodoListUser").where({ id });

  if (!result.length) {
    return undefined;
  }

  const user: User = {
    id: result[0].id,
    name: result[0].name,
    nickname: result[0].nickname,
    email: result[0].email,
  };

  return user;
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

  const newUser: User = {
    id,
    name,
    nickname,
    email,
  };

  return newUser;
};

export const updateUser = async (user: User): Promise<any> => {
  await connection("TodoListUser")
    .where({
      id: user.id,
    })
    .update({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email || undefined,
    });
};

export const removeUser = async (id: string): Promise<any> => {
    await connection.raw(`
    delete from TodoListResponsibleUserTaskRelation
    where TodoListResponsibleUserTaskRelation.responsible_user_id = "${id}";
    `);
    await connection.raw(`
    delete from TodoListTask
    where TodoListTask.creator_user_id = "${id}";
    `);
    await connection.raw(`
    delete from TodoListUser
    where TodoListUser.id = "${id}";
    `);
};
