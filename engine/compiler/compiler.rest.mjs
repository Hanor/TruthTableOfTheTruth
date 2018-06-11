import { CompilerService } from "./compiler.service.mjs";

export class CompilerRest {
    constructor( server ) {
        this.server = server;
        this.compilerService = new CompilerService();
        this.methods();
    }
    methods() {
        this.server.app.post('/api/mcCluskey', (req, res) => {
            const expression = req.body.expression;
            return res.send( this.compilerService.mcCluskey( expression ) );
        })
    }
}