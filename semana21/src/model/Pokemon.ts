export interface Pokemon {
  Id: string;
  PokemonNumber: number;
  Name: string;
  Generation: number;
  Evolved: string;
  FamilyID: number;
  CrossGen: number;
  STATTOTAL: number;
  ATK: number;
  DEF: number;
  STA: number;
  Legendary: number;
  Aquireable: number;
  Spawns: number;
  Regional: number;
  Raidable: number;
  Hatchable: number;
  Shiny: number;
  Nest: number;
  New: number;
  FutureEvolve: number;

  Types?: Array<string>;
  Weather?: Array<string>;
}
