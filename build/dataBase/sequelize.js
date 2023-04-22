"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeCon = void 0;
const Sequelize = require("sequelize");
const config = require("../config");
// Connects to the database.
exports.sequelizeCon = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: "postgres"
});
