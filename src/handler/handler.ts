import { StatusCode } from "./statusCode";

export class Handler {

  public static logArrayOnError(listaStatusCode : Array<StatusCode>) : void {
    listaStatusCode.forEach((status: StatusCode) => {
      status.logOnError()
    })
  }
}