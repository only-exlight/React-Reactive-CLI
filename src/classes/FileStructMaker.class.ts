import * as MESSAGES from '../const/messages';
import * as ERR_MESSAGES from '../const/err-messages';
import * as fs from 'fs';
import * as path from 'path';
import { FsTypes } from '../enums';
import chalk from 'chalk';
import { IFileDescription, IFoolderDescription } from '../interfaces';
import { Subject, Observable } from 'rxjs';

const log = console.log;

export class FileStructMaker {
    private messages$ = new Subject<string>();

    get fileMakerMessages$(): Observable<string> {
        return this.messages$.asObservable();
    }

    public buildStruct(struct: IFoolderDescription, dirPath: string) {
        struct.content.forEach(childStruct => {
            switch (childStruct.type) {
                case FsTypes.FOOLDER: {
                    this.createDir(childStruct, dirPath);
                    break;
                };
                case FsTypes.FILE: {
                    this.generateFile(childStruct, dirPath);
                    break;
                }
            }
        });
    }

    public createDir(struct: IFoolderDescription, dirPath) {
        const newPath = `${dirPath}/${struct.name}`;
        try {
            fs.mkdirSync(newPath);
            if (struct.content) {
                this.buildStruct(struct, newPath);
            }
        } catch (e) {
            log(chalk.red(ERR_MESSAGES.PROJECT_EXIST(this.projectName)));
            process.exit(0);
        }
    }

    public generateFile(fileDscr: IFileDescription, currentPath: string) {
        const { ext, name, template } = fileDscr;
        const filePath = path.join(currentPath, `${name}.${ext}`);
        try {
            chalk.greenBright
            log(chalk.green(MESSAGES.CREATE_FILE(`${name}.${ext}`)));
            fs.writeFileSync(filePath, template);
        } catch (e) {
            log(chalk.red(ERR_MESSAGES.CREATE_FILE_ERR(`${name}.${ext}`)));
        }
    }
}