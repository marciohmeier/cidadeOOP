import { Finalidade } from "./finalidade"
import { Imovel } from "./imovel"
import { StatusCode } from "../handler/statusCode"
import { Erro } from "../handler/Erro"
import { OK } from "../handler/OK"

export class Area {
  private metragemArea : number
  private finalidade : Finalidade
  private listaDeImoveis : Array<Imovel>

  constructor(metragemArea : number, finalidade : Finalidade) {
    this.metragemArea = 0

    this.setMetragemArea(metragemArea)
    this.finalidade = finalidade
    this.listaDeImoveis = []
  }

  public setFinalidade(finalidade : Finalidade) : void {
    this.finalidade = finalidade
  }
  
  public getFinalidade() : Finalidade {
    return this.finalidade
  }

  public setMetragemArea(metragemArea : number) : void {
    
    if (metragemArea < 1) {
      throw new Error("Metragem do area deve ser pelo menos 1")
    }

    this.metragemArea = metragemArea
  }
  
  public getMetragemArea() : number {
    return this.metragemArea
  }

  public getListaDeImoveis() : Array<Imovel> {
    return this.listaDeImoveis
  }

  public obterMetragemRestante() : number {
    return this.metragemArea - this.getListaDeImoveis().reduce((total:number,item : Imovel) => {
      return item.getMetragem() + total
    }, 0)
  }

  public verificarAreaValida() : StatusCode {

    if (this.getMetragemArea() < 1) {
      return new Erro(`Metragem da área é inválida. Valor: ${this.getMetragemArea()}}`)
    }

    return new OK()
  }

  public validarAdicaoImovel(imovel : Imovel) : StatusCode {

    let status : StatusCode = imovel.verificarImovelValido()
    if (status.checkError()) return status

    if (this.getFinalidade() !== imovel.getFinalidade()) {
      return new Erro(`Finalidade da área (${this.getFinalidade()}) não é a mesma do imóvel (${imovel.getFinalidade()})`)
    }

    if (this.obterMetragemRestante() < imovel.getMetragem()) {
      return new Erro(`Não há espaço suficiente para o imóvel na área! Espaço disponível na área: ${this.obterMetragemRestante()}, Espaço requerido pelo imóvel: ${imovel.getMetragem()}`)
    }

    return new OK()
  }

  public adicionarImovelArea(imovel: Imovel) :StatusCode {

    let status : StatusCode = this.validarAdicaoImovel(imovel)
    if (status.checkError()) return status

    this.listaDeImoveis.push(imovel)
    
    return new OK()
  }
}