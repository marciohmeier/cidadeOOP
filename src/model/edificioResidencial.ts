import { Imovel } from "./imovel";
import { Finalidade } from "./finalidade";

export class EdificioResidencial extends Imovel {

  constructor(metragem : number) {
    super(metragem, Finalidade.Residencial)
  }
}