<script setup>
	import { Store } from "@/stores/userStore.js"
	import { Modal_States } from "@/stores/modalStatesStore.js"
	import { useRouter } from "vue-router"

	const MainStore = Store()
  	const ModalStatesStore =  Modal_States()
	const router = useRouter()
	import postImage from "@/images/homepage/post.png"


	const setLoginModalDisplay = () => {
		console.log("YES") 
		if (MainStore.USER) { 
			console.log("yes")
			router.push("/post-ad")
		} else {
			ModalStatesStore.updateLoginModalState(true)
		}
	}
</script>
<template>
	
	<aside className ="index">
		<div @click = "setLoginModalDisplay" style="cursor: pointer;" class ="container login-signup">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  				<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
			</svg>
			<span> Post ad </span> 
		</div> 
	</aside>
	
</template>

<style scoped>
	aside {
		width: 100%;
		margin: 20px 0;
		display: flex;
	}
	.container {
		background: #fff;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100px;
		padding: 8px; 
	}
	.container svg {
		color: tomato;
		height: 100% !important;
		width: 80% !important;
	}
	span {
		width: fit-content;
		
	}

</style>
