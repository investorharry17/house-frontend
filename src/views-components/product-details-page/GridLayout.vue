<script setup>
	import { defineProps } from "vue"
	import ImageSlideContainer from "./ImageSlideContainer.vue"
	import MainProductDetails from "./MainProductDetails.vue"
	import SecondPart from "./SecondPart.vue"

	const props = defineProps(["productDetails", "postOwner"])
</script>
<template>

	<div class="grid-layout">
		<div class="help-when-big">  
			<ImageSlideContainer :productDetails = "props?.productDetails" />
			<MainProductDetails  :productDetails = "props?.productDetails"  /> 
		</div>
		<SecondPart :postOwner ="props?.postOwner"/>
	</div>

</template>