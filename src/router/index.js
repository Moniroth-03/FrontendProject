import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import CategoryPage from "../views/CategoryPage.vue"
import ProductPage from "../views/ProductPage.vue"

const routes = [
    {path:"/", component:HomeView},
    {path:"/categories/:categoryId",component:CategoryPage},
    {path:"/products/:productId",component: ProductPage}
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;