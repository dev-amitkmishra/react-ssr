import { UPDATE_HITS, FETCH_HITS, LOAD_MORE_HITS, UPDATE_FEED_VOTE } from '../actions';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_HITS:
            return action.payload.data.hits;
        case UPDATE_HITS:
            return state.filter(result => result.created_at_i !== action.created_at_i);
        case LOAD_MORE_HITS:
            return shuffleArray(action.payload.data.hits);
        case UPDATE_FEED_VOTE:
            return state.map(item => {
                if (item.created_at_i === action.created_at_i) {
                    item.num_comments =  item.num_comments + 1;
                }
                return item;
            })
        default:
            return state;
    }
};
