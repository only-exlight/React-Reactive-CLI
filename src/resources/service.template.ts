import * as camelCase from 'camelcase';

export const SERVICE = (serviceName: string) => {
    const cc = camelCase(serviceName, { pascalCase: true });
    return `
import { Injector } from 'react-reactive/@core';

@Injector({
    target: ${cc}Serrvice,
    services: []
})

export class ${cc}Serrvice {

    constructor () { }

}
`};
