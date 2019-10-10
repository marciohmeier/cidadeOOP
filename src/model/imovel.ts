import { Finalidade } from "./finalidade"
import { StatusCode } from "../handler/statusCode"
import { OK } from "../handler/OK"
import { Erro } from "../handler/Erro"

export abstract class Imovel {
  private metragem : number
  private finalidade : Finalidade

  constructor(metragem : number, finalidade : Finalidade) {
    
    // Aparentemente, é obrigatório inicializar no construtor, typescript não interpretou o setter
    this.metragem = 0

    this.setMetragem(metragem)
    this.finalidade = finalidade
  }

  public setMetragem(metragem : number) : void {
    
    if (metragem < 1) {
      throw new Error("Metragem do imóvel deve ser pelo menos 1")
    }
    
    this.metragem = metragem
  }

  public getMetragem() : number {
    return this.metragem
  }
  
  /* Removido pois a finalidade só pode ser atribuída quando instanciada, um imóvel não pode mudar de finalidade após a primiera definição
  public setFinalidade(finalidade : Finalidade) : void {
    this.finalidade = finalidade
  }
  */
  
  public getFinalidade() : Finalidade {
    return this.finalidade
  }
  
  public getClassName() : string {
    let dataClass = this.constructor.toString().match(/\w+/g)
    return dataClass![1];
  }

  public verificarImovelValido() : StatusCode {
    
    if (this.getMetragem() < 1) {
      return new Erro(`Metragem do imóvel é inválida. Valor: ${this.getMetragem()}}`)
    }

    return new OK()
  }
}