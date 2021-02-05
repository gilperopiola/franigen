import { Entity } from './utils'

export function parseModel(model: string): Entity | null {
  /* model splitting */
  let halfModel = model.split('{')

  if (halfModel.length !== 2) {
    return null
  }

  let beforeBrackets = halfModel[0]
  let afterBrackets = halfModel[1].replace('}', '')

  /* model data parsing */
  let entity: Entity = { name: '', fields: new Map<string, string>() }
  entity.name = beforeBrackets.replace('type', '').replace('struct', '').trim()

  if (afterBrackets.includes('gorm.Model')) {
    entity.fields.set('id', 'uint')
    afterBrackets = afterBrackets
      .replace('gorm.Model', '')
      .trim()
      .replace(/\t/g, ' ')
      .replace(/(\r\n|\n|\r)/gm, '')
  }

  let words = afterBrackets.split(' ')
  let varTypes: string[] = ['uint', 'int', 'string', 'bool', 'time.Time', 'float32', 'float64']
  let pointerVarTypes: string[] = varTypes.map((type) => {
    return '*' + type
  })

  let unusedWord = ''
  words.map((word, i) => {
    if (varTypes.includes(word) || pointerVarTypes.includes(word)) {
      entity.fields.set(unusedWord, word)
      unusedWord = ''
    } else {
      if (unusedWord !== '') {
        return null
      }
      unusedWord = word
    }
  })

  return entity
}
