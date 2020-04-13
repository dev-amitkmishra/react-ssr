import { FETCH_USERS, FETCH_HITS } from '../actions';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload.data;
        case FETCH_HITS:
            return action.payload.data.hits;
        default:
            return state;
    }
};
