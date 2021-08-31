const conexion = require("../conexion")
const sequelize = conexion.sequelize
const { Model, DataTypes } = require('sequelize');

sequelize.define()

class user extends Model { }
user.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,

}, {
    sequelize,
    modelName: "User"
});

module.exports = {user}