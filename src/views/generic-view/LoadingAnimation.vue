<script setup>
	import { defineProps } from "vue"
	const props = defineProps(["class"])
	console.log(props)
</script>

<template>
		<div :class="class" id="loader" > 
			<div class="one" > </div>
			<div class="two" > </div>
			<div class="three" > </div>
		</div>
</template>

<style scoped>
	#loader {
		margin-top: 40px
	}
	 
</style>