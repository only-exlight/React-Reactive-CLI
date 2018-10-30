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
        log(process.argv);
        log(__dirname);
    }

    private argParse() {
        switch (process.argv[1]) {
            case KEYS.NEW_PROGECT: {
                this.generateNewProject();
            };
            case KEYS.NEW_PROGECT_SHORT: {
                this.generateNewProject();
            }
        }
    }

    private generateNewProject() {
        if (process.argv[2]) {
            const name = process.argv[2];
            this.buildStruct(PROJECT_STRUCT)
        }
    }

    private buildStruct(struct) {
        fs.mkdirSync(path.join(__dirname, struct.name));
        struct.content.forEach(childStruct => {
            switch (childStruct.type) {
                case FsTypes.FOOLDER: {
                    this.buildStruct(childStruct);
                };
                case FsTypes.FILE: {
                    this.generateFile(childStruct);
                }
            }
        });
    }

    private generateFile(fileDscr: FileDescription) {
        // fs.readFileSync()
        // fileDscr.
    }
}