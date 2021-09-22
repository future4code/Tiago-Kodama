import { Request, Response } from "express";
import { countries } from "../assets/data";
import { country } from "../constants/types";

export const findAll = (req: Request, res: Response) => {
  try {
    res.send(countries);
  } catch (error) {
    res.status(404).send("We could not found");
  }
};

export const findCountryById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if(!id) {
        res.statusCode = 400
        throw new Error("Incorrect ID")
    }

    const findedCountry:(country|undefined) = countries.find(country => country.id===Number(id))

    if(!findedCountry){
        res.statusCode = 404
        throw new Error("This ID have not a country")
    }

  } catch (error:any) {
      res.send(error.message)
  }
};

export const filterByParameters = (req:Request, res:Response) => {
    try {
        const {name, capital, continent} = req.query

        if(!name && !capital && !continent){
            res.statusCode = 400
            throw new Error("Please, insert some filter")
        }

        throw new Error("Método não implementado");
        

    } catch (error:any) {
        res.send(error.message)
    }
}
