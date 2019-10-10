"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cidade_1 = require("./model/cidade");
const area_1 = require("./model/area");
const finalidade_1 = require("./model/finalidade");
const casa_1 = require("./model/casa");
const edificioResidencial_1 = require("./model/edificioResidencial");
const handler_1 = require("./handler/handler");
const edificioComercial_1 = require("./model/edificioComercial");
const edificioIndustrial_1 = require("./model/edificioIndustrial");
let status;
let listaStatus;
let cidade = new cidade_1.Cidade("Jaraguá do Sul");
listaStatus = cidade.AdicionarVariasAreas([
    new area_1.Area(5000, finalidade_1.Finalidade.Comercial),
    new area_1.Area(10000, finalidade_1.Finalidade.Industrial),
    new area_1.Area(8000, finalidade_1.Finalidade.Residencial)
]);
handler_1.Handler.logArrayOnError(listaStatus);
listaStatus = cidade.AdicionarVariosImoveis([
    new casa_1.Casa(500),
    new edificioResidencial_1.EdificioResidencial(3000),
    new casa_1.Casa(350),
    new casa_1.Casa(220),
    new edificioResidencial_1.EdificioResidencial(2600),
    new edificioResidencial_1.EdificioResidencial(4000),
    new edificioComercial_1.EdificioComercial(550),
    new edificioComercial_1.EdificioComercial(700),
    new edificioComercial_1.EdificioComercial(2000),
    new edificioComercial_1.EdificioComercial(5000),
    new edificioIndustrial_1.EdificioIndustrial(2000),
    new edificioIndustrial_1.EdificioIndustrial(880),
    new edificioIndustrial_1.EdificioIndustrial(1450)
]);
handler_1.Handler.logArrayOnError(listaStatus);
