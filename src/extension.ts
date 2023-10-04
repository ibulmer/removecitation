// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.removeCitation",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const text = document.getText();
        const updatedText = text.split("“")[1].split("”\n\nExcerpt From:")[0];
        editor.edit((edit) => {
          edit.replace(
            new vscode.Range(
              new vscode.Position(0, 0),
              document.positionAt(text.length)
            ),
            updatedText
          );
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}
