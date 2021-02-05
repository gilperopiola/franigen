import { Entity } from './utils'

export function replace(template: string, entity: Entity): string {
  return template
    .replace(/%%%Name%%%/g, entity.name)
    .replace(/%%%Name.Lowercase%%%/g, entity.name.toLowerCase())
    .replace(/%%%Backtick%%%/g, '`')
}
