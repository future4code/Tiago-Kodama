import { Request, Response } from "express";
import { country, CONTINENTS } from "../constants/types";
import { CountryRepository } from "../repositores/CountryRepositores";

const countryRepository: CountryRepository = new CountryRepository();

export const findAll = (req: Request, res: Response) => {
  try {
    res.send(countryRepository.getCountries());
  } catch (error: any) {
    console.log(error.message);
    res.status(404).send("We could not found");
  }
};

export const findCountryById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.statusCode = 400;
      throw new Error("Incorrect ID");
    }

    const findedCountry: country | undefined = countryRepository
      .getCountries()
      .find((country) => country.id === Number(id));

    if (!findedCountry) {
      res.statusCode = 404;
      throw new Error("This ID have not a country");
    }

    res.send(findedCountry);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const filterByParameters = (req: Request, res: Response) => {
  try {
    const { name, capital, continent } = req.query;

    if (!name && !capital && !continent) {
      res.statusCode = 400;
      throw new Error("Please, insert some filter");
    }

    const selectedCountry: Array<country> = countryRepository
      .getCountries()
      .filter((country) => {
        return country.name
          .toUpperCase()
          .includes((name as string).toUpperCase());
      })
      .filter((country) => {
        if (typeof capital === "string") {
          return country.capital.toUpperCase().includes(capital.toUpperCase());
        }
      })
      .filter((country) => {
        if (typeof continent === "string") {
          return country.continent
            .toUpperCase()
            .includes(continent.toUpperCase());
        }
      });

    if (!selectedCountry.length) {
      res.statusCode = 404;
      throw new Error("Not find");
    }

    res.send(selectedCountry);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const updateCountry = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, capital } = req.body;

    if (!id || !name || !capital) {
      res.statusCode = 400;
      throw new Error("Incorrect data");
    }

    const findedCountry: country | undefined = countryRepository
      .getCountries()
      .find((country) => country.id === Number(id));

    if (!findedCountry || !Object.keys(findedCountry)) {
      res.statusCode = 404;
      throw new Error("This ID have not a country");
    }

    findedCountry.name = name;
    findedCountry.capital = capital;

    countryRepository.update(findedCountry);

    res.send(findedCountry);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const removeCountry = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;

    if (!id || !authorization) {
      res.statusCode = 400;
      throw new Error("Incorrect data");
    }

    if (authorization.length < 10) {
      res.statusCode = 401;
      throw new Error("Incorrect authorization");
    }

    const findedCountry: country | undefined = countryRepository
      .getCountries()
      .find((country) => country.id === Number(id));

    if (!findedCountry) {
      res.statusCode = 404;
      throw new Error("This ID have not a country");
    }

    countryRepository.remove(Number(id))

    res.send("Removed");
  } catch (error: any) {
    res.send(error.message);
  }
};

export const createCountry = (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { name, capital, continent } = req.body;

    if (!name || !capital || !continent || !authorization) {
      res.statusCode = 400;
      throw new Error("Incorrect data");
    }

    if (authorization.length < 10) {
      res.statusCode = 401;
      throw new Error("Incorrect authorization");
    }

    const alreadyExist: boolean = countryRepository
      .getCountries()
      .some((country) =>
        country.name.toUpperCase().includes((name as string).toUpperCase())
      );

    if (alreadyExist) {
      res.statusCode = 400;
      throw new Error("This country already exists");
    }

    const newCountry: country = {
      capital: capital,
      name: name,
      continent: continent,
      id: Date.now(),
    };

    countryRepository.insert(newCountry);

    res.send({
      message: "Success!",
      country: newCountry,
    });
  } catch (error: any) {
    res.send(error.message);
  }
};
