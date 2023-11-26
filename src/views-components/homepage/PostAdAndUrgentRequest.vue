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

	<div className ="post-ad-index">
		<span @click = "setLoginModalDisplay" className ="post-ad-words user login-signup">
		Get Something to sell ?
		<br />
		Post an AD for Free
		</span> 
	</div> 
</template>