import { CompilerRest } from "../compiler/compiler.rest.mjs";

export class Api {
    constructor( server ) {
        this.server = server;
        this.init();
    }
    init() {
        this.compilerRest = new CompilerRest( this.server );
    }
}