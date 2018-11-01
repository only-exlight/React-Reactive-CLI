import * as MESSAGES from '../const/messages';
import { PROJECT_STRUCT } from '../const/project-struct';
import { Entity, MessagesType } from '../enums';
import { FoolderDescription } from './FileStruct.class';
import { FileStructMaker } from './FileStructMaker.class';
import { MessageHandler } from './MessageHandler.class';
import { ArgumentParser } from './ArgumentParser.class';

export class CLI {
    private projectName: string;
    private fileStructMaker = new FileStructMaker();
    private msgHandler = new MessageHandler([this.fileStructMaker.fileMakerMessages$]);
    private argParser = new ArgumentParser();

    public main() {
        this.msgHandler.logMsg({
            type: MessagesType.SUCCESS,
            msg: MESSAGES.HELLO
        });
        this.argParser.generateProject$.subscribe(() => this.generateNewProject());
        this.argParser.generateFile$.subscribe(() => this.createStruct());
        this.argParser.argParse();
    }

    private generateNewProject() {
        this.projectName = this.argParser.checkArgv(3);
        this.msgHandler.logMsg({
            type: MessagesType.SUCCESS,
            msg: MESSAGES.GENERATE_PROJECT(this.projectName)
        });
        const struct = PROJECT_STRUCT(this.projectName);
        this.fileStructMaker.createDir(struct, './');
    }

    private createStruct() {
        const arg = this.argParser.checkArgv(4);
        const struct = new FoolderDescription(Entity.COMPONENT, arg);
        this.fileStructMaker.createDir(struct, struct.path);
    }
}
