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

    res.send(findedCountry)

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

        const selectedCountry:Array<country> = countries
                  .filter(country => {
                    if(typeof name === 'string'){
                      return country.name.toUpperCase().includes(name.toUpperCase())
                    }
                  })
                  .filter(country => {
                    if(typeof capital === 'string'){
                      return country.capital.toUpperCase().includes(capital.toUpperCase())
                    }
                  })
                  .filter(country => {
                    if(typeof continent === 'string'){
                      return country.continent.toUpperCase().includes(continent.toUpperCase())
                    }
                  })

        if(!selectedCountry.length){
          res.statusCode = 404
          throw new Error("Not find")
        }
        
        res.send(selectedCountry)

    } catch (error:any) {
        res.send(error.message)
    }
}

export const updateCountry = (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const { name, capital } = req.body

    if(!id || !name || !capital) {
        res.statusCode = 400
        throw new Error("Incorrect data")
    }

    const findedCountry:(country|undefined) = countries.find(country => country.id===Number(id))

    if(!findedCountry){
        res.statusCode = 404
        throw new Error("This ID have not a country")
    }


    //Pensar como fazer a edição


    res.send("Updated")

    
  } catch (error:any) {
    res.send(error.message)
  }
}