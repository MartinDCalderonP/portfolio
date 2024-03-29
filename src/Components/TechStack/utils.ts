import { techs } from './techs'

export const sortedTechsByItemYears = techs?.map((tech) => ({
  ...tech,
  items: [...tech.items].sort((a, b) => b.year - a.year)
}))
