import React from 'react';
import store from './redux';

function connect(mapStateToProps) {
    return function(Component) {
        const hoc = class extends React.Component {
            componentDidMount() {
                store.subscribe(() => {
                    const state = store.getState();
                    const stateProps = mapStateToProps(state);

                    this.setState(stateProps);
                });

                const state = store.getState();
                const stateProps = mapStateToProps(state);

                this.setState(stateProps);
            }

            render() {
                return (
                    <Component
                        {...this.state}
                        {...this.props}
                    />
                );
            }
        };

        hoc.displayName = `connect(${Component.displayName || Component.name})`;

        return hoc;
    };
}

export default connect;
