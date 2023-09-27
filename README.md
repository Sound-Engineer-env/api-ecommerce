# Soul Skate Shop Api

Short description of your project.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## About

Briefly describe what your project does, its main features, and why it's useful.

## Features

Highlight the key features of your project:

- Feature 1
- Feature 2
- Feature 3

## Getting Started

Esta aplicacion esta construida en node.js con el uso de Typescript como lenguaje base, ademas de esto se implementa express con Prisma como ORM para la implementacion de bases de datos con Postgres

### Prerequisites

Necesitas tener instalado la ultima version de node, npm y postgres, si desea puede instalar el software PgAdmin 4 para poder conectar la base de datos y administrarla de manera mas sencilla de forma local

### Installation

Si es la primera vez que configura la base de datos en postgress, es necesaria migrar los modelos a tu base de datos local de prueba, para ello debes configurar tu db en el sotfware pgAdmin4

Configura las variables de entorno correspodientes para conectar prisma con tu db en postgres 

[Tutorial variables de entorno](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)

Corre el siguiente comando para migrar los modelos a la base de datos local 

```bash
npx prisma migrate dev --name init
```

Para instalar todos los paquetes de dependencias 

```bash
npm install
npm run dev
```
Para correr de manera local la Api

```bash
npm install
npm run dev
```
