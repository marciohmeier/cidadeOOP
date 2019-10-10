"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OK_1 = require("../handler/OK");
const Erro_1 = require("../handler/Erro");
class Imovel {
    constructor(metragem, finalidade) {
        // Aparentemente, é obrigatório inicializar no construtor, typescript não interpretou o setter
        this.metragem = 0;
        this.setMetragem(metragem);
        this.finalidade = finalidade;
    }
    setMetragem(metragem) {
        if (metragem < 1) {
            throw new Error("Metragem do imóvel deve ser pelo menos 1");
        }
        this.metragem = metragem;
    }
    getMetragem() {
        return this.metragem;
    }
    /* Removido pois a finalidade só pode ser atribuída quando instanciada, um imóvel não pode mudar de finalidade após a primiera definição
    public setFinalidade(finalidade : Finalidade) : void {
      this.finalidade = finalidade
    }
    */
    getFinalidade() {
        return this.finalidade;
    }
    getClassName() {
        let dataClass = this.constructor.toString().match(/\w+/g);
        return dataClass[1];
    }
    verificarImovelValido() {
        if (this.getMetragem() < 1) {
            return new Erro_1.Erro(`Metragem do imóvel é inválida. Valor: ${this.getMetragem()}}`);
        }
        return new OK_1.OK();
    }
}
exports.Imovel = Imovel;
