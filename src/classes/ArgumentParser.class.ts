import * as ERR_MESSAGES from '../const/err-messages';
import * as KEYS from '../const/keys';
import { Subject, Observable } from 'rxjs';
import { IMessage } from '../interfaces';
import { MessagesType } from '../enums';

export class ArgumentParser {
    private messages$ = new Subject<IMessage>();
    private generateProject = new Subject<null>();
    private generateFile = new Subject<null>();

    get parserMessages$(): Observable<IMessage> {
        return this.messages$.asObservable();
    }

    get generateProject$(): Observable<null> {
        return this.generateProject.asObservable();
    }

    get generateFile$(): Observable<null> {
        return this.generateFile.asObservable();
    }

    public checkArgv(index: number) {
        if (process.argv[index]) {
            return process.argv[index];
        } else {
            this.messages$.next({
                type: MessagesType.ERR,
                msg: ERR_MESSAGES.HAVE_NO_ARGUMENT
            });
        }
    }

    public argParse() {
        switch (process.argv[2]) {
            case undefined: {
                this.messages$.next({
                    type: MessagesType.ERR,
                    msg: ERR_MESSAGES.HAVE_NO_ARGUMENT
                });
            }
            case KEYS.NEW_PROGECT: {
                this.generateProject.next();
                break;
            };
            case KEYS.NEW_PROGECT_SHORT: {
                this.generateProject.next();
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
                this.messages$.next({
                    type: MessagesType.ERR,
                    msg: ERR_MESSAGES.ARGUMENT_NO_CORRECT(process.argv[2])
                });
            }
        }
    }

    private generateEntity() {
        const arg = this.checkArgv(3);
        switch (arg) {
            case undefined: {
                this.messages$.next({
                    type: MessagesType.ERR,
                    msg: ERR_MESSAGES.HAVE_NO_ARGUMENT
                });
            }
            case KEYS.COMPONENT: {
                this.generateFile.next();
                break;
            }
            case KEYS.COMPONENT_SHORT: {
                this.generateFile.next();
                break;
            }
            case KEYS.SERVICE: {
                this.generateFile.next();
                break;
            }
            case KEYS.SERVICE_SHORT: {
                this.generateFile.next();
                break;
            }
            default: {
                this.messages$.next({
                    type: MessagesType.ERR,
                    msg: ERR_MESSAGES.ARGUMENT_NO_CORRECT(process.argv[3])
                });
            }
        }
    }
}
