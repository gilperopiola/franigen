import * as vscode from 'vscode'
import { Templates } from './templates/templates'

export interface Entity {
  name: string
  fields: Map<string, string>
}

export enum Action {
  Create = 1,
  Update,
  Delete,
  Single,
  Select
}

export enum Section {
  Entrypoint = 1,
  UseCase = 2,
  Contract = 3,
  Repository = 4
}

export async function getAction(): Promise<Action | null> {
  const actionThenable = vscode.window.showInputBox({ prompt: '1 = Create; 2 = Update; 3 = Delete; 4 = Single; 5 = Select' })

  actionThenable.then(
    (action = '') => {
      if (parseInt(action) in Action) {
        return parseInt(action) as Action
      }

      return null
    },
    () => {
      return null
    }
  )

  const result = (await actionThenable) || ''

  return parseInt(result) as Action
}

export async function getClipboard(): Promise<string | null> {
  let clipboardThenable = vscode.env.clipboard.readText()

  clipboardThenable.then(
    (clipboard) => {
      return clipboard
    },
    () => {
      return null
    }
  )

  const result = (await clipboardThenable) || ''

  return result
}

export function getTemplate(section: Section, action: Action): string {
  switch (section) {
    case Section.Entrypoint:
      if (action === Action.Create) return Templates.EntrypointCreate
      if (action === Action.Update) return Templates.EntrypointUpdate
      if (action === Action.Delete) return Templates.EntrypointDelete
      if (action === Action.Single) return Templates.EntrypointSingle
      if (action === Action.Select) return Templates.EntrypointSelect
      break
    case Section.UseCase:
      if (action === Action.Create) return Templates.UseCaseCreate
      if (action === Action.Update) return Templates.UseCaseUpdate
      if (action === Action.Delete) return Templates.UseCaseDelete
      if (action === Action.Single) return Templates.UseCaseSingle
      if (action === Action.Select) return Templates.UseCaseSelect
      break
    case Section.Contract:
      if (action === Action.Create) return Templates.ContractCreate
      if (action === Action.Update) return Templates.ContractUpdate
      if (action === Action.Delete) return Templates.ContractDelete
      if (action === Action.Single) return Templates.ContractSingle
      if (action === Action.Select) return Templates.ContractSelect
      break
    case Section.Repository:
      if (action === Action.Create) return Templates.RepositoryCreate
      if (action === Action.Update) return Templates.RepositoryUpdate
      if (action === Action.Delete) return Templates.RepositoryDelete
      if (action === Action.Single) return Templates.RepositorySingle
      if (action === Action.Select) return Templates.RepositorySelect
      break
  }

  return ''
}

export function getSeparator(): string {
  return '\n\n\n\n\n\n'
}
