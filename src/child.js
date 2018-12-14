import React from 'react';
import withRouter from './withRouter';
import connect from './connect';

function Child(props) {
    return (
        <div>
            hola child {props.nombre}!
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
};

// export default withRouter(
//     connect(mapStateToProps)(Child)
// );


export default
connect1(mapStateToProps)(
    connect2(mapStateToProps)(
        connect3(mapStateToProps)(
            connect4(mapStateToProps)(
                connect5(mapStateToProps)(Child)
            )
        )
    )
);

export default flowRight([
    connect1(mapStateToProps, Child),
    connect2(mapStateToProps)(Child),
    connect3(mapStateToProps),
    connect4(mapStateToProps),
    connect5(mapStateToProps),
])(Child);
