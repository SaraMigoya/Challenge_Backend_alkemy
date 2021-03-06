const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require("./conexion")

const modelsUser = require("./models/user")
const modelsCharacter = require("./models/character")
const modelsMovie = require("./models/movie")
const modelsGender = require("./models/gender")

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Associations
modelsMovie.movie.hasMany(modelsGender.gender)
modelsCharacter.character.belongsTo(modelsMovie.movie)
modelsMovie.movie.hasMany(modelsCharacter.character)

const characterController = require("./controllers/characterController");
const genderController = require("./controllers/genderController");
const moviesController = require("./controllers/moviesController");
const usersController = require("./controllers/usersController");
const initialController = require("./controllers/initialController")

app.use("/start", initialController)
app.use("/movies", moviesController);
app.use("/characters", characterController);
app.use("/auth", usersController);
app.use("/genders", genderController);

db.init()
    .then(async () => {

        db.sequelize.sync({ force: false }).then(() => {
            console.log("Database Connected Succesfullâ€¦");
        }).catch(err => {
            console.log(err);
        });

        console.log('Conectado a la Base de Datos');
        app.set("port", process.env.PORT || 3000);
        app.listen(app.get("port"), () => {
            console.log("Server on port", app.get("port"))
        })

    }).catch((err) => {
        console.log('Error al conectar a la db', err);
    });

