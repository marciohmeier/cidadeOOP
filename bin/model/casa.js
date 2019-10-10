"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imovel_1 = require("./imovel");
const finalidade_1 = require("./finalidade");
class Casa extends imovel_1.Imovel {
    constructor(metragem) {
        super(metragem, finalidade_1.Finalidade.Residencial);
    }
}
exports.Casa = Casa;
