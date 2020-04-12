import { FETCH_USERS } from '../actions';

const initialState = {
    type: 'init'
};

export default (state = initialState, action) => {
    console.log('user reducer', action)
    switch(action.type) {
        case FETCH_USERS:
            console.log('user fetch in type', action);
            return action.payload.data;
        default:
            return state;
    }
};
