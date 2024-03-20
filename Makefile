THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: build-dev

build-dev:
	docker compose up -d --build
	sleep 1
	docker compose exec -i backend sh -c "php artisan migrate:fresh --seed"
exit:
	docker compose down