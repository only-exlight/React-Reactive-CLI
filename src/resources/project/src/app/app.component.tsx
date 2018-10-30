import * as React from 'react';
import { RouterOutlet, IRoutingConfig } from '../../lib/@routing';

export interface IAppComponent {
    routes: IRoutingConfig[]
}

export class AppComponent extends React.Component<IAppComponent> {
    
    public render() {
        const routes = this.props.routes;
        return (
            <div className="application">
                Привет React-Reactive!
                <RouterOutlet config={routes} />
            </div>
        );
    }
}
