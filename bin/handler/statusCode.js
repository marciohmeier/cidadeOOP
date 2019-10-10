"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusCode {
    constructor(isOK, message) {
        this.isOK = isOK;
        this.message = message || '';
    }
    getErrorMessage() {
        return this.message;
    }
    checkError() {
        return !this.checkOK();
    }
    checkOK() {
        return !!this.isOK;
    }
    logOnError() {
        if (this.checkOK())
            return;
        console.log(this.getErrorMessage());
    }
}
exports.StatusCode = StatusCode;
