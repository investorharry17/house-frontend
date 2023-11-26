<script setup>
	import { Swiper, SwiperSlide } from "swiper/vue"
	import { Pagination, Autoplay, Navigation } from "swiper/modules"
	import "swiper/css"
	import image_1 from "../../images/homepage/mobile-view-advert/4.jpg"
	import image_2 from "../../images/homepage/mobile-view-advert/2.gif"
</script>

<template>
	
	<div id="advert-space" class ="google-ad">
		<Swiper 
			style ="height: 100%; padding: 0" class ="ol"
			:modules = "[Pagination, Autoplay, Navigation]"
			:autoplay = "{ delay: 15000,disableOnInteraction: false}"
			:pagination = "{clickable : true }"
			navigation
		>
			<SwiperSlide class ="one"> <img style="object-fit: cover; height: 190px;" :src="image_1"/> </SwiperSlide>
			<SwiperSlide class ="one"> <img style="object-fit: cover; height: 190px;" :src="image_2"/> </SwiperSlide> 
		</Swiper>
	</div> 
</template>