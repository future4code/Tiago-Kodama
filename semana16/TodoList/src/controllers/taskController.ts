import { Response, Request } from "express";
import { Task } from "../models/task";
import { User } from "../models/user";
import {
  createTaskController,
  getTaskById,
  updateTaskStausByTaskId,
  findTasksByStatusController,
  getDelayedTasks,
  findTasksByQuery,
  removeTaskByTaskId
} from "../repositories/repositoryTask";
import {
  findTasksByCreatorId,
  createResponsible,
  findResponsiblesByTaskId,
  removeResponsible,
  removeResponsibleByTaskId
} from "../repositories/responsibleRepository";
import { findUsersById } from "../repositories/repositoryUser";
import { brFormatToDate } from "../tools/handleDate";

export const middlewareGetTask = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const informedQueries: Array<string> = Object.keys(req.query);

    if (informedQueries.includes("creatorUserId")) {
      return findTaskByCreatorId(req, res);
    } else if (informedQueries.includes("status")) {
      return findTasksByStatus(req, res);
    } else if (informedQueries.includes("query")) {
      return findTasksByQueryController(req, res);
    } else {
      res.statusCode = 422;
      throw new Error("Incorrect format");
    }
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const title: string = req.body.title;
    const description: string = req.body.description;
    const creatorUserId: string = req.body.creatorUserId;
    const limitDate: Date | undefined = brFormatToDate(req.body.limitDate);

    if (!limitDate) {
      res.statusCode = 422;
      throw new Error("Incorrect format of limitDate");
    }

    if (!title || !description || !creatorUserId) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const user: User | undefined = await findUsersById(creatorUserId);

    if (!user) {
      res.statusCode = 404;
      throw new Error("This ID does not exist");
    }

    const task = await createTaskController(
      title,
      description,
      limitDate,
      creatorUserId
    );

    res.status(201).send(task);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const createTaskResponsible = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const taskId: string = req.body.task_id as string;
    const userIds: Array<string> = req.body.responsible_user_ids;

    if (!taskId || !userIds) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }
    if (userIds.constructor !== Array || !userIds.length) {
      res.statusCode = 422;
      throw new Error("Incorrect format");
    }

    userIds.forEach(async (userId) => {
      await createResponsible(taskId, userId);
    });

    res.status(201).end();
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const findTaskById = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const taskId: string = req.params.id;

    if (!taskId) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const tasks: Array<Task> = await getTaskById(taskId);

    if (!tasks.length) {
      res.statusCode = 404;
      throw new Error("There are not task");
    }

    const responsibles = await findResponsiblesByTaskId(taskId);

    res.status(200).send({ ...tasks[0], responsibleUsers: responsibles });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const findTasksByStatus = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const status: string = req.query.status as string;

    if (!status) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const tasks = await findTasksByStatusController(status);

    res.status(200).send({ tasks: tasks });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const findTaskByCreatorId = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const id_creator: string = req.query.creatorUserId as string;

    if (!id_creator) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const tasks: Array<Task> = await findTasksByCreatorId(id_creator);

    if (!tasks.length) {
      res.statusCode = 404;
      throw new Error("There are not task");
    }

    res.status(200).send({ tasks: tasks });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const findAllResponsiblesById = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const taskId: string = req.params.id;

    if (!taskId) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const responsibles = await findResponsiblesByTaskId(taskId);

    res.status(200).send({ users: responsibles });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const findAllDelayedTasks = async (req: Request, res: Response) => {
  try {
    res.statusCode = 422;

    const tasks = await getDelayedTasks();

    res.status(200).send({ tasks: tasks });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const findTasksByQueryController = async (
  req: Request,
  res: Response
) => {
  try {
    res.statusCode = 400;

    const query: string = req.query.query as string;

    if (!query) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    const tasks = await findTasksByQuery(query);

    res.status(200).send({ tasks: tasks });
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const updateTaskStausByTaskIdController = async (
  req: Request,
  res: Response
) => {
  try {
    res.statusCode = 400;

    const taskId: string = req.params.id as string;
    const status: string = req.body.status as string;

    if (!taskId || !status) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    if (!["to_do,", "doing", "done"].includes(status)) {
      res.statusCode = 422;
      throw new Error("Status has to be to_do, doing or done");
    }

    updateTaskStausByTaskId(taskId, status);

    res.status(200).end();
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const updateTaskStausByTaskIdsController = async (
  req: Request,
  res: Response
) => {
  try {
    res.statusCode = 400;

    const taskIds: Array<string> = req.body.task_ids as Array<string>;
    const status: string = req.body.status as string;

    if (!taskIds || !status) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    } else if (taskIds.constructor !== Array || !taskIds.length) {
      res.statusCode = 422;
      throw new Error("Incorrect format");
    }

    if (!["to_do", "doing", "done"].includes(status)) {
      res.statusCode = 422;
      throw new Error("Status has to be to_do, doing or done");
    }

    taskIds.forEach(async (taskId) => {
      await updateTaskStausByTaskId(taskId, status);
    });

    res.status(200).end();
  } catch (error: any) {
    res.send(error.message || error.sqlMessage || error.sqlMessage);
  }
};

export const removeTaskResponsible = async (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const taskId: string = req.params.taskId as string;
    const responsibleUserId: string = req.params.responsibleUserId as string;

    if (!taskId || !responsibleUserId) {
      res.statusCode = 422;
      throw new Error("Missing arguments");
    }

    await removeResponsible(taskId, responsibleUserId);

    res.status(200).end();
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};

export const removeTask = async (req: Request, res:Response) => {
  try {
    res.statusCode = 400

    const taskId:string = req.params.id

    if(!taskId){
      res.statusCode = 422
      throw new Error("Missing arguments")
    }

    await removeResponsibleByTaskId(taskId)
    await removeTaskByTaskId(taskId)

    res.status(200).end()

  } catch (error:any) {
    res.send(error.message || error.sqlMessage || error.sqlMessage)
  }
}