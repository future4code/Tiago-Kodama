import { connection } from "../database/mysql";

export const getActorById = async (
    id:string
    ):Promise<any> => {
    
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0]
}

export const getActorsByGender = async (
    gender: string
):Promise<any> => {

    const result = await connection.raw(`
        SELECT * FROM Actor WHERE gender = "${gender}"
    `)

    return result[0]
}

export const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {

    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

  export const updateActorById = async (
      id:string,
      data: any
  ):Promise<any> => {

    await connection("Actor")
        .update(data)
        .where({
            id: id
        })
  }

  export const deleteActorById = async (
    id:string
):Promise<any> => {

  await connection("Actor")
    .where("id", id)
    .delete()
}