<script setup>
	import { ref } from "vue"
	import agent from "@/app/agent.js"

	import HomepageDesktopNavigation from "./HomepageDesktopNavigation.vue" 
	import HomepageAsideElement from "./HomepageAsideElement.vue"
	import HomepageAdvertBanner from "./HomepageAdvertBanner.vue"
	import PostAdAndUrgentRequest from "./PostAdAndUrgentRequest.vue"
	import ProductCard from "./ProductCard.vue"
	import LoadingAnimation from "../../views/generic-view/LoadingAnimation.vue"
    
	const fetchingData = ref(true)
	const fetchingDataError = ref(false)
	const fetchedCards = ref([]) 
	const fetchData = async () => {
        fetchingData.value = true 
        fetchingDataError.value = false
        try {
            // const res = await fetch("http://localhost:5000/ibommarket/api/v1/post?active=true")
       		const res = await  agent.Post.getOne("?active=true" )
 
            const postsData =  res

            const newData = fetchedCards.value  
                postsData.posts.forEach(post =>{
                   newData.push(post)
                })
            fetchedCards.value = newData

            console.log(fetchedCards) 
          } catch (err) {
            console.log(err)
            fetchingDataError.value = true
          }
          fetchingData.value = false
	}
	fetchData() 
</script>
<template>
 
	<div className ="max_width">
		<HomepageDesktopNavigation />
		<HomepageAsideElement />
		<div   id="products" className ="index">
			<HomepageAdvertBanner />
				<PostAdAndUrgentRequest  />
				<HomepageBusinessBlock/>
				<!-- <h3>Urgent Requests</h3> -->
				<UrgentRequest />
				<h3>Trending ads</h3>  
				<template v-if="fetchingData"> 
					<div>fetching</div>
				</template>  
				
				<div v-else class="product-card-container">
					<template v-for ="card in fetchedCards" :key="card"> 
						<ProductCard :cardDetails="card" />
					</template> 
				</div>     
				<template v-if="fetchingDataError">						
					<div className="data-loading-animation homepage"> 
						<span> Error occoured while fetching data  </span> 
					</div> 
				</template>
				<LoadingAnimation class ="homepage data-loading-animation" />
		</div>
	</div> 
</template>

<style scoped>
	.ske {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>		