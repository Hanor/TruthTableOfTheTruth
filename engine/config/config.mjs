import yaml from 'js-yaml';
import fs from 'fs'

export class Config {
    constructor() {
        this.configFile ='../application.yml'
        this.properties = yaml.safeLoad( fs.readFileSync( this.configFile, 'utf8' ));
    }
}
