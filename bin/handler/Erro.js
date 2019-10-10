"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = require("./statusCode");
class Erro extends statusCode_1.StatusCode {
    constructor(mensagem) {
        super(false, mensagem);
    }
}
exports.Erro = Erro;
