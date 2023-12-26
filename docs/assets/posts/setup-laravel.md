## How to Setup a Laravel Project You Cloned from Github

1. Install Composer Dependencies
```sh
    composer install
```

2. Create a copy of your .env file
```sh
    cp .env.example .env
```

3. Generate an app encryption key
```sh
    php artisan key:generate
```

4. Migrate the database
```sh
    php artisan migrate
```
