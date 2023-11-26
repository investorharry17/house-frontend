<script setup>
	import { RouterLink } from "vue-router"
	import { Store } from "@/stores/userStore.js"
	import axios from "axios"
	import { defineProps  } from "vue"
	import agent from "@/app/agent.js"

	const MainStore = Store()
	const prop = defineProps(["cardDetails"])
	function formatPrice (price) {
		return price.toLocaleString()
	}
	function preventRedirect(event) {
		event.preventDefault()
		console.log("NO REDIRECT")
	}
	async function addBookmark (cardId) {
		if (!MainStore.USER) {
			MainStore.updateModalState(true)
			return false
		}
		try {
			const res = await  agent.Bookmarks.put( MainStore?.USER.value._id, {productId : cardId } ) 
			const data = res.data
			MainStore.updateUserBookmarks(data)
			console.log(data)
			if ( data.bookmarks.includes(cardId) ) {
				MainStore.openNotificationModal("info", "Bookmark added", "Advert with ID "  + cardId + " has been added to your bookmarks ")
			} else {
				MainStore.openNotificationModal("info", "Bookmark removed", "Advert with ID " + cardId +  "has been removed from your bookmarks ")
			}
		} catch(error) {
			console.log(error)
		} 
	}
	const Bookmarks = MainStore.userBookmarks?.bookmarks
	console.log(Bookmarks)  
</script>
<template>
  <div :key="prop?.cardDetails?._id" class="product-card">
    <div class="card-shell"> 
        <RouterLink :to="'/product/' + prop?.cardDetails?._id">
           <div :style="{ 'background-image': 'url(' + prop?.cardDetails.postImages[0] + ')' }" class="image-display">
             <div class="image-count">
               {{ prop?.cardDetails?.postImages.length }}
             </div>
           </div>
            <div class="card-details">
              <span class="title"> {{ prop?.cardDetails?.title}} </span>
              <span class="description"> </span> 
            </div>
            <div class="foot">
              <span class="price">₦  {{formatPrice(prop?.cardDetails?.price)}} </span>
              <div @click="preventRedirect" class="actions">
                <svg @click="addBookmark(prop?.cardDetails._id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" :class="{ 'active':  MainStore.userBookmarks?.bookmarks.includes(prop?.cardDetails?._id)  }">
                    <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                </svg> 
              </div>  
            </div>
        </RouterLink> 
    </div>
  </div> 
         
</template>
<style scoped>
	svg {
		margin-right: 5px;
	}
</style>