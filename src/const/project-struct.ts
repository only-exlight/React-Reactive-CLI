import { FoolderDescription } from '../interfaces';
import { FsTypes } from '../enums';

export const PROJECT_STRUCT: FoolderDescription = {
    name: '',
    type: FsTypes.FOOLDER,
    content: [{
        name: 'src',
        type: FsTypes.FOOLDER,
        content: [{
            name: 'app',
            type: FsTypes.FOOLDER,
            content: [{
                name: 'components',
                type: FsTypes.FOOLDER,
                content: [{
                    name: 'test',
                    type: FsTypes.FOOLDER,
                    content: [{
                        name: 'test.component',
                        ext: 'tsx',
                        template: null,
                        type: FsTypes.FILE
                    }, {
                        name: 'test.component',
                        ext: 'scss',
                        template: null,
                        type: FsTypes.FILE
                    }]
                }]
            }, {
                name: 'services',
                type: FsTypes.FOOLDER,
                content: [{
                    name: 'test.service',
                    ext: 'ts',
                    template: null,
                    type: FsTypes.FILE
                }]
            }, {
                name: 'app.component',
                ext: 'scss',
                template: null,
                type: FsTypes.FILE
            }, {
                name: 'app.component',
                ext: 'tsx',
                template: null,
                type: FsTypes.FILE
            }, {
                name: 'app.config',
                ext: 'ts',
                template: null,
                type: FsTypes.FILE
            }, {
                name: 'routing.config',
                ext: 'ts',
                content: null,
                type: FsTypes.FILE
            }]
        }, {
            name: 'env',
            type: FsTypes.FOOLDER,
            content: [{
                name: 'env.const',
                ext: 'ts',
                template: null,
                type: FsTypes.FILE
            }]
        }, {
            name: 'styles',
            type: FsTypes.FOOLDER,
            content: [{
                name: 'styles',
                ext: 'scss',
                template: null,
                type: FsTypes.FILE
            }]
        }, {
            name: 'favicon',
            ext: 'ico',
            template: null,
            type: FsTypes.FILE
        }, {
            name: 'index',
            ext: 'html',
            template: null,
            type: FsTypes.FILE
        }, {
            name: 'index',
            ext: 'ts',
            template: null,
            type: FsTypes.FILE
        }]
    }, {
        name: 'webpack',
        type: FsTypes.FOOLDER,
        content: [{
            name: 'webpack.const',
            ext: 'js',
            template: null,
            type: FsTypes.FILE
        }, {
            name: 'webpack.modes',
            ext: 'js',
            template: null,
            type: FsTypes.FILE
        }, {
            name: 'webpack.plugins',
            ext: 'js',
            template: null,
            type: FsTypes.FILE
        }]
    }, {
        name: 'package',
        type: FsTypes.FILE,
        ext: 'json',
        template: null,
    }, {
        name: 'tsconfig',
        type: FsTypes.FILE,
        ext: 'json',
        template: null,
    }, {
        name: 'tslint',
        type: FsTypes.FILE,
        ext: 'json',
        template: null,
    }, {
        name: 'webpack',
        type: FsTypes.FILE,
        ext: 'js',
        template: '',
    }]
}