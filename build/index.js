"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var trekRoutes_1 = require("./routes/trekRoutes");
var constants_1 = require("./config/constants");
dotenv_1.default.config();
var app = express_1.default();
var DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose_1.default
    .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(function () { return console.log('DB connection successful'); });
app.use('/treks', trekRoutes_1.router);
app.listen(constants_1.PORT, function () {
    console.log("listening on port " + constants_1.PORT);
});
