export abstract class StatusCode {
  
  private message : string
  private isOK : boolean

  constructor(isOK : boolean, message?:string) {
    this.isOK = isOK
    this.message = message || ''
  }

  public getErrorMessage() :string {
    return this.message
  }

  public checkError() : boolean {
    return !this.checkOK()
  }
  
  public checkOK() : boolean {
    return !!this.isOK
  }

  public logOnError() : void {
    if (this.checkOK()) return
    console.log(this.getErrorMessage())
  }
}