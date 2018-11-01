import * as MESSAGES from '../const/messages';
import * as ERR_MESSAGES from '../const/err-messages';
import * as fs from 'fs';
import * as path from 'path';
import { FsTypes, MessagesType } from '../enums';
import { IFileDescription, IFoolderDescription, IMessage } from '../interfaces';
import { Subject, Observable } from 'rxjs';

export class FileStructMaker {
    private messages$ = new Subject<IMessage>();

    get fileMakerMessages$(): Observable<IMessage> {
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