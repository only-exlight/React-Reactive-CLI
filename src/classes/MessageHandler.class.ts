
import chalk from 'chalk';
import { MessagesType } from '../enums';
import { IMessage } from '../interfaces';
import { Observable } from 'rxjs';

export class MessageHandler {
    private log = console.log;

    constructor(obsrvbles: Observable<IMessage>[]) {
        obsrvbles.forEach(obsrv => obsrv.subscribe(msg => this.logMsg(msg)));
    }

    public logMsg(msg: IMessage) {
        switch (msg.type) {
            case MessagesType.ERR: {
                this.log(chalk.red(msg.msg));
                process.exit(0);
                break;
            }
            case MessagesType.WARN: {
                this.log(chalk.yellow(msg.msg));
                break;
            }
            case MessagesType.SUCCESS: {
                this.log(chalk.green(msg.msg));
                break;
            }
            case MessagesType.OTHER: {
                this.log(chalk.gray(msg.msg));
                break;
            }
            case MessagesType.DEFAULT: {
                this.log(msg.msg);
                break;
            }
            default: {
                this.log(msg.msg);
            }
        }
    }
}