<script setup>
	import { Store } from "@/stores/userStore.js"
	import { useRouter } from "vue-router"

	const MainStore = Store()
	const router = useRouter()

		const setLoginModalDisplay = () => {
		if (MainStore.USER) { 
			console.log("yes")
			router.push("/post-ad")
		} else {
			MainStore.updateModalState(true)
		}
	}
</script>
<template>

	<div @click = "setLoginModalDisplay" className ="post-ad-index">
		<span  className ="post-ad-words user login-signup">
		 
		Got comething to sell?
		</span> 
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  				<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
			</svg>
		<span  className ="post-ad-words user login-signup">
		 
		Post an AD for Free
		</span> 
	</div> 
</template>

<style scoped>
	div {
		background: orange !important;
		cursor: pointer;
	}
	svg {
		color: white
	}
	span {
		background: unset !important;
	}
</style>