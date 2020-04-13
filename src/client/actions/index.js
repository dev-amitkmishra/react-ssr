import axios from "axios";

export const FETCH_USERS = 'fetch_users';
export const FETCH_HITS = 'fetch_hits';
export const UPDATE_HITS = 'update_hits';
export const LOAD_MORE_HITS = 'load_more_hits';
export const UPDATE_FEED_VOTE = 'update_feed_vote';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};
export const fetchHits = () => async dispatch => {
    const res = await axios.get('https://hn.algolia.com/api/v1/search?tags=front_page');
    dispatch({
        type: FETCH_HITS,
        payload: res
    });
};

export const updatehHits = (created_at_i) => async dispatch => {
    dispatch({
        type: UPDATE_HITS,
        created_at_i: created_at_i
    });
};

export const updatehFeedVote = (created_at_i) => async dispatch => {
    dispatch({
        type: UPDATE_FEED_VOTE,
        created_at_i: created_at_i
    });
};


export const loadMoreHits = () => async dispatch => {
    const res = await axios.get('https://hn.algolia.com/api/v1/search?tags=front_page');
    dispatch({
        type: LOAD_MORE_HITS,
        payload: res
    });
};