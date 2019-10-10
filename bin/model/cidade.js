"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OK_1 = require("../handler/OK");
const Erro_1 = require("../handler/Erro");
class Cidade {
    constructor(nomeCidade) {
        this.nomeCidade = nomeCidade;
        this.listaDeAreas = [];
    }
    getNomeCidade() {
        return this.nomeCidade;
    }
    adicionarArea(area) {
        let status = area.verificarAreaValida();
        if (status.checkError())
            return status;
        this.listaDeAreas.push(area);
        return new OK_1.OK();
    }
    adicionarImovel(imovel) {
        for (let i = 0; i < this.listaDeAreas.length; i++) {
            let area = this.listaDeAreas[i];
            let status = area.adicionarImovelArea(imovel);
            if (status.checkOK()) {
                console.log('');
                console.log(`Imóvel ${imovel.getClassName()} adicionado na área ${i + 1}.`);
                console.log(`Metragem do imóvel: ${imovel.getMetragem()} metros quadrados.`);
                console.log(`Metragem restante da área: ${area.obterMetragemRestante()}`);
                return status;
            }
        }
        return new Erro_1.Erro(`Não há áreas disponíveis para o imóvel ${imovel.getClassName()} na cidade ${this.getNomeCidade()}`);
    }
    AdicionarVariasAreas(listaAreas) {
        let listaStatus = [];
        listaAreas.forEach((area) => {
            listaStatus.push(this.adicionarArea(area));
        });
        return listaStatus;
    }
    AdicionarVariosImoveis(listaImoveis) {
        let listaStatus = [];
        listaImoveis.forEach((imovel) => {
            listaStatus.push(this.adicionarImovel(imovel));
        });
        return listaStatus;
    }
}
exports.Cidade = Cidade;
