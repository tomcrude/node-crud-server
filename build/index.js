"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let express = require("express");
const routes = require("./Routes/routes");
const { midd } = require("./middleware/app.js");
const { sequelizeCon } = require("./dataBase/sequelize.js");
require("./dataBase/models/users.js");
require("./dataBase/models/videos.js");
const app = express();
const port = process.env.PORT || 4000;
app.use(midd);
app.use("/", routes);
main();
// Start the server and create the database.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelizeCon.sync();
            app.listen(port, () => {
                console.log(`server open in port ${port}`);
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
