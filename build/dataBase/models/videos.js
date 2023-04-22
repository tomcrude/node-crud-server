"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProject = exports.sequelizeCon = void 0;
const { DataTypes } = require("sequelize");
exports.sequelizeCon = require("../sequelize").sequelizeCon;
// "videos" table.
exports.userProject = exports.sequelizeCon.define("videos", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    des: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    user: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    likes: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: true
    },
}, {
    timestamps: false
});
