import { Imovel } from "./imovel";
import { Finalidade } from "./finalidade";

export class EdificioComercial extends Imovel {

  constructor(metragem : number) {
    super(metragem, Finalidade.Comercial)
  }
}