"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Erro_1 = require("../handler/Erro");
const OK_1 = require("../handler/OK");
class Area {
    constructor(metragemArea, finalidade) {
        this.metragemArea = 0;
        this.setMetragemArea(metragemArea);
        this.finalidade = finalidade;
        this.listaDeImoveis = [];
    }
    setFinalidade(finalidade) {
        this.finalidade = finalidade;
    }
    getFinalidade() {
        return this.finalidade;
    }
    setMetragemArea(metragemArea) {
        if (metragemArea < 1) {
            throw new Error("Metragem do area deve ser pelo menos 1");
        }
        this.metragemArea = metragemArea;
    }
    getMetragemArea() {
        return this.metragemArea;
    }
    getListaDeImoveis() {
        return this.listaDeImoveis;
    }
    obterMetragemRestante() {
        return this.metragemArea - this.getListaDeImoveis().reduce((total, item) => {
            return item.getMetragem() + total;
        }, 0);
    }
    verificarAreaValida() {
        if (this.getMetragemArea() < 1) {
            return new Erro_1.Erro(`Metragem da área é inválida. Valor: ${this.getMetragemArea()}}`);
        }
        return new OK_1.OK();
    }
    validarAdicaoImovel(imovel) {
        let status = imovel.verificarImovelValido();
        if (status.checkError())
            return status;
        if (this.getFinalidade() !== imovel.getFinalidade()) {
            return new Erro_1.Erro(`Finalidade da área (${this.getFinalidade()}) não é a mesma do imóvel (${imovel.getFinalidade()})`);
        }
        if (this.obterMetragemRestante() < imovel.getMetragem()) {
            return new Erro_1.Erro(`Não há espaço suficiente para o imóvel na área! Espaço disponível na área: ${this.obterMetragemRestante()}, Espaço requerido pelo imóvel: ${imovel.getMetragem()}`);
        }
        return new OK_1.OK();
    }
    adicionarImovelArea(imovel) {
        let status = this.validarAdicaoImovel(imovel);
        if (status.checkError())
            return status;
        this.listaDeImoveis.push(imovel);
        return new OK_1.OK();
    }
}
exports.Area = Area;
