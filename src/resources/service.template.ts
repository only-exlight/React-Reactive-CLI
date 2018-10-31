export const SERVICE = serviceName => `
import { Injector } from 'react-reactive/@core';

@Injector({
    target: ${serviceName}Serrvice,
    services: []
})

export class ${serviceName}Serrvice {

    constructor () { }

}
`;
