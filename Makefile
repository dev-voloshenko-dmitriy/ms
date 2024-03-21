THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: build-dev

build-dev:
	docker compose up -d --build
	docker compose exec -i backend sh -c "php artisan migrate:fresh --seed"
exit:
	docker compose down
db-fresh:
	docker compose exec -i backend sh -c "php artisan migrate:fresh --seed"