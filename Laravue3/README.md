# Laravel11 Vue3 app

## 初期設定

- env ファイル設定
  `cp .env.example .env`

- docker 立ち上げ（あとで devcontainer に移管）
  `docker compose up -d --build`

- 以下 app コンテナ内で実行
- app key 作成
  `php artisan key:generate`

- パッケージインストール
  `composer install`
  `npm install`

- アプリ起動
  `php artisan serve --port=8000`
  `npm run dev`
