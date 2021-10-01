import { Response, Request } from "express"
import { Task } from "../models/task"
import {
    createTaskController,
    getTaskById
} from "../repositories/repositoryTask"
import { brFormatToDate } from "../tools/handleDate"

export const createTask = async (req:Request, res:Response) => {
    try {
        res.statusCode = 400

        const title:string = req.body.title
        const description:string = req.body.description
        const creatorUserId:string = req.body.creatorUserId
        const limitDate:(Date|undefined) = brFormatToDate(req.body.limitDate)

        if(!limitDate){
            res.statusCode = 422
            throw new Error("Incorrect format of limitDate")
        }

        if(!title||!description||!creatorUserId){
            res.statusCode = 422
            throw new Error("Missing arguments")
        }

        const task = await createTaskController(
            title,
            description,
            limitDate,
            creatorUserId
        )

        res.status(201).send(task)

    } catch (error:any) {
        res.send(error.message)
    }
}

export const findTaskById = async (req:Request, res:Response) => {
    try {
        res.statusCode = 400

        const id_creator:string = req.params.id

        if(!id_creator){
            res.statusCode = 422
            throw new Error("Missing arguments")
        }

        const tasks: Array<Task> = await getTaskById(id_creator)


        if(!tasks.length){
            res.statusCode = 404
            throw new Error("There are not task")
        }

        res.status(200).send(tasks)
        
    } catch (error:any) {
        res.send(error.message)
    }
}