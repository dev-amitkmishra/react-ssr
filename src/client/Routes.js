// will be shared b/w both server side and browser
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList,
        exact: true
    }
]