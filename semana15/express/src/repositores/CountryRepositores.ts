import { country } from "../constants/types";
import { countries } from "../assets/data";

export class CountryRepository {
  countries: Array<country>;

  constructor() {
    this.countries = countries;
  }

  public getCountries(): Array<country> {
    return this.countries;
  }

  public insert(countryToAdd: country, position?: number): void {
    if ((position as number) > 0) {
      this.countries.splice((position as number) + 1, 0, countryToAdd);
    } else {
      this.countries.push(countryToAdd);
    }
  }

  public remove(id: number): void {
    const newList = this.countries.filter((country) => country.id !== id);
    this.countries = newList;
  }

  public update(newCountry: country): void {
    this.insert(newCountry, newCountry.id);
  }
}
