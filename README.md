# Liyd BPO Homepage

Vercel公開用の静的ホームページです。

## ローカル確認

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## Vercel公開

1. このフォルダをGitHubリポジトリにpushします。
2. VercelでGitHubリポジトリをImportします。
3. Framework Presetは `Other` のままで公開できます。
4. Build CommandとOutput Directoryは空欄で問題ありません。

## ファイル構成

- `index.html`: ページ本体
- `privacy.html`: プライバシーポリシーページ
- `style.css`: デザイン
- `script.js`: メニュー、スクロール演出、フォームのローカル挙動
- `vercel.json`: Vercel用の静的公開設定

※ 写真は外部画像URLを参照しています。公開後もインターネット接続環境で表示されます。
