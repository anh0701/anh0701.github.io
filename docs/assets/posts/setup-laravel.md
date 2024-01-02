<h2 style="text-align: center; color: #e685b5; margin-bottom:3%;">How to Setup a Laravel Project You Cloned from Github</h2>

1. Install **Composer** Dependencies
```sh
    composer install
```

2. Create a copy of your **.env** file
```sh
    cp .env.example .env
```

3. Generate an app encryption **key**
```sh
    php artisan key:generate
```

4. Migrate the **database**
```sh
    php artisan migrate
```

| #         | Command     | Usage |
|:--------------:|:-----------|------------|
| 1 | composer install      | Install **Composer** Dependencies        |
| 2      | cp .env.example .env  | Create a copy of your **.env** file       |
| 3      | php artisan key:generate  | Generate an app encryption **key**       |
| 4      | php artisan migrate  | Migrate the **database**       | {#identifier .table}

<style>
    .table{
        border-collapse: collapse;
        width: 100%;
    }

    @media all and (min-width: 600px) {

        table{
            margin-inline-start: 10vw;
            margin-block: 8vh;
        }

    }

    th{
        text-align:center;
    }

    th, td {
        padding-right: 8vw;
        border: 1px solid var(--dark-text-color);
        padding-left: 8px;
    }
</style>    