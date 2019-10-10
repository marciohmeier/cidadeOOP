import { Cidade } from "./model/cidade";
import { Area } from "./model/area";
import { Finalidade } from "./model/finalidade";
import { StatusCode } from "./handler/statusCode";
import { Casa } from "./model/casa";
import { EdificioResidencial } from "./model/edificioResidencial";
import { Handler } from "./handler/handler";
import { EdificioComercial } from "./model/edificioComercial";
import { EdificioIndustrial } from "./model/edificioIndustrial";

let status : StatusCode
let listaStatus : Array<StatusCode>

let cidade = new Cidade("Jaraguá do Sul")

listaStatus = cidade.AdicionarVariasAreas([
  new Area(5000,Finalidade.Comercial),
  new Area(10000,Finalidade.Industrial),
  new Area(8000,Finalidade.Residencial)
])

Handler.logArrayOnError(listaStatus)

listaStatus = cidade.AdicionarVariosImoveis([
  new Casa(500),
  new EdificioResidencial(3000),
  new Casa(350),
  new Casa(220),
  new EdificioResidencial(2600),
  new EdificioResidencial(4000),
  new EdificioComercial(550),
  new EdificioComercial(700),
  new EdificioComercial(2000),
  new EdificioComercial(5000),
  new EdificioIndustrial(2000),
  new EdificioIndustrial(880),
  new EdificioIndustrial(1450)
])

Handler.logArrayOnError(listaStatus)