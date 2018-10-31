export const APP = () => `
import { IReactAppConfig } from '../../lib/@react-app/ReactAppConfig.interface';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head';
import { ApplicationSerrvice } from './services/app.service';

export const REACT_APP: IReactAppConfig = {
    rootComponent: AppComponent,
    components: [
        HeadComponent,
    ],
    services: [
        ApplicationSerrvice
    ],
};
`;
