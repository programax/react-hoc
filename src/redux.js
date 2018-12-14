import { createStore } from 'redux';

const defaultState = {
    name: 'leo',
    ids: [1, 2, 3, 4, 5],
};

function reducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
