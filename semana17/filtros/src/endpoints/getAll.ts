import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let name = req.query.name || "";
    let type = req.query.user || "";
    let ordenation = req.query.order as string;
    let page = Number(req.query.page);

    if (!page || isNaN(page)) {
      page = 0;
    }

    if (!["ASC", "DESC"].includes(ordenation)) {
      ordenation = "ASC";
    }

    const users = await connection("aula49_exercicio")
      .where("name", "like", `%${name}%`)
      .andWhere("type", "like", `%${type}%`)
      .orderBy("name", ordenation)
      .limit(5)
      .offset(5 * (page - 1));

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
