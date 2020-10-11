"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
var trek = {
    id: 4,
    title: 'FooBar Trek',
    days: [
        { start: ['Foo', 1200], end: ['Fred', 1500], distance_km: 8 },
        { start: ['Fred', 1500], end: ['Bar', 1600], distance_km: 5 },
    ],
    sleeping: 'hotels',
    price: 150,
    level: 'easy',
    rating: 4.7,
    starting_dates: [
        new Date('22/6/2021'),
        new Date('29/6/2021'),
        new Date('11/7/2021'),
        new Date('22/7/2021'),
        new Date('11/8/2021'),
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
router.get('/', function (_req, res) { return res.status(200).json(trek); });
