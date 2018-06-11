import {Config} from './config/config.mjs'
import {Server} from './server/server.mjs'
import {Api} from './core/api.mjs'
import {CompilerService} from './compiler/compiler.service.mjs'

class System {
    constructor() {}
    start() {
        this.config = new Config();
        this.properties = this.config.properties;
        this.server = new Server( this.properties );
        this.api = new Api( this.server );
    }
}
const system = new System();
system.start();