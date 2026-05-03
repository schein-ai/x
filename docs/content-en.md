# 英語版コンテンツ差し替えリスト

> 英語版各ページに残っているダミーコンテンツ（架空の顧客名・架空のプロジェクト・プレースホルダー画像・盛った数値など）を、実情報に置き換えるためのインベントリ。

## 前提

各ページの**構造とコピー**は既に xR&D の新ポジショニング（AI ネイティブカンパニー）に再構成済み。残っているのは、**実データの差し込み**と、**実体に合わない盛った数値・項目の修正**。

ベースラインは [`company.md`](./company.md) と [`copy/home-jp.md`](./copy/home-jp.md) ／ [`copy/about-jp.md`](./copy/about-jp.md) ／ [`copy/solutions-jp.md`](./copy/solutions-jp.md)。

## 凡例

| マーク | 意味 |
|---|---|
| 🅓 **DUMMY** | 完全に架空。実データに差し替える |
| 🅟 **PLACEHOLDER** | 構造は OK、画像／写真／URL のプレースホルダ |
| 🅢 **STRETCH** | 数値や項目数が現実より盛られている。実体に合わせて削るか縮める |
| 🅡 **REFRAME** | セクションの趣旨と中身がずれている。再構成が必要 |
| ⚖ **LEGAL** | 法務ボイラープレート。社名・連絡先・準拠法を確定して差し替える |

---

## 横断的に必要な「実データ」

差し替え作業の前に、以下の素材を揃えるとほとんどのページが一気に解決する。**素材が揃うまでは伏せ字／プレースホルダのまま**で公開できる設計にする。

### A. 顧客実績まわり
- [ ] 公開可の代表案件（4 事業ごとに最低 1 件、業種・規模・期間・成果まで言える形）
- [ ] 顧客ロゴ掲載許諾が取れた企業
- [ ] 公開可のテスティモニアル

### B. 写真・映像
- [ ] Tomoki / Nghia の顔写真（または顔出ししない場合の代替ビジュアル方針）
- [ ] ダナンスタジオ／ハノイサブ拠点の写真
- [ ] ブランドフィルム本体（`assets/pv.mp4`／2 分 18 秒のプレースホルダ）
- [ ] ヒーロー・ケーススタディ用の画像（現状 `assets/img1.png`〜`img4.png` の 4 枚を使い回し）

### C. 拠点・連絡先
- [ ] ダナン本拠地の住所
- [ ] ハノイサブ拠点の住所
- [ ] 東京窓口（別法人）の表記方針
- [ ] お問い合わせ用メール（暫定: `studio@xrd.technologies`）
- [ ] 各 SNS の実アカウントの有無と URL

### D. 採用
- [ ] 通年募集している実ポジションのリスト（IT 系・建築 BIM 系・コンサル・PM・スタジオマネージャ）
- [ ] 各ポジションの待遇・勤務地・契約形態

### E. 編集コンテンツ（インサイト）
- [ ] 公開記事の原稿（フィーチャー 1 + 通常記事 数本）

### F. 法人情報
- [ ] 法人正式名称（英・越）
- [ ] 登記住所
- [ ] 準拠法・管轄（プライバシー／利用規約／クッキーで使用）

---

## ページ別インベントリ

### `index.html` — Home

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | "Imagination, implemented with AI." | OK | — |
| 1 | 4 Businesses（4 カード） | OK | カード本文は確定。アイコン／背景は維持 |
| 2 | Case studies（横 3 枚） | ✅🅟 | **`contents/projects-portfolio.md` の P-008 / P-105 / P-303 にマップ済み**（2026-05-03）。社名匿名化・業種＋規模付き。背景画像（img1〜img3）は引き続き仮 |
| 3 | Why xR&D（4 ケイパビリティ） | OK | アイコン群はそのまま |
| 4 | Stats: 4 / 23 / 2 / 100% / 2025 / Da Nang | OK | 数値は現状の体制と一致 |
| 5 | About preview | OK | — |
| 6 | **Working with（顧客ロゴ 6 枚）** | 🅓 | "Da Nang Smart City" / "GreenViet Sustainability Initiative" / "Coastal Developments" / "Future Vietnam Foundation" / "Vietnam Green Building" / "Augment Labs" は**全部架空**。許諾済の実顧客ロゴに差し替え。揃うまでセクション非表示 or 「ご一緒している企業（順次掲載）」プレースホルダ |
| 7 | Brand film | 🅟 | `assets/pv.mp4` がプレースホルダ。本編動画ができるまで「Coming 2026」表示 |
| 8 | Insights preview（フィーチャー 1 + 小 3） | 🅓 | フィーチャー記事 1 件は `insight-why-ai-native-vietnam.html` を指す。小カード 3 枚は記事タイトルのみのダミー |
| 9 | Contact CTA | OK | — |

### `about.html` — About

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Ch00 | Hero "An AI-native company, from Vietnam." | OK | — |
| Ch01 | 信念 "Before talking AI, we build with AI." | OK | — |
| Ch02 | Mosaic（8 タイル：① DX × 2 / ② Marketing/Product / ③ Strategy/Legal / ④ Engineering/HR） | 🅟 | タイルラベルは新ポジションに合致済み。**画像は `img1〜img4.png` を 8 タイルで使い回し**。実案件画像 or 抽象ビジュアルに差し替え |
| Ch03 | Origin story timeline（9 エントリ） | 🅟 | コピーは [`about-jp.md`](./copy/about-jp.md) に対応。ステージ画像は `img1〜img4` の使い回し。年表ビジュアルを順次差し替え |
| Ch04 | Numbers band: 4 / 23 / 2 / 100% | OK | — |
| Ch05 | Triptych（Tomoki / Nghia / Studio） | 🅟 | 写真未設定。顔出し方針の決定後に差し替え |
| Ch06 | Studio "Da Nang, where it's made." | 🅟 | 拠点写真未設定 |
| Ch07 | Three commitments（差別化 3 本柱） | OK | — |
| CTA | "Bring us a question..." | OK | — |

### `solutions.html` — Solutions

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | "Four businesses, implemented with AI." + Stats + Marquee | OK | — |
| 01 | AI-Driven App Development | OK | — |
| 02 | AI Visual Production | OK | — |
| 03 | AI Adoption Support | OK | — |
| 04 | AI-Native Talent | OK | — |
| 05 | Tools / 共通土台（6 カード） | OK | — |
| 06 | Compare（従来 SI vs xR&D） | OK | — |
| 07 | Process（4 ステップ） | OK | — |
| 08 | Tiers（3 契約モデル） | OK | — |
| 09 | FAQ（6 件） | OK | — |
| CTA | OK | — |

> Solutions ページは `solutions-jp.md` のモデル通りに既に整っている。**実画像差し替え以外は触らずに済む**。

### `solution-ai-design.html` — Solution detail (① AI 駆動開発)

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | "Software at the speed of AI." | OK | — |
| In brief / Capabilities / How it works / In practice | 構造 OK | 🅟 | ケーススタディ「In practice」セクションに使う実案件名・成果数値が要差し込み |
| Engagement models / FAQ / CTA | OK | — |

> 残り 3 事業の詳細ページ（visual / consulting / talent）は**未作成**。優先度に応じて作成判断。

### `projects.html` — Projects

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | 3 スライドカルーセル（① + ② Cross / Brand visuals / AI-native talent lab） | ✅ | `contents/projects-portfolio.md` の P-008 / P-105 / P-303 にマップ済み（2026-05-03） |
| 01 The index | フィルタバー + プロジェクトグリッド **P—001 〜 P—013（13 件）** | ✅ | **`contents/projects-portfolio.md` の実エントリに差し替え済み**（2026-05-03）。社名は非公開、業種・時期・規模は仮値で確定。フィルタチップも Delivered/Built/Running に更新、`SHOWING SAMPLES` → `13 ENGAGEMENTS · CLIENTS ANONYMISED` |
| 02 Map | "Built in Vietnam, delivered to Japan" | 🅢 | 地域別の数字（Japan 100% / VN 80% / Indonesia 32% ほか）は実データ出るまで仮値 |
| 03 By business | 4 事業フィルタビュー | OK | — |
| 04 What's next | 将来案件カード（50+ engagements / 40+ engineers / public case studies / internalisation） | OK | 2026 ／ 2027 の目標として framing 済み |
| CTA | OK | — |

### `project-001.html` — Project detail (Engagement No. 001)

> 元 `project-mekong-delta.html`（旧テンプレ「Mekong Delta Bio-Climatic Campus」）。2026-05-03 に **`project-001.html`** へリネーム。本文は "Engagement No. 001 — An AI agent that lives inside the systems your team already runs" の case study 構成（Manufacturing × DX、AI agent、4 moves、90-day outcomes）。

| 状況 | 対応 |
|---|---|
| 🅢 | コンテンツテーマは "Manufacturing × AI agent × knowledge" で `contents/projects-portfolio.md` の **P-003**（中堅製造 · AI チャットボット 社内ナレッジ · 1,200 staff · 4 weeks · Built 2025）と整合性が高い。一方で `projects.html` グリッドの **P—001** リンクから飛ぶ動線になっており、P—001 は P-008（① + ② Cross）に差し替え済みなので、**コンテンツとリンク先の意味が乖離**している。次のいずれか: (a) projects.html の P—001 リンクを P—003 セルに移す、(b) このページの内容を P-008（cross-business）にリライト、(c) 詳細ページを 2 本（P-008 用 + P-003 用）に増やす |

### `insights.html` — Insights

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | "Field notes from an AI-native studio" + "Vol. 01 · 2026 · Issue 04" | 🅢 | 「Issue 04」は**まだ 4 号目を出していない可能性**。実発行号に合わせる |
| Featured | 1 件（`insight-why-ai-native-vietnam.html` への導線） | 🅡 | 内容は創業ストーリー。フィーチャー記事として残すかは編集方針次第 |
| Grid | 記事カード複数 | 🅓 | カード内のタイトル・著者・日付は架空。実記事に差し替え |
| Dossier | "How we actually work, day to day" | 🅟 | 実コンテンツ未作成 |
| Reel | "Smaller signals" 短文ノート | 🅟 | 実コンテンツ未作成 |
| Topics | "Questions we keep returning to" | 🅟 | — |
| Newsletter | "One letter. Every Friday. Long form." | 🅢 | 「毎週金曜配信」を本当にやる体制があるかを確認。やらないなら頻度を下げるか、削除 |

### `insight-why-ai-native-vietnam.html` — Insight article（創業ストーリー）

> 元 `insight-bio-campus.html`。2026-05-03 に **`insight-why-ai-native-vietnam.html`** へリネーム（H1 "Why we started AI-native, from Vietnam, in 2025" にマッチ）。

| 状況 | 対応 |
|---|---|
| ✅ | 本文は xR&D 創業ストーリーに差し替え済み（8 章構成）。事実関係（"23 名"、"4 事業"、年代）は `company.md` と整合済 |

### `research.html` — R&D

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | "An R&D-led practice." | OK | — |
| R&D tracks（Four tracks, one notebook） | 🅟 | 4 トラックの中身が xR&D の実態（生成 AI 探究／4 事業連携など）と整合しているか要確認 |
| Featured write-up · April 2026 | 🅓 | 架空のフィーチャー研究ノート。実コンテンツに差し替え or 削除 |
| How we work | 🅟 | — |
| R&D in practice · 04 engagements | 🅓 | 4 件の架空エンゲージメント。実案件 or 削除 |
| Collaborate with the lab CTA | OK | — |

### `careers.html` — Careers

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero | "Come build with us." | OK | — |
| Founders' note | 構造 OK | — |
| 4 ポイント（Build with AI / Cross 4 businesses / JP × VN / Share method） | OK | — |
| **Open positions · 09**（9 ポジション） | 🅓🅢 | "AI Engineer Intern / Senior AI Engineer / Full-stack Engineer / BIM Operator / AI Visual Creator / Video Motion Creator / AI Adoption Consultant / Project Manager / Studio Manager" — 9 件は**通年募集の網羅リスト**として書かれており、実態と合うか要確認。本当に募集しているポジションだけに**絞る** |
| Day-in-life | 🅟 | "Studio life · Da Nang" の章。スタジオ写真／時間帯ごとの実描写を差し替え |
| Benefits | 🅟 | "What we offer, plainly" — 福利厚生の中身が実体と合うか要確認 |
| Apply CTA | OK | — |

### `contact.html` — Contact

| § | セクション | 状況 | 差し替え対象 |
|---|---|---|---|
| Hero "Start a conversation." | OK | — |
| Form | OK | フォーム送信先のメール／API を確認 |
| **Offices · Four locations** | 🅓🅢 | 4 拠点（Da Nang HQ / Hanoi / Tokyo Window / ASEAN Planned 2026）。**ASEAN は計画段階**として正しいか要確認。住所・座標は仮値（Da Nang 16.05°N など都市座標のみ）。実住所に差し替え |
| Studio hours · Live | OK | 4 タイムゾーン時計（Da Nang / Hanoi / Singapore / Tokyo）。Singapore は ASEAN 計画と連動。ASEAN 拠点をやらない場合は削除 |
| **Follow along（SNS 8 枠）** | 🅓 | Instagram **14.2k フォロワー** / LinkedIn **9.8k** / X **6.4k** / Newsletter **9.8k 読者** / GitHub **2.1k stars** / Are.na **412 blocks** / RSS **412 articles · since '18** / YouTube **38 videos** — **全部架空**。"since '18" は 2025 年創業と矛盾。実アカウントと実数値（または数値非表示）に差し替え |

### `privacy.html` / `terms.html` / `cookies.html`

| 状況 | 対応 |
|---|---|
| ⚖ | 法務ボイラープレート。確定が必要な項目: 法人正式名称（英・越）／登記住所／準拠法・管轄／管理者連絡先／クッキー実態（実際に使っているクッキー一覧）／データ保管期間／第三者提供の有無 |

---

## 優先度

差し替えのインパクトと依存関係から見た着手順:

1. **HIGH — 信頼性に直結する架空データ**
   - `index.html` 顧客ロゴ 6 枚（許諾が取れない間は非表示が安全）
   - `contact.html` SNS フォロワー数 8 枠（実数 or 数字を消す）
   - `careers.html` 9 ポジション（実態と合うものに絞る）
   - `projects.html` 13 件のサンプル案件（"SHOWING SAMPLES" 表記のままで OK だが、実案件 1〜2 件出たら絞る）

2. **MID — 構造はあるが内容が薄い／プレースホルダ**
   - `insights.html` グリッド・ドシエ・リール（実記事を 1〜2 本書く）
   - `research.html` Featured / 04 engagements（実 R&D ノート）
   - `solution-ai-design.html` In practice（実案件）

3. **LOW — 素材が揃ってからで良い**
   - 画像差し替え全般（`img1〜img4.png` 使い回し → 実画像）
   - チーム写真（`about.html` Ch05）
   - スタジオ写真（`about.html` Ch06、`careers.html` Day-in-life、`contact.html`）
   - ブランドフィルム本体（`assets/pv.mp4`）

4. **法務 — 公開前に必須**
   - `privacy.html` / `terms.html` / `cookies.html` の社名・住所・準拠法

---

## 関連リソース

- [`company.md`](./company.md) — 会社情報の唯一のソース
- [`copy/home-jp.md`](./copy/home-jp.md) / [`copy/about-jp.md`](./copy/about-jp.md) / [`copy/solutions-jp.md`](./copy/solutions-jp.md) — 確定済みコピー（日本語版がモデル）
- 他の `*-jp.html` / `index-vn.html` も英語版と同じ構造のため、英語版で確定したコンテンツを各言語に展開する流れ
