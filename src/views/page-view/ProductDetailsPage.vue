<script setup>

	import { Store } from "@/stores/userStore.js"
	import axios from "axios"
	import { ref }  from "vue"
	import { useRoute } from "vue-router"
	import "@/styles/scoped/details-page.css"
	import LoadingAnimation from "@/views/generic-view/LoadingAnimation.vue"
	import MobileHeader from "../../views-components/product-details-page/MobileHeader.vue"
	import GridLayout from "../../views-components/product-details-page/GridLayout.vue"
	import SimilarAdverts from "../../views-components/product-details-page/SimilarAdverts.vue"
	import agent from "@/app/agent.js"

	const route = useRoute()
	let fetchedCard = ref(null)
	let postOwner = ref(null)
	const setFetchingData = ref(true)
	const fetcCardsError = ref(false)
	const { productID } = route.params
	console.log(route)
	console.log(productID)
	const MainStore = Store()

	const fetchData = async () => {
    setFetchingData.value = true
    fetcCardsError.value = false 
    try {
        const res = await  agent.Post.getOne(productID)
        fetchedCard.value = res.post[0]
        console.log(res)
        // const postOwnerRequest = await axios.get("http://localhost:5000/ibommarket/api/v1/user/" + res.post[0].postOwnerId)
        // fetchedCard
        MainStore.updateCurrentPostDetails(res.post[0])
        // postOwner.value = postOwnerRequest.data.data
		fetcCardsError.value = false
      } catch (err) {
        console.log(err, "err")  
        fetcCardsError.value = true
      }
      setFetchingData.value = false
       
} 
 fetchData()  
</script>

<template> 

	<MobileHeader :productTitle = "fetchedCard?.title || 'Loading...' " />
	<template v-if="setFetchingData && !fetcCardsError">
		<LoadingAnimation ClassName ="data-loading-animation"  />
	</template>
	<template v-if="!fetcCardsError && fetchedCard">	
		<GridLayout :productDetails = "fetchedCard " :postOwner = "postOwner" />
		<SimilarAdverts />
	</template>

 
</template>