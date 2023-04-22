"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProject = exports.sequelizeCon = void 0;
const { DataTypes } = require("sequelize");
exports.sequelizeCon = require("../sequelize").sequelizeCon;
// "users" table.
exports.userProject = exports.sequelizeCon.define("users", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    followers: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: true,
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    videos: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: true,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false
});
