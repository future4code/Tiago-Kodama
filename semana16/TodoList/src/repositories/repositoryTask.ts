import { connection } from "../database/mysql";
import { Task } from "../models/task";
import { toStringFormatDDD } from "../tools/handleID";

export const createTaskController = async (
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: string
): Promise<Task> => {
  const tasks = await connection("TodoListTask");
  const id = toStringFormatDDD(tasks.length);

  const task: Task = {
    id,
    title,
    description,
    limitDate,
    creatorUserId,
  };

  await connection("TodoListTask").insert({
    id: task.id,
    title: task.title,
    description: task.description,
    limit_date: task.limitDate,
    creator_user_id: task.creatorUserId,
  });

  return task;
};

export const getTaskById = async (id: string): Promise<Array<Task>> => {
  const result = await connection.raw(`
        select 
        TodoListTask.id as taskId,
        title,
        description,
        status,
        TodoListTask.limit_date as limitDate,
        TodoListUser.id as creatorUserId,
        nickname as creatorUserNickname
        from TodoListTask
        join TodoListUser on
        TodoListTask.creator_user_id = TodoListUser.id
        where TodoListUser.id = "${id}";
    `);

  const tasks: Array<Task> = result[0];

  return tasks;
};
