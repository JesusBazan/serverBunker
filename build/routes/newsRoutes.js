"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class NewsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('News'));
    }
}
const newsRoutes = new NewsRoutes();
exports.default = newsRoutes.router;
