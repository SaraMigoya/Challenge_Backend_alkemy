const conexion = require("../conexion")
const sequelize = conexion.sequelize
const { Model, DataTypes } = require('sequelize');

sequelize.define()

class movie_serie extends Model { }
movie_serie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    image: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    title: DataTypes.STRING,
    creation_date: DataTypes.STRING,
    score: DataTypes.INTEGER,
    //acá iria personaje asociado

}, {
    sequelize,
    modelName: "Movie_Serie"
});



module.exports = {movie_serie}