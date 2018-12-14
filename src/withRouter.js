import React from 'react';

export default function withRouter(Component) {
    const hoc = class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                valor: 1,
            };
        }

        render() {
            return (
                <Component
                    {...this.props}
                    history={{ isHistory: true }}
                    match={{ isMatch: true }}
                    location={{ isLocation: true }}
                    testing={this.state.valor}
                />
            );
        }
    }

    hoc.displayName = `withRouter(${Component.displayName || Component.name})`;

    return hoc;
}