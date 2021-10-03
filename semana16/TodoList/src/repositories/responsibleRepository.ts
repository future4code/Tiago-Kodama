import { connection } from "../database/mysql";
import { Responsible } from "../models/responsible";

export const findAll = async () => {
    return await connection('TodoListResponsibleUserTaskRelation')
}

export const createResponsible = async (taskId: string, userId: string) => {
    await connection('TodoListResponsibleUserTaskRelation')
        .insert({
            taskId,
            userId
        })
}

export const removeResponsible = async (responsible: Responsible) => {
    await connection('TodoListResponsibleUserTaskRelation')
        .where("task_id", responsible.taskId)
        .andWhere("responsible_user_id", responsible.userId)
        .del()
}