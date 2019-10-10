import { Area } from "./area"
import { StatusCode } from "../handler/statusCode"
import { Imovel } from "./imovel"
import { OK } from "../handler/OK"
import { Erro } from "../handler/Erro"

export class Cidade {

  private nomeCidade : string
  private listaDeAreas : Array<Area>

  constructor(nomeCidade : string) {
    this.nomeCidade = nomeCidade
    this.listaDeAreas = []
  }

  public getNomeCidade() : string {
    return this.nomeCidade
  }

  public adicionarArea(area : Area) : StatusCode {

    let status : StatusCode = area.verificarAreaValida()
    if (status.checkError()) return status

    this.listaDeAreas.push(area)

    return new OK()
  }

  public adicionarImovel(imovel : Imovel) {

    for (let i = 0; i < this.listaDeAreas.length; i++) {
      let area: Area = this.listaDeAreas[i];
      
      let status : StatusCode = area.adicionarImovelArea(imovel)
      if (status.checkOK()) {
        console.log('')
        console.log(`Imóvel ${imovel.getClassName()} adicionado na área ${i+1}.`)
        console.log(`Metragem do imóvel: ${imovel.getMetragem()} metros quadrados.`)
        console.log(`Metragem restante da área: ${area.obterMetragemRestante()}`)
        return status
      }
    }

    return new Erro(`Não há áreas disponíveis para o imóvel ${imovel.getClassName()} na cidade ${this.getNomeCidade()}`)
  }

  public AdicionarVariasAreas(listaAreas : Array<Area>) : Array<StatusCode> {
    let listaStatus : Array<StatusCode> = []

    listaAreas.forEach((area : Area) => {
      listaStatus.push(this.adicionarArea(area))
    })

    return listaStatus
  }

  public AdicionarVariosImoveis(listaImoveis : Array<Imovel>) : Array<StatusCode> {
    let listaStatus : Array<StatusCode> = []

    listaImoveis.forEach((imovel : Imovel) => {
      listaStatus.push(this.adicionarImovel(imovel))
    })

    return listaStatus
  }
}