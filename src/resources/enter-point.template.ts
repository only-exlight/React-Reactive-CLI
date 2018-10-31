export const ENTER_POINT = () => `
import { ReactApp } from 'react-reactive';
import { REACT_APP } from './app/app.config';
import { ROUTING } from './app/routing.config';

new ReactApp('root', ROUTING, REACT_APP).initApp();
`;
