<script setup>
	import { useSeoMeta } from "unhead"
	// import HomepageMobileView from "../../views-components/homepage/HomePageMobileView.vue"
	import BannerBelowMobileHeader from "../../views-components/homepage/BannerBelowMobileHeader.vue"
	import MainHomepageBlock from "../../views-components/homepage/MainHomepageBlock.vue"
	import "../../styles/scoped/index.css"
	import "../../styles/scoped/autoplay.css"


	// the easiest meta tags
	useSeoMeta({
	  charset: 'utf-8',
	  description: 'Welcome to my site',
	  ogImage: 'https://res.cloudinary.com/djp2xd5rl/image/upload/v1699784268/da-net7/hefi0ey2dxsir0kvzuba.png',
	  ogLocale: 'en',
	  ogLocaleAlternate: ['fr', 'zh'],
	  twitterCard : "summary_large_image",
	  twitterUrl : "https://metatags.io/" ,
	  twitterTitle : "Meta Tags — Preview, Edit and Generate" ,
	  twitterDescription : "With Meta Tags you can edit and experiment with you :  then preview how your webpage will look on Google, Facebook, Twitter and more!",
	  twitterImage : "https://res.cloudinary.com/djp2xd5rl/image/upload/v1699784268/da-net7/hefi0ey2dxsir0kvzuba.png"

	})
</script>
<template> 
	<HomepageMobileView />
	<BannerBelowMobileHeader />
	<MainHomepageBlock />
</template> 