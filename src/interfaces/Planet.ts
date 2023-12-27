export interface PlanetsResponse {
  results: Planet[]
}

export enum PlanetEnum {
  Name = 'name',
  Population = 'population',
  RotationPeriod = 'rotation_period',
  Climate = 'climate',
  Gravity = 'gravity',
  Created = 'created',
  Url = 'url'
}

export type Planet = {
  [Key in PlanetEnum]: string
}
