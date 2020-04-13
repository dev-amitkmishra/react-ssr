import Home from './components/Home';
import HitsList, { loadData } from './components/HitsList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/hits',
        component: HitsList,
        exact: true
    }
]