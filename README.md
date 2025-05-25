# FlexibleSnip - スニペット拡張 / Flexible and Customizable Snippet Extension

FlexibleSnipは、任意の言語やファイル拡張子ごとにカスタマイズ可能なスニペットを提供するVisual Studio Code拡張機能です。  
FlexibleSnip is a Visual Studio Code extension that provides customizable snippets for any language or file extension.

`snippet.json`に記述するだけで、あなたの好きなスニペットをすぐに補完候補として利用できます。  
Just edit `snippet.json` and your favorite snippets will be instantly available as completion candidates.

---

## 主な特徴 / Features

- **任意の拡張子・言語ごとにスニペットを定義可能**  
  Define snippets for any extension or language.
- **`snippet.json`を編集するだけで即座に反映**  
  Instantly reflects changes by editing `snippet.json`.
- **Markdownやコードブロック、SQL、HTMLなど多彩なテンプレートを収録**  
  Includes various templates such as Markdown, code blocks, SQL, HTML, and more.
- **VS Codeの補完候補（IntelliSense）として利用可能**  
  Usable as VS Code completion (IntelliSense) candidates.

---

## 使い方 / Usage

1. コマンドパレットで「FlexibleSnip: Reload Snippets」などの操作は不要です。  
   No need to run "FlexibleSnip: Reload Snippets" from the command palette.
2. `snippet.json`を編集・保存するだけで自動的に反映されます。  
   Just edit and save `snippet.json` to apply changes automatically.
3. 任意のファイルで補完（Ctrl+Space）を実行すると、該当拡張子のスニペットが候補に表示されます。  
   Press completion (Ctrl+Space) in any file to see snippets for that extension.
4. スニペットは`snippet.json`で自由に追加・編集できます。  
   Add or edit snippets freely in `snippet.json`.

---

## snippet.jsonの例 / Example of snippet.json

```json
{
  "md": {
    "b": "**$1**",
    "codeBlock": "```c\n$1\n```"
  },
  "py": {
    "print": "print($1)"
  }
}
```

- `"md"`はMarkdownファイル用、`"py"`はPythonファイル用のスニペットです。  
  `"md"` is for Markdown files, `"py"` is for Python files.
- `$1`, `$2`などはタブジャンプ可能なプレースホルダーです。  
  `$1`, `$2`, etc. are tab-jumpable placeholders.

---

## よくある質問 / FAQ

### Q. どの拡張子に対応していますか？  
Q. Which extensions are supported?

A. `snippet.json`で定義した任意の拡張子・言語に対応します。  
A. Any extension or language defined in `snippet.json` is supported.  
例: `"md"`, `"py"`, `"js"`, `"c"`, `"cpp"` など。  
e.g., `"md"`, `"py"`, `"js"`, `"c"`, `"cpp"`, etc.

---

### Q. スニペットの即時反映はどうやって行われますか？  
Q. How are snippet changes instantly reflected?

A. `snippet.json`を保存すると自動で再読み込みされます。  
A. Saving `snippet.json` automatically reloads the snippets.

---

### Q. 既存のVS Codeスニペットと何が違いますか？  
Q. How is this different from built-in VS Code snippets?

A. FlexibleSnipは**1ファイルで全言語を管理**でき、拡張子ベースで柔軟に切り替えられます。  
A. FlexibleSnip lets you manage all languages in a single file and switch flexibly by extension.

---

## インストール方法 / Installation

1. [マーケットプレイス](https://marketplace.visualstudio.com/)から「FlexibleSnip」で検索しインストール  
   Search for "FlexibleSnip" on [Marketplace](https://marketplace.visualstudio.com/) and install.
2. もしくは`.vsix`ファイルをダウンロードし、VS Codeで「拡張機能: VSIXからインストール」を選択  
   Or download the `.vsix` file and select "Install from VSIX" in VS Code.

---

## コントリビュート / Contribution

バグ報告・機能要望よろしくお願いします。  
Bug reports and feature requests are welcome!

---

## ライセンス / License

MIT

---
