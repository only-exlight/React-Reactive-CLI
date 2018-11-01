import * as fs from 'fs';
import * as path from 'path';
import { Observable, Subject } from 'rxjs';
import * as ERR_MESSAGES from '../const/err-messages';
import * as MESSAGES from '../const/messages';
import { PROJECT_STRUCT } from '../const/project-struct';
import { Entity, FsTypes, MessagesType } from '../enums';
import { IFileDescription, IFoolderDescription, IMessage } from '../interfaces';
import { FoolderDescription } from './FileStruct.class';

export class ProjectBuilder {
    private messages$ = new Subject<IMessage>();

    get fileMakerMessages$(): Observable<IMessage> {
        return this.messages$.asObservable();
    }

    public buildNewProject(name: string) {
        this.messages$.next({
            type: MessagesType.SUCCESS,
            msg: MESSAGES.GENERATE_PROJECT(name)
        });
        const struct = PROJECT_STRUCT(name);
        this.createDir(struct, './');
    }

    public buildNewEntity(name: string) {
        const struct = new FoolderDescription(Entity.COMPONENT, name);
        this.createDir(struct, struct.path);
    }

    private buildStruct(struct: IFoolderDescription, dirPath: string) {
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
            this.messages$.next({
                type: MessagesType.ERR,
                msg: ERR_MESSAGES.CREATE_FOOLDER_ERR(struct.name)
            });
        }
    }

    public generateFile(fileDscr: IFileDescription, currentPath: string) {
        const { ext, name, template } = fileDscr;
        const filePath = path.join(currentPath, `${name}.${ext}`);
        try {
            this.messages$.next({
                type: MessagesType.SUCCESS,
                msg: MESSAGES.CREATE_FILE(`${name}.${ext}`)
            });
            fs.writeFileSync(filePath, template);
        } catch (e) {
            this.messages$.next({
                type: MessagesType.ERR,
                msg: ERR_MESSAGES.CREATE_FILE_ERR(`${name}.${ext}`)
            });
        }
    }
}