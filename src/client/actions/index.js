import axios from "axios";

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

// export const fetchUsers = () => dispatch => {
//     try {
//         axios.get('https://hn.algolia.com/api/v1/search?query=sports').then(res => {
//             console.log('response of api', res.data.hits);
//             dispatch({
//                 type: FETCH_USERS,
//                 payload: res
//             });
//         })
//     } catch (error) {
//         console.log('eroreoroere', error);
//     }
//     // const res = await axios.get('https://hn.algolia.com/api/v1/search?query=sports');
//     // console.log('response of api', res.data.hits);
//     // dispatch({
//     //     type: FETCH_USERS,
//     //     payload: res.data
//     // });
// };