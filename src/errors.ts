import * as vscode from 'vscode'

export const errors = {
  show: show,
  showInvalidAction: showErrorInvalidAction,
  showInvalidClipboard: showErrorInvalidClipboard,
  showInvalidEntity: showErrorInvalidEntity
}

function show(error: string) {
  vscode.window.showErrorMessage(error)
}

function showErrorInvalidAction() {
  show('Invalid action T.T')
}

function showErrorInvalidClipboard() {
  show('Invalid clipboard D:')
}

function showErrorInvalidEntity() {
  show('Invalid entity :x')
}
