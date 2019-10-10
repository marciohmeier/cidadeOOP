import { Imovel } from "./imovel";
import { Finalidade } from "./finalidade";

export class EdificioIndustrial extends Imovel {

  constructor(metragem : number) {
    super(metragem, Finalidade.Industrial)
  }
}