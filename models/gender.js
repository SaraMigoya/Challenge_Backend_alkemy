const conexion = require("../conexion")
const sequelize = conexion.sequelize
const { Model, DataTypes } = require('sequelize');

sequelize.define()

class gender extends Model { }
gender.init({
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

}, {
    sequelize,
    modelName: "Gender"
});



module.exports = {gender}