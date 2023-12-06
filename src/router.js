import { createRouter , createWebHistory } from "vue-router"
import HomePage from "./views/page-view/HomePage.vue" 
import ProductDetailsPage from "./views/page-view/ProductDetailsPage.vue" 
import AboutUs from "./views/page-view/AboutUs.vue"
import TermsAndConditions from "./views/page-view/TermsAndConditions.vue"
import BillingPolicy from "./views/page-view/BillingPolicy.vue"
import CookiePolicy from "./views/page-view/CookiePolicy.vue" 
import CopyrightInfringementPolicy from "./views/page-view/CopyrightInfringementPolicy.vue"
import SafetyTips from "./views/page-view/SafetyTips.vue"
import ContactUs from "./views/page-view/ContactUs.vue"
import ProfilePage from "./views/page-view/ProfilePage.vue"
import MyAdvertsPage from "./views/page-view/MyAdvertsPage.vue"
import PerformancePage from "./views/page-view/PerformancePage.vue"
import PostAdvertPage from "./views/page-view/PostAdvertPage.vue"
import UserAndBusinessPage from "./views/page-view/UserAndBusinessPage.vue"
import BookmarksPage from "./views/page-view/Bookmarks.vue"
import Test from "./views/page-view/Test.vue"
import Error from "./views/generic-view/ErrorView.vue"
 
const router = createRouter({
	history:  createWebHistory("/"),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomePage
		} ,
		{
			path: "/product/:productID", 
			name: "Product details page",
			component: ProductDetailsPage
		} ,
		{
			path: "/about-us",
			name: "About us",
			component: AboutUs
		} ,
		{
			path: "/terms-and-conditions",
			name: "Terms and conditions",
			component: TermsAndConditions
		},
		{
			path: "/billing-policy",
			name: "Billing policy",
			component: BillingPolicy
		},
		{
			path: "/cookie-policy",
			name: "Cookie policy",
			component: CookiePolicy
		},		
		{
			path: "/copyright-infringement-policy",
			name: "Copyright infringement policy",
			component: CopyrightInfringementPolicy
		},	
		{
			path: "/safety-tips",
			name: "Safety tips ",
			component: SafetyTips
		},		
		{
			path: "/contact-us",
			name: "Contact us ",
			component: ContactUs
		},	
		{
			path: "/profile",
			name: "Profile Page ",
			component: ProfilePage
		},	
		{
			path: "/my-adverts",
			name: "My adverts Page ",
			component: MyAdvertsPage
		},
		{
			path: "/performance",
			name: "Performance Page ",
			component: PerformancePage
		},
		{
			path: "/post-ad",
			name: "Post advert Page ",
			component: PostAdvertPage
		},	
		{
			path: "/business/:ownerId",
			name: "Business Page ",
			component: UserAndBusinessPage
		},
		{
			path: "/bookmarks",
			name: "Bookmarks Page ",
			component: BookmarksPage
		},
		{
			path: "/test",
			name: "Test Page ",
			component: Test
		},
		{
			path: "/:catchall(.*)*",
			name: "Not found",
			component: Error
		}
	]
})

 export default router