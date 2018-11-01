import * as MESSAGES from '../const/messages';
import * as ERR_MESSAGES from '../const/err-messages';
import * as KEYS from '../const/keys';
import chalk from 'chalk';
import { PROJECT_STRUCT } from '../const/project-struct';
import { Entity } from '../enums';
import { FoolderDescription } from './FileStruct.class';
import { FileStructMaker } from './FileStructMaker.class';
import { MessageHandler } from './MessageHandler.class';

const log = console.log;

export class CLI {
    private projectName: string;
    private fileStructMaker = new FileStructMaker();
    private msgHandler = new MessageHandler([this.fileStructMaker.fileMakerMessages$]);

    public main() {
        log(chalk.green(MESSAGES.HELLO));
        this.argParse();
    }

    private argParse() {
        switch (process.argv[2]) {
            case undefined: {
                log(chalk.red(ERR_MESSAGES.HAVE_NO_ARGUMENT));
                process.exit(0);
            }
            case KEYS.NEW_PROGECT: {
                this.generateNewProject();
                break;
            };
            case KEYS.NEW_PROGECT_SHORT: {
                this.generateNewProject();
                break;
            }
            case KEYS.GENERATE: {
                this.generateEntity();
                break;
            }
            case KEYS.GENERATE_SHORT: {
                this.generateEntity();
                break;
            }
            default: {
                log(ERR_MESSAGES.ARGUMENT_NO_CORRECT(process.argv[2]));
                process.exit(0);
            }
        }
    }

    private checkArgv(index: number) {
        if (process.argv[index]) {
            return process.argv[index];
        } else {
            log(chalk.red(ERR_MESSAGES.HAVE_NO_ARGUMENT));
            process.exit(0);
        }
    }

    private generateNewProject() {
        const arg = this.checkArgv(3);
        this.projectName = arg;
        log(chalk.green(MESSAGES.GENERATE_PROJECT(this.projectName)));
        const struct = PROJECT_STRUCT(this.projectName);
        this.fileStructMaker.createDir(struct, './');
    }

    private generateEntity() {
        const arg = this.checkArgv(3);
        switch (arg) {
            case undefined: {
                log(chalk.red(ERR_MESSAGES.HAVE_NO_ARGUMENT));
                process.exit(0);
            }
            case KEYS.COMPONENT: {
                this.createStruct();
                break;
            }
            case KEYS.COMPONENT_SHORT: {
                this.createStruct();
                break;
            }
            case KEYS.SERVICE: {
                this.createStruct();
                break;
            }
            case KEYS.SERVICE_SHORT: {
                this.createStruct();
                break;
            }
            default: {
                log(ERR_MESSAGES.ARGUMENT_NO_CORRECT(process.argv[3]));
                process.exit(0);
            }
        }
    }

    private createStruct() {
        const arg = this.checkArgv(4);
        const struct = new FoolderDescription(Entity.COMPONENT, arg);
        this.fileStructMaker.createDir(struct, struct.path);
    }
}
