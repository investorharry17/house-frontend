<script setup>
	import { defineProps } from "vue"
	const props = defineProps(["ClassName"])
	console.log(props)
</script>

<template>
		<div :class="ClassName" id="loader" > 
			<div class="one" > </div>
			<div class="two" > </div>
			<div class="three" > </div>
		</div>
</template>

<style scoped>
	#loader {
		margin-top: 40px
	}
	#loader.homepage {
		margin-top: 100px;
	}
</style>