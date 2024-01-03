<h2 style="text-align: center; color:  #8ab4f8; margin-bottom:3%;">How to Setup a Laravel Project You Cloned from Github</h2>

1. Install **Composer** Dependencies

    `composer install`

2. Create a copy of your **.env** file
 
    `cp .env.example .env`

3. Generate an app encryption **key**

    `php artisan key:generate`

4.  In the **.env** file, add database information to allow Laravel to connect to the database
    >> In the **.env** file fill in the **DB_CONNECTION**, **DB_HOST**, **DB_PORT**, **DB_DATABASE**, **DB_USERNAME**, and **DB_PASSWORD** options

5. Migrate the **database**

    `php artisan migrate`


| #         | Command     | Usage |
|:--------------:|:-----------|------------|
| 1 | `composer install`      | Install **Composer** Dependencies        |
| 2      | `cp .env.example .env`  | Create a copy of your **.env** file       |
| 3      | `php artisan key:generate`  | Generate an app encryption **key**       |
| 4      |    |  In the **.env** file, add database information to allow Laravel to connect to the database       |
| 5      | `php artisan migrate`  | Migrate the **database**       | {#identifier .table}

<style>
    .table{
        border-collapse: collapse;
        width: 100%;
    }

    @media only screen and (min-width: 600px) {

        table{
            margin-inline-start: 3vw;
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