import * as fs from 'fs';
import * as path from 'path';
import * as MESSAGES from '../const/messages';
import * as KEYS from '../const/keys';
import chalk from 'chalk';
import { PROJECT_STRUCT } from '../const/project-struct';
import { FsTypes } from '../enums';
import { FileDescription } from '../interfaces';

const log = console.log;

export class CLI {
    public main() {
        this.argParse();
        log(chalk.green(MESSAGES.HELLO));
    }

    private argParse() {
        switch (process.argv[2]) {
            case KEYS.NEW_PROGECT: {
                this.generateNewProject();
            };
            case KEYS.NEW_PROGECT_SHORT: {
                this.generateNewProject();
            }
        }
    }

    private generateNewProject() {
        if (process.argv[3]) {
            const name = process.argv[3];
            const struct = PROJECT_STRUCT(name);
            this.buildStruct(struct, './result'); //
        }
    }

    private buildStruct(struct, dirPath) {
        const newPath = `${dirPath}/${struct.name}`;
        fs.mkdirSync(newPath);
        struct.content.forEach(childStruct => {
            switch (childStruct.type) {
                case FsTypes.FOOLDER: {
                    this.buildStruct(childStruct, newPath);
                    break;
                };
                case FsTypes.FILE: {
                    this.generateFile(childStruct, newPath);
                    break;
                }
            }
        });
    }

    private generateFile(fileDscr: FileDescription, currentPath: string) {
        const { ext, name, template } = fileDscr;
        const filePath = path.join(currentPath, `${name}.${ext}`);
        fs.writeFileSync(filePath, template);
    }
}