export const SERVICE = (serviceName: string) => `
import { Injector } from 'react-reactive/@core';

@Injector({
    target: ${serviceName}Serrvice,
    services: []
})

export class ${serviceName}Serrvice {

    constructor () { }

}
`;
