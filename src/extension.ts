import * as vscode from 'vscode';
import { Buffer } from 'node:buffer';

let snippets: Record<string, Record<string, string>> = {};

async function loadSnippets(context: vscode.ExtensionContext) {
	const snippetsUri = vscode.Uri.joinPath(context.extensionUri, 'snippet.json');
	try{
		const raw = await vscode.workspace.fs.readFile(snippetsUri);
		snippets = JSON.parse(Buffer.from(raw).toString('utf8'));
	} catch (e) {
		snippets = {};
	}
}

function getFileExt(document: vscode.TextDocument): string {
	const match = document.fileName.match(/\.([^.\\\/]+)$/);
	return match ? match[1] : 'txt';
}

export async function activate(context: vscode.ExtensionContext) {
	await loadSnippets(context);

	const provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file' },
		{
			provideCompletionItems(document, position) {
				console.log('snippets:', snippets);
				const ext = getFileExt(document);
				const extSnippets = snippets[ext] || snippets['txt'] || {};
				return Object.entries(extSnippets).map(([key, value]) => {
					const item = new vscode.CompletionItem(key, vscode.CompletionItemKind.Snippet);
					item.insertText = new vscode.SnippetString(value);
					item.detail = `Snippet for ${key}`;
					return item;
				});
			}
		}
	);

	context.subscriptions.push(provider);

	// Reload snippets when the snippet.json file is changed
	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(async doc => {
			if(doc.document.fileName.endsWith('snippet.json')) {
				await loadSnippets(context);
			}
		})
	);
}

export function deactivate() {}
