"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.pool = require("../dataBase/conection.js");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const config = require("../config");
// Delete the file.
function unLink(data, file) {
    fs.unlinkSync(path.join(__dirname, data + file));
}
// Create the file.
function writeFile(data, id, imgData, type) {
    fs.writeFileSync(path.join(__dirname, data + id + type), imgData);
}
// Read the file.
function readDir(data) {
    fs.readdirSync(path.join(__dirname, data));
}
function readFile(data, file) {
    return fs.readFileSync(path.join(__dirname, data + file));
}
// Verify if the data entered by the user is correct.
function detectNamePass(value) {
    if (value == null || value == undefined || value.length < 4 || value.length > 13) {
        return true;
    }
}
function detectTitleDes(title, des) {
    if (title == null || title == undefined || title.length > 21 || title.length < 5 || des.length > 256 || des.length < 5 || des == null || des == undefined) {
        return true;
    }
}
// Create second(JWT) token and verify token.
function createToken2(id) {
    const token2 = jwt.sign({ id: id }, config.key);
    return token2;
}
function token2Veri(token2) {
    try {
        const _qr = jwt.verify(token2, config.key);
        return true;
    }
    catch (error) {
        console.log("denegate");
        return false;
    }
}
module.exports = {
    detectNamePass,
    detectTitleDes,
    unLink,
    readDir,
    readFile,
    writeFile,
    token2Veri,
    createToken2
};
