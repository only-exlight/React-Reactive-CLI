export const COMPONENT = componentName => `
import * as React from 'react';
import { InjectServices } from 'react-reactive/@core';

interface I${componentName}ComponentState { };

interface I${componentName}ComponentProps { };

@InjectServices({
    target: ${componentName}Component,
    services: []
})

export class ${componentName}Component extends React.Component<IHeadComponentProps> {
    public state: IHeadComponentState;
    constructor(props: any) {
        super(props);
        this.state = { };
    }

    public componentDidMount() { }

    public componentWillUnmount() { }

    public render() {
        return (
            <div>${componentName} component</div>
        );
    }
}
`;
