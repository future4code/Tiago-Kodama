import { connection } from "../database/mysql";
import { Responsible } from "../models/responsible";
import { dateToBrFormat } from "../tools/handleDate";

export const findAll = async () => {
    return await connection('TodoListResponsibleUserTaskRelation')
}

export const findTasksByCreatorId = async (creatorId: string) => {
    const result = await connection.raw(`
        select 
        task_id as taskId,
        title,
        description,
        limit_date as limitDate,
        creator_user_id as creatorUserId,
        status,
        nickname as creatorUserNickname
        from TodoListResponsibleUserTaskRelation
        inner join TodoListUser
        on TodoListResponsibleUserTaskRelation.responsible_user_id = TodoListUser.id
        inner join TodoListTask
        on TodoListResponsibleUserTaskRelation.task_id = TodoListTask.id
        where creator_user_id = "${creatorId}";
    `)

    const tasks = result[0]

    tasks.forEach((task:any) => {
        task.limitDate = dateToBrFormat(task.limitDate)
    });

    return result[0]
}

export const createResponsible = async (taskId: string, userId: string) => {
    await connection('TodoListResponsibleUserTaskRelation')
        .insert({
            "task_id": taskId,
            "responsible_user_id": userId
        })
}

export const removeResponsible = async (responsible: Responsible) => {
    await connection('TodoListResponsibleUserTaskRelation')
        .where("task_id", responsible.taskId)
        .andWhere("responsible_user_id", responsible.userId)
        .del()
}