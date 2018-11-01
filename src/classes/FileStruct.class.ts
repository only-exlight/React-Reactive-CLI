import { IFoolderDescription } from '../interfaces/index';
import { FsTypes, Entity } from '../enums';
import { SERVICE, COMPONENT, EMPTY } from '../resources';
import { TypescriptParser } from 'typescript-parser';
import * as EXT from '../const/ext';
import * as fs from 'fs';
import * as PATHS from '../const/path.const';

export class FoolderDescription implements IFoolderDescription {
    public name: string;
    public content: IFoolderDescription[] = [];
    public type: FsTypes = FsTypes.FOOLDER;
    public path: string;

    constructor(type: Entity, name: string) {
        this.name = name;
        switch (type) {
            case Entity.COMPONENT: {
                this.content.push({
                    name: this.name,
                    type: FsTypes.FILE,
                    ext: EXT.TSX,
                    template: COMPONENT(this.name),
                });
                this.content.push({
                    name: this.name,
                    type: FsTypes.FILE,
                    ext: EXT.SCSS,
                    template: EMPTY
                });
                this.path = PATHS.COMPONENTS_PATH;
                break;
            }
            case Entity.SERVICE: {
                this.content.push({
                    name: this.name,
                    type: FsTypes.FILE,
                    ext: EXT.TS,
                    template: SERVICE(this.name),
                });
                this.path = PATHS.SERVICES_PATH;
                break;
            }
        }
        this.updateConfig();
    }

    private updateConfig() {
        if (fs.existsSync('./result/MyProject/src/app/app.config.ts')) {
            const configFile = fs.readFileSync('./result/MyProject/src/app/app.config.ts', 'UTF-8');
            const parser = new TypescriptParser();
            parser.parseSource(configFile).then(source => console.log(source));
        }
    }

}