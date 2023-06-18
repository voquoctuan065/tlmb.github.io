
import HomePage from "~/pages/HomePage/HomePage";
import ProductPage from "~/pages/ProductPage/ProductPage";
import Mobile from "~/component/content/Mobile";

const publicRoutes = [
    {path: "/", component: HomePage},
    {path: "/ProductPage", component: ProductPage},
    {path: "/mobile", component: Mobile}
]

const privateRoutes = []

export { publicRoutes, privateRoutes}