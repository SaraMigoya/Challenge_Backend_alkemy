
# Backend API para explorar el mundo de Disney,
Challenge backend Node Js para Alkemy.

## Recursos y tecnologías utilizadas

- Node.js
- Nodemon
- Express
- JWT para autenticación via Token
- MySQL
- Sequelize
- Postman para manejo de endpoints y testing
- Swagger para documentación de API

El objetivo es desarrollar una API para explorar el mundo de Disney, la cual permitirá conocer y modificar los
personajes que lo componen y entender en qué películas estos participaron. 

## Documentación de la API

Abrir el archivo `api-doc.yml` y copiar su contenido en [Swagger](https://editor.swagger.io/) o importar el mismo desde las opciones

Se listarán los endpoints y métodos disponibles y la información necesaria para hacer uso de los mismos

## Instalación e inicializacion del proyecto


### 1 - Instalación de dependencias

```
npm install
```

### 2 - Creando base de datos

- Abrir XAMPP y asegurarse que el puerto sobre el cual se está ejecutando es el `3306`
- Inicializar los servicios de Apache y MySQL
- Abrir el panel de control del servicio MySQL
- Generar una nueva base de datos llamada `challenge_Backend_Alkemy` desde el panel de control

### 3 - Iniciando el servidor

node app.js

### 4 - Generar contenido de "relleno" de base de datos:

Desde la terminal poner el siguiente comando :
Desde Postman u otro cliente API, realizar peticiones POST para llenar base de datos. Es importante que se realicen en este orden ya que están relacionados por foreignKeys:

localhost:3000/start/users
localhost:3000/start/movies
localhost:3000/start/characters
localhost:3000/start/genders

### 5 - Listo para usar!

Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas


Challenge the Node Js backend for Alkemy.

## Resources and technologies used:

- Node.js
- Nodemon
- Express
- JWT for Token Authentication
- MySQL
- Sequelize
- Postman for endpoint handling & testing
- Swagger for API documentation

The goal is to develop an API to explore the world of Disney, which will allow knowing and modifying the
characters that compose it and understand in which films they participated.

## API Documentation

Open the `api-doc.yml` file and copy it's content in [Swagger](https://editor.swagger.io/) or import it from the options panel.

A list of the available endpoints and methods will be listed with the necessary information to use the API

## Instalation and Project Initialization


### 1 - Install the required dependencies

```
npm install
```

### 2 - Creating the database

- Open XAMPP and make sure the port being used is number `3306`
- Start the Apache and MySQL services
- Open the Admin panel for the MySQL Service
- Create a new database called `challenge_Backend_Alkemy` from the panel

### 3 - Starting the server

From the terminal put the following command:

node app.js

 ### 4 Generate "filling" content for data base:

From Postman or other API client, make the following POST petitions. It is important to respect this order, since models are linked via foreignKeys:

localhost:3000/start/users
localhost:3000/start/movies
localhost:3000/start/characters
localhost:3000/start/genders

### 5 - It's ready to use!

You can now test the provided endpoints from the Postman collection to make use of the API and database connection

