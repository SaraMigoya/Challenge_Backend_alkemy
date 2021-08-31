const conexion = require("../conexion")
const sequelize = conexion.sequelize
const { Model, DataTypes } = require('sequelize');


sequelize.define()

class character extends Model { }
character.init({
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
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    weight: DataTypes.STRING,
    story: DataTypes.STRING,


}, {
    sequelize,
    modelName: "Character"
});



module.exports = {character}