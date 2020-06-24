# inatel-ec021-tr1

A backend made in NodeJS using Restify and Sequelize with a MySQL database. **This is a class job.**

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/cesarramos95/inatel-ec021-tr1)

This repository is ready-to-code with Gitpod, which will provide a running instance of MySQL in a Ubuntu container and a Visual Studio Code IDE like (based on Eclipse Theia) environment.

## How to start the project

```sh
npm start
```

## How to test the endpoints

Open the `api.http` file and you can click on the `Send Request` for each of the requests written. This is done using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Tips

### Import MySQL dump

```sh
mysql < resources/EC021_2020_1_NP1.sql
```

> NOTE: this done by default on opening the Gitpod environment

### Open MySQL shell

```sh
mysql
```

### Show MySQL databases

```sh
mysql -e "show databases;"
```

### Show tables from the MySQL database

```sh
mysql -e "use ec021_2020_1; show tables;"
```

### Show contents of the table from the MySQL database

```sh
mysql -e "use ec021_2020_1; select * from carro;"
```
