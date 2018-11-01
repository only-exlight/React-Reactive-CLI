import { FsTypes, MessagesType } from '../enums';

export interface IFileDescription {
    type: FsTypes;
    name: string;
    template?: any;
    ext?: 'ts' | 'js' | 'json' | 'html' | 'ico' | 'scss' | 'tsx';
};

export interface IFoolderDescription extends IFileDescription {
    type: FsTypes;
    name: string;
    content?: IFoolderDescription[];
};


export interface IMessage {
    type: MessagesType;
    msg: string;
}