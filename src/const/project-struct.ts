import { IFoolderDescription } from '../interfaces';
import { FsTypes } from '../enums';
import * as TEMPLATES from '../resources';

export const PROJECT_STRUCT = (name: string): IFoolderDescription => {
    return {
        name: name,
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
                        name: 'test-component',
                        type: FsTypes.FOOLDER,
                        content: [{
                            name: 'test.component',
                            ext: 'tsx',
                            template: TEMPLATES.COMPONENT('test'),
                            type: FsTypes.FILE
                        }, {
                            name: 'test.component',
                            ext: 'scss',
                            template: TEMPLATES.EMPTY(),
                            type: FsTypes.FILE
                        }]
                    }]
                }, {
                    name: 'services',
                    type: FsTypes.FOOLDER,
                    content: [{
                        name: 'test.service',
                        ext: 'ts',
                        template: TEMPLATES.SERVICE('test'),
                        type: FsTypes.FILE
                    }]
                }, {
                    name: 'app.component',
                    ext: 'scss',
                    template: TEMPLATES.EMPTY(),
                    type: FsTypes.FILE
                }, {
                    name: 'app.component',
                    ext: 'tsx',
                    template: TEMPLATES.APP_COMPONENT(),
                    type: FsTypes.FILE
                }, {
                    name: 'app.config',
                    ext: 'ts',
                    template: TEMPLATES.APP(),
                    type: FsTypes.FILE
                }, {
                    name: 'routing.config',
                    ext: 'ts',
                    template: TEMPLATES.ROUTING(),
                    type: FsTypes.FILE
                }]
            }, {
                name: 'env',
                type: FsTypes.FOOLDER,
                content: [{
                    name: 'env.const',
                    ext: 'ts',
                    template: TEMPLATES.EMPTY(),
                    type: FsTypes.FILE
                }]
            }, {
                name: 'styles',
                type: FsTypes.FOOLDER,
                content: [{
                    name: 'styles',
                    ext: 'scss',
                    template: TEMPLATES.EMPTY(),
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
                template: TEMPLATES.HTML(name),
                type: FsTypes.FILE
            }, {
                name: 'index',
                ext: 'ts',
                template: TEMPLATES.ENTER_POINT(),
                type: FsTypes.FILE
            }]
        }, {
            name: 'webpack',
            type: FsTypes.FOOLDER,
            content: [{
                name: 'webpack.const',
                ext: 'js',
                template: TEMPLATES.WEBPACK_CONST(),
                type: FsTypes.FILE
            }, {
                name: 'webpack.modes',
                ext: 'js',
                template: TEMPLATES.WEBPACK_MODES(),
                type: FsTypes.FILE
            }, {
                name: 'webpack.plugins',
                ext: 'js',
                template: TEMPLATES.WEBPACK_PLUGINS(),
                type: FsTypes.FILE
            }]
        }, {
            name: 'package',
            type: FsTypes.FILE,
            ext: 'json',
            template: TEMPLATES.PACKAGE(name),
        }, {
            name: 'tsconfig',
            type: FsTypes.FILE,
            ext: 'json',
            template: TEMPLATES.TSCONFIG(),
        }, {
            name: 'tslint',
            type: FsTypes.FILE,
            ext: 'json',
            template: TEMPLATES.TSLINT(),
        }, {
            name: 'webpack.config',
            type: FsTypes.FILE,
            ext: 'js',
            template: TEMPLATES.WEBPACK_CONFIG(),
        }]
    }
};
