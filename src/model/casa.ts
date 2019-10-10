import { Imovel } from "./imovel";
import { Finalidade } from "./finalidade";

export class Casa extends Imovel {

  constructor(metragem : number) {
    super(metragem, Finalidade.Residencial)
  }
}