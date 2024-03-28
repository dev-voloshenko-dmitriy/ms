run:
	docker compose up -d --build
down:
	docker compose down
db-fresh:
	docker compose exec -i backend sh -c "php artisan migrate:fresh --seed"
exec:
	docker compose exec -it backend sh
