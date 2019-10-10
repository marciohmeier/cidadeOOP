import { StatusCode } from "./statusCode";

export class OK extends StatusCode {
  constructor() {
    super(true)
  }
}