import { techs } from './techs'

export const sortedTechsByItemYears = techs?.map((tech) => ({
  ...tech,
  items: tech.items.sort((a, b) => b.years - a.years)
}))
