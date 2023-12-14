import { createRouter , createWebHistory } from "vue-router"
import Home from "./views/page/Home.vue"
import Categories from "./views/page/Categories.vue"
import SubCategories from "./views/page/SubCategories.vue"
import Login from "./views/page/Login.vue"
import Register from "./views/page/Register.vue"
import Adverts from "./views/page/Adverts.vue"
import Posts from "./views/page/Posts.vue"
import ErrorComponent from "./views/page/ErrorComponent.vue"

// ADMIN
// import AdminHome from "./admin/AdminHome.vue"


const router = createRouter({ 
	history : createWebHistory("/"),
	routes : [
		{
			path: "/",
			name: "Home",
			component: Home
		} ,
		{
			path: "/categories",
			name: "Categories",
			component: Categories
		} ,
		{
			path: "/subcategories",
			name: "Subcategories",
			component: SubCategories
		} ,
		{
			path: "/login",
			name: "Login",
			component: Login
		} ,
		{
			path: "/register",
			name: "Register",
			component: Register
		} ,
		{
			path: "/adverts",
			name: "Adverts",
			component: Adverts
		} ,
		{
			path: "/posts",
			name: "Posts",
			component: Posts
		} ,
		{
			path: "/:catchall(.*)*",
			name: "404",
			component: ErrorComponent
		}
	]
})

export default router