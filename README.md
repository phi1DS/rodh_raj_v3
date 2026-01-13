# Story driven webgame using react

## Quick local install :

```sh
composer i
cp .env.example .env
php artisan key:generate
npm install
npm run dev
php artisan serve
```

## Docker setup :

```sh
docker-compose up -d
```

Inside laravel_app container :

```sh
composer i
cp .env.example .env
php artisan key:generate
npm install
npm run dev
```

Available on localhost:8000
