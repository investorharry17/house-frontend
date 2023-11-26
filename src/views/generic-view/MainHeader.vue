<script setup>
	import { Store } from "@/stores/userStore.js"
	import { Modal_States } from "@/stores/modalStatesStore.js"
	import { ref } from "vue"
	import { RouterLink, useRouter } from "vue-router"
	// import axios from "axios"

	import MainLogo from "@/images/generic/jiji.png"
	const MainStore = Store()
  	const ModalStatesStore =  Modal_States()

	const router = useRouter() 

	const profileClicked = ()=> { 
		if (MainStore.USER) { 
			router.push("/profile")
		} else {
			ModalStatesStore.updateLoginModalState(true)
		}
	}
	const sellButtonClicked = () => {
		if (MainStore.USER) {
			router.push("/post-ad")
		} else {
			ModalStatesStore.updateLoginModalState(true)
		}
	}	
	function logoutFunction() {
		router.push("/")
		setTimeout(function() {
			localStorage.removeItem("USER")
			MainStore.updateUser(null)
			MainStore.updateUserBookmarks(null)
		}, 100);
	}
	const hideHeaderPaths = ref([
			"/",
			"/profile", 
			"/my-adverts", 
			"/performance",
			"/followers",
			"/feedback",
			"/transactions",
			"/orders",
			"/bookmarks",
			"/faq"
		])



</script>

<template>

	<div :class= " hideHeaderPaths.includes($route.path)   ? 'top_header-index' : 'top_header' " >
	<div class="help_me">
			<RouterLink to="/">
			<img style="width: unset" :src="MainLogo" alt="ibom-market-logo" />
			</RouterLink>
		<div class="part">
			<ol v-if="MainStore.USER">
				<li>
					<RouterLink to="/bookmarks">
						<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
						</svg>
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/notifications">
						<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
							<path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" />
						</svg>
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/premium">
						<img src="https://img.icons8.com/color/48/diamond.png" alt="diamond"/>
					</RouterLink>
				</li>
				<li>
					<RouterLink to="/my-adverts">
						<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
							<path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
							<path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
							<path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
						</svg>
					</RouterLink>
				</li>
			</ol>

			<div class="user login-signup right-menu">
				<div @click="profileClicked" class="menu-button"> 
					<svg v-if="!MainStore.USER" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
						<path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
					</svg>
					<img v-else-if="MainStore.USER?.profileImage" :src="MainStore.USER?.profileImage " alt="User profile image">
					<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" loggedin w-6 h-6">
						<path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
					</svg>
				</div>  
					<div v-if="MainStore.USER" class="dropdown-menu vv">
						<p><RouterLink to="/business-page"> My shop </RouterLink></p>
						<p><RouterLink to="/feedback"> Feedback </RouterLink></p>
						<p><RouterLink to="/performance"> Performance</RouterLink></p>
						<p><RouterLink to="/settings"> Settings </RouterLink></p>
						<p @click="logoutFunction">Logout</p>
					</div>  
			</div> 
			<button @click="sellButtonClicked" class="user login-signup">Sell</button>
			</div>
		</div>
	</div>
      
</template>



