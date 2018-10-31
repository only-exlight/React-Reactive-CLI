export const ROUTING = () => `
import { IRoutingConfig } from 'react-reactive';
import { HeadComponent } from './components/head/head';

export const ROUTING: IRoutingConfig[] = [{
    component: HeadComponent,
    path: '/home',
}];
`;
