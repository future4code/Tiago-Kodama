import { connection } from "../database/mysql";
import { Task } from "../models/task";
import { dateToBrFormat } from "../tools/handleDate";
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
        where TodoListTask.id = "${id}";
    `);

  const tasks: Array<Task> = result[0];

  return tasks;
};

export const findTasksByStatusController = async (status: string) => {
  const result = await connection.raw(`
    select
    TodoListTask.id as "taskId",
    title,
    description,
    limit_date as limitDate,
    creator_user_id as creatorUserId,
    nickname as creatorUserNickname
    from TodoListTask
    left join TodoListUser
    on TodoListTask.id = TodoListUser.id
    where TodoListTask.status = "${status}";
  `);

  const tasks = result[0];

  tasks.forEach((task: any) => {
    task.limitDate = dateToBrFormat(task.limitDate);
  });

  return tasks;
};

export const getDelayedTasks = async () => {
  const result = await connection.raw(`
    select
    TodoListTask.id as taskId,
    title,
    description,
    limit_date as limitDate,
    creator_user_id as creatorUserId,
    nickname as creatorUserNickname
    from TodoListTask
    left join TodoListUser
    on TodoListTask.creator_user_id = TodoListUser.id
    where TodoListTask.limit_date < curdate()
    and TodoListTask.status <> "done";
  `);

  const tasks = result[0];

  tasks.forEach((task: any) => {
    task.limitDate = dateToBrFormat(task.limitDate);
  });

  return tasks;
};

export const updateTaskStausByTaskId = async (
  taskId: string,
  status: string
) => {
  await connection.raw(`
    update TodoListTask
    set status = "${status}"
    where id = "${taskId}";
  `);
};

export const findTasksByQuery = async (query: string) => {
  const result = await connection.raw(`
    select
    TodoListTask.id as taskId,
    title,
    description,
    limit_date as limitDate,
    creator_user_id as creatorUserId,
    nickname as creatorUserNickname
    from TodoListTask
    left join TodoListUser
    on TodoListUser.id = TodoListTask.creator_user_id
    where TodoListTask.description like "%${query}%"
    or TodoListTask.title like "%${query}%";
  `)

  const tasks = result[0]

  tasks.forEach((task:any) => {
    task.limitDate = dateToBrFormat(task.limitDate)
  })

  return tasks
}