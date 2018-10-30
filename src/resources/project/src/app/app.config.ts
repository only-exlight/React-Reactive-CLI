import { IReactAppConfig } from '../../lib/@react-app/ReactAppConfig.interface';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head';
import { ApplicationSerrvice } from './services/app.service';
import { DelayService } from './services/delay.service';
import { CountService } from './services/count.service';

export const REACT_APP: IReactAppConfig = {
    rootComponent: AppComponent,
    components: [
        HeadComponent,
    ],
    services: [
        ApplicationSerrvice,
        DelayService,
        CountService
    ],
};
