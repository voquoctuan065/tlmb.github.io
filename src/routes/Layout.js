import HomePage from '~/pages/HomePage/HomePage';
import ProductPage from '~/pages/ProductPage/ProductPage';
import Register from '~/pages/Register/Register';
import Login from '~/pages/Login/Login';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/ProductPage', component: ProductPage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
