# eplog

TRPGで生まれた思い出を、本のように残すサービス。

## Concept

「一卓、一ページ。」

eplogは、TRPGセッションの記録を残すためのサービスです。

シナリオを評価する場所でも、
プレイヤーを競わせる場所でもありません。

大切なのは、その卓で過ごした時間。

* 誰と遊んだか
* どんな会話があったか
* どんな選択をしたか
* どんなキャラクターだったか
* どんな感情になったか

数年後にページを開いた時、

「あの日、楽しかったな」

と思える記録を作ります。

---

## World View

eplogは「本棚」です。

| 現実     | eplog |
| ------ | ----- |
| ユーザー   | 本     |
| プロフィール | 表紙    |
| セッション  | ページ   |
| 年間活動   | 章     |
| TRPG人生 | 一冊の物語 |

あなたのTRPGの時間を、少しずつ一冊の本にしていきます。

---

## Features

### 卓ページ

**1卓 = 1ページ**

記録できる内容：

* シナリオ名
* プレイ日
* システム
* KP
* PL
* キャラクター
* プレイ時間
* 感想
* 思い出メモ
* 印象的な出来事

---

## Development Philosophy

eplogは、小さく始めて長く残るサービスを目指します。

優先すること：

* シンプル
* 維持しやすい
* 個人開発可能
* 本当に必要な機能だけ作る

迷った時の判断基準：

> 10年後、そのページを開いた時に嬉しいか。

---

# Development

## Tech Stack

* Next.js
* TypeScript
* React

---

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser.

You can start editing the page by modifying `app/page.tsx`.

---

## Project Structure

```
eplog/
├── app/
├── components/
├── public/
└── README.md
```

---

## Roadmap

### Phase 1

基本的なセッション記録

* ユーザー
* プロフィール
* 卓ページ

### Phase 2

思い出を深く残す機能

* 卓アルバム
* キャラクター図鑑
* KP履歴
* 一緒に遊んだ人一覧
* TRPG年表

### Phase 3

AIによる記録支援

* セッションログからページ生成
* 思い出文章生成
* キャラクター紹介生成
* TRPG人生まとめ

---

## License

MIT
