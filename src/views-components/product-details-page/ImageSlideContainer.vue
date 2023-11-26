<script setup>
	import { ref, defineProps } from "vue"
	import	{ PhoneFilled }  from "@ant-design/icons-vue"
		// swiper 
	import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"
	import { useSwiperSlide } from 'swiper/vue'
	import { Navigation } from "swiper/modules" 
	import "swiper/css" 

	import "swiper/css"
	import "swiper/css/pagination"
	import "swiper/css/navigation"	
	import Image from "../../images/about-us/woman-and-cart.jpg"
	const imageModalOpened = ref(false)
	const SWIPER = ref(null)

	const activeIndex = ref(1)
	const toggleImageModalShow = (num) => {
		const body = document.querySelector("body")
		if (imageModalOpened.value) {
			body.style.overflow = "auto"
		} else {
			body.style.overflow = "hidden"
		}
		imageModalOpened.value = !imageModalOpened.value
		console.log(num)
	}
	const props = defineProps(["productDetails"])

	function formatPrice (price) {
		return price?.toLocaleString()
	}
	const swiper = useSwiper()
	const swiperSlide = useSwiperSlide()
	console.log(swiper)
	console.log(swiperSlide)
	const modalImage = ref("")

	function onSwiper (swiper) {
		console.log(swiper)
		SWIPER.value = swiper
		console.log(SWIPER.value)
	}
	function onSlideChange(swiper) {
		console.log("slide changed")
		console.log(swiper.activeIndex)
		activeIndex.value = swiper.activeIndex + 1
	}
	function changeSwiperSlide (index) {
		console.log(SWIPER.value.activeIndex)
		SWIPER.value.slideTo(index)
	}
</script>

<template> 
 
		
 <div id="imageContainer" class="imageContainer">
            <div style= "position: relative">
              <div class="slide-indicator">
                <img    src="https://img.icons8.com/ios-filled/50/FFFFFF/unsplash.png" />
                   <span class="current-slide"> {{ activeIndex }} </span> /
                   <span class="total-slide"> {{ props?.productDetails?.postImages?.length }}</span>
              </div>   
				<template v-if ="props?.productDetails">

					<Swiper style="padding: 0"
					@swiper = "onSwiper"
					@slideChange = "onSlideChange"
					:modules = "[ Navigation]" 
					:pagination = "{clickable : true }"
					navigation
					>
						<SwiperSlide  v-for="(image, index) in props?.productDetails?.postImages" class="slide-image product" :key="index" > 
						<img @click="toggleImageModalShow(Image[num]); modalImage = image" style="object-fit: cover; height: 190px;" :src="image"/>
						</SwiperSlide>  
					</Swiper>
				</template>
            </div>

			<div  class="navigation-dots navigation">
				<img v-for="(src, index) in props?.productDetails?.postImages" :key="index" :class ="['swiper-pagination-bullet', index + 1 === activeIndex ? 'active' : '' ]" :src="src" @click="changeSwiperSlide(index)">
				<div v-if="props?.productDetails?.postImages?.length > 5" class="more-images"> + {{ props?.productDetails?.postImages?.length - 5  }} </div>
			</div>

            <div v-if="imageModalOpened" id="imageModal">
				<svg @click="toggleImageModalShow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="	currentColor" class="w-6 h-6 close-image-modal">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
                 <img :src="modalImage" :alt="modalImage" id="modalImage" />
            </div> 

            <div class="nameAndPrice">
                <span class="product-name">{{props?.productDetails?.title}}</span>
                <span id="productPrice">₦ {{ formatPrice(props?.productDetails?.price) }} </span>
            </div>

            <div class="promotion">
                <span v-show="props?.productDetails?.postTag !== 'normal' "> Promoted</span>
                <span> <img src="https://img.icons8.com/ios-filled/50/a6b8bd/visit.png"/>  State, Local Gov </span>
            </div>
 
             <div class="requestAndShow">
				<a-button type="" > Request call back</a-button>
					<a-button type="primary" > 
						Show contact
						<template #icon>
						<PhoneFilled />
						</template>
					</a-button>
            </div> 

      </div> 
           
</template>

