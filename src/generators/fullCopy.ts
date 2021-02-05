import * as vscode from 'vscode'
import { getAction, getClipboard, getTemplate, getSeparator, Section } from '../utils'
import { parseModel } from '../parser'
import { replace } from '../replacer'
import { errors } from '../errors'

export function generateFullCopy() {
  getAction()
    .then((action) => {
      if (!action) {
        errors.showInvalidAction()
        return
      }

      getClipboard().then(
        (clipboard) => {
          if (!clipboard) {
            errors.showInvalidClipboard()
            return
          }

          let entity = parseModel(clipboard)
          if (!entity) {
            errors.showInvalidEntity()
            return
          }

          let codeEntrypoint = replace(getTemplate(Section.Entrypoint, action), entity)
          let codeUseCase = replace(getTemplate(Section.UseCase, action), entity)
          let codeContract = replace(getTemplate(Section.Contract, action), entity)
          let codeRepository = replace(getTemplate(Section.Repository, action), entity)
          let separator = getSeparator()

          vscode.env.clipboard.writeText(codeEntrypoint + separator + codeUseCase + separator + codeContract + separator + codeRepository)
          vscode.window.showInformationMessage(';)')
        },
        (error) => {
          errors.show(error)
        }
      )
    })
    .catch((error) => {
      errors.show(error)
      return
    })
}
