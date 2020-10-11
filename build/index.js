"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var trekRoutes_1 = require("./routes/trekRoutes");
var constants_1 = require("./config/constants");
var app = express_1.default();
app.use('/treks', trekRoutes_1.router);
app.listen(constants_1.PORT, function () {
    console.log("listening on port " + constants_1.PORT);
});
