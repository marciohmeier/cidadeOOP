"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = require("./statusCode");
class OK extends statusCode_1.StatusCode {
    constructor() {
        super(true);
    }
}
exports.OK = OK;
