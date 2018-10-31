import { FileDescription } from '../interfaces/index';
import { FsTypes, Entity } from '../enums';
import { SERVICE, COMPONENT } from '../resources';
import { TypescriptParser } from 'typescript-parser';
import * as EXT from '../const/ext';
import * as fs from 'fs';

export class FileStruct implements FileDescription {
    public ext;
    public type: FsTypes = FsTypes.FILE;
    public template: string;
    public name: string;
    public filePath: string;
    private path: string;

    constructor(type: Entity, name: string) {
        this.name = name;
        switch (type) {
            case Entity.COMPONENT: {
                this.ext = EXT.TSX;
                this.template = COMPONENT(name);
                this.path = `./MyProject/src/app/components`;
                this.createFoolder();
                break;
            }
            case Entity.SERVICE: {
                this.ext = EXT.TS;
                this.template = SERVICE(name);
                this.path =  `./MyProject/src/app/services`;
                this.createFoolder();
                break;
            }
        }
    }

    private createFoolder() {
        if (fs.existsSync(this.path)) {
            try {
                this.filePath = `${this.path}/${this.name}`;
                fs.mkdirSync(this.filePath);
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                fs.mkdirSync(this.path);
                this.filePath = `${this.path}/${this.name}`;
                fs.mkdirSync(this.filePath);
            } catch (e) {
                console.log(e);
            }
        }
    }

    private updateConfig() {
        if (fs.existsSync('./src/app/app.config.ts')) {
            const configFile = fs.readFileSync('./src/app/app.config.ts', 'UTF-8');
            const parser = new TypescriptParser();
            parser.parseSource(configFile).then(source => console.log(source));
        }
    }

}