import Login from '~/pages/Login/Login';
import Mobile from '~/component/Mobile/Mobile';
import HomePage from '~/pages/HomePage/HomePage';
import Register from '~/pages/Register/Register';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/mobile', component: Mobile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
