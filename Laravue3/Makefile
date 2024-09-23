
# 初期セットアップ
setup: env up build common

env:
	cp ./une-app/.env.example ./une-app/.env
	sed -i '' 's/^DB_PASSWORD=.*/DB_PASSWORD=secret/' ./une-app/.env

up:
	docker compose up -d

build:
	docker compose exec une-app composer install
	docker compose exec une-app npm install
	docker compose exec une-app php artisan key:generate

common:
	docker compose exec -it une-app bash -c "cd ../common-frontend && npm install && npm run build"
	docker compose exec -it une-app bash -c "cd ../common-backend && composer install"



# DBセットアップ
.PHONY: migrate db-seed

migrate:
	docker compose exec une-app migrate:fresh

db-seed:
	docker compose exec une-app db:seed --class="Packages\CommonBackend\Database\Seeders\DatabaseSeeder"

bash:
	docker compose exec une-app bash
