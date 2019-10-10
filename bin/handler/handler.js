"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    static logArrayOnError(listaStatusCode) {
        listaStatusCode.forEach((status) => {
            status.logOnError();
        });
    }
}
exports.Handler = Handler;
