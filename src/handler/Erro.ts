import { StatusCode } from "./statusCode";

export class Erro extends StatusCode {
  constructor(mensagem : string) {
    super(false, mensagem)
  }
}