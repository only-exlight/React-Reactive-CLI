import { FsTypes } from '../enums';

export interface FileDescription {
    type: FsTypes;
    name: string;
    template?: any;
    ext?: 'ts' | 'js' | 'json' | 'html' | 'ico' | 'scss' | 'tsx';
};

export interface FoolderDescription extends FileDescription {
    type: FsTypes;
    name: string;
    content?: FoolderDescription[];
};
