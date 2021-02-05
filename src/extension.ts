import * as vscode from 'vscode'
import { generators } from './generators/list'

export function activate(context: vscode.ExtensionContext) {
  let fullCopydisposable = vscode.commands.registerCommand('franigen.generate.fullCopy', () => {
    generators.fullCopy()
  })

  context.subscriptions.push(fullCopydisposable)
}

export function deactivate() {}
