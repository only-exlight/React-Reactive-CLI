import * as camelCase from 'camelcase';

export const COMPONENT = (componentName: string) => {
    const cc = camelCase(componentName, { pascalCase: true });
    return `
import * as React from 'react';
import { InjectServices } from 'react-reactive/@core';

interface I${cc}ComponentState { };

interface I${cc}ComponentProps { };

@InjectServices({
    target: ${cc}Component,
    services: []
})

export class ${cc}Component extends React.Component<I${cc}ComponentProps> {
    public state: I${cc}ComponentState;
    constructor(props: any) {
        super(props);
        this.state = { };
    }

    public componentDidMount() { }

    public componentWillUnmount() { }

    public render() {
        return (
            <div>${cc} component</div>
        );
    }
}
`};
