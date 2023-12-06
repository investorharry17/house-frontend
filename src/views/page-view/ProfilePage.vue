<script setup>
  import { Store } from "@/stores/userStore.js"
	import { ref, reactive } from "vue"
  import axios  from "axios"
  import agent from "@/app/agent.js"
	import { useRouter } from "vue-router" 
	import ProfilePageNavBar from "../generic-view/ProfilePageNavBar.vue"
	import ActiveAdvertCard from "../../views-components/profile-page/ActiveAdvertCard.vue"
	import ReviewingAdvertCard from "../../views-components/profile-page/ReviewingAdvertCard.vue"
	import DeclinedAdvertCard from "../../views-components/profile-page/DeclinedAdvertCard.vue"
  import ClosedAdvertCard from "../../views-components/profile-page/ClosedAdvertCard.vue"
	import NoAdvertCard from "../../views-components/profile-page/NoAdvertCard.vue"
	import "@/styles/scoped/my-adverts.css"

  const MainStore = Store()
  const router = useRouter()
  const userPosts = ref(null)
  if (!localStorage.USER ) {
    router.push("/?from=/profile")
    console.log(MainStore.USER)
  }
  const activeAdvertStatus = ref(0)
  function changeActiveAdvertStatusIndex(index) {
    activeAdvertStatus.value = Number(index)
  }
    const backFunction = () => {
    router.back() && router.push('/') 
    console.log("router.back()")

  }
  let sortedPosts = reactive({
    active : [],
    reviewing: [],
    declined : [],
    closed : []
  })
  async function getUserPosts () {
    try {
      const res = await agent.Account.getIdOwner( MainStore.USER._id )
      userPosts.value = res.data.posts
      console.log(res.data)
      userPosts.value.forEach(value => {
        switch ( value.statusId ) {
          case 1 :
            sortedPosts.active.push(value)
            break;
          case 2 :
            sortedPosts.reviewing.push(value)
            break;    
          case 3 :
            sortedPosts.declined.push(value)
            break;  
          case 4 :
            sortedPosts.closed.push(value)
            break;
        }
      })
      console.log(sortedPosts)
    } catch (err) {
      console.log(err)
    }
  }
  getUserPosts()
  async function closeAdvertFunction(postId) {
    // body...
    try {
        const res = await  agent.PostActions.close( postId, {
          postOwnerId : MainStore.USER._id
        } )
        
      sortedPosts.active = []
      sortedPosts.reviewing = []
      sortedPosts.declined = []
      sortedPosts.closed = [] 
      userPosts.value = res.data.posts
      userPosts.value.forEach(value => {
        switch ( value.statusId ) {
          case 1 :
            sortedPosts.active.push(value)
            break;
          case 2 :
            sortedPosts.reviewing.push(value)
            break;    
          case 3 :
            sortedPosts.declined.push(value)
            break;  
          case 4 :
            sortedPosts.closed.push(value)
            break;
        }
      })
      MainStore.openNotificationModal("success", "Advert closed", "Advert with id " + postId + "has been closed"  )
    } catch (err) {
      console.log(err)
    }
  }
  async function makeAdvertActiveFunction(postId) {
    // body...
     try {
        const res = await agent.PostActions.active( postId, {
          postOwnerId : MainStore.USER._id
        } )

      sortedPosts.active = []
      sortedPosts.reviewing = []
      sortedPosts.declined = []
      sortedPosts.closed = []  

      userPosts.value = res.data.posts
      userPosts.value.forEach(value => {
        switch ( value.statusId ) {
          case 1 :
            sortedPosts.active.push(value)
            break;
          case 2 :
            sortedPosts.reviewing.push(value)
            break;    
          case 3 :
            sortedPosts.declined.push(value)
            break;  
          case 4 :
            sortedPosts.closed.push(value)
            break;
        }
      })
      MainStore.openNotificationModal("success", "Advert published", "Advert with id " + postId + "has been published"  )

    } catch (err) {
      console.log(err)
    }
  }
</script>

<template>
	<!-- <MainHeader /> -->
	<div class="left-and-right-positions">
		<ProfilePageNavBar :USER = MainStore.USER />

    <div class="right-profile-section profile">
      <div class="all-profile-mobile-heading">
            <img @click="backFunction" src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png" alt="" />
            <span @click="backFunction"> My adverts</span>
      </div>
      <ul class="my-advert-in-profile">
            <li @click="changeActiveAdvertStatusIndex(0)" :class="activeAdvertStatus === 0 ? 'active' : '' ">
              <img src="https://img.icons8.com/material-sharp/24/40dd50/checked--v1.png" />
              <span> Active </span>
              <span> ({{ sortedPosts.active.length }})</span>
            </li>
            <li  @click="changeActiveAdvertStatusIndex(1)" :class="activeAdvertStatus === 1 ? 'active' : '' ">
              <img src="https://img.icons8.com/material-outlined/24/fea03c/coming-soon.png" />
              <span>Reviewing </span>
              <span> ({{ sortedPosts.reviewing.length }})</span>
            </li>
            <li @click="changeActiveAdvertStatusIndex(2)" :class="activeAdvertStatus === 2 ? 'active' : '' ">
              <img src="https://img.icons8.com/ios-filled/50/FA5252/hand.png" alt="" />
              <span> Declined </span>
              <span> ({{ sortedPosts.declined.length }}) </span>
            </li>
            <li @click="changeActiveAdvertStatusIndex(3)" :class="activeAdvertStatus === 3 ? 'active' : '' ">
              <img
                src="https://img.icons8.com/windows/32/6c8ea0/square-full.png"
              />
              <span> Closed </span>
              <span> ({{ sortedPosts.closed.length }})</span>
            </li>
            <li @click="changeActiveAdvertStatusIndex(4)" :class="activeAdvertStatus === 4 ? 'active' : '' ">
              <img
                src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/355a76/external-checks-ui-edtim-solid-edtim.png"
              />
              <span>All</span>
              <span>( {{ sortedPosts.active.length + sortedPosts.reviewing.length + sortedPosts.declined.length + sortedPosts.closed.length  }} )</span>
            </li>
      </ul>
      <div class="advert-in-profile-search-box">
            <img
              class="search-icon"
              src="https://img.icons8.com/ios-glyphs/30/737373/search--v1.png"
            />
            <input placeholder="Type your search here" type="text" />
            <img
              class="filter-icon"
              src="https://img.icons8.com/ios-filled/50/737373/empty-filter.png"
            />
      </div>
          <!-- start for active ads -->
         <NoAdvertCard />
          <template v-if="activeAdvertStatus === 0 || activeAdvertStatus === 4">
            <template v-for="card in sortedPosts.active" :key="card._id"> 
                <ActiveAdvertCard :card = "card" :closeAdvertFunction = "closeAdvertFunction  " />
            </template>
          </template>
                <!-- start for reviewing ads -->
       
          <template v-if="activeAdvertStatus === 1 || activeAdvertStatus === 4">
            <template v-for="card in sortedPosts.reviewing" :key="card._id">
                <ReviewingAdvertCard :card = "card" />
            </template>
          </template>
                <!-- start for declined ads -->
                <!-- <div class="relative-advert-in-profile"> -->
          <template v-if="activeAdvertStatus === 2 || activeAdvertStatus === 4">
            <template v-for="card in sortedPosts.declined" :key="card._id">
              <DeclinedAdvertCard :card= "card" />
            </template>
          </template>
                <!-- start for closed ads -->
          <template v-if="activeAdvertStatus === 3 || activeAdvertStatus === 4">
            <template v-for="card in sortedPosts.closed" :key="card._id">
             <ClosedAdvertCard :card= "card" :makeAdvertActiveFunction = "makeAdvertActiveFunction" />
            </template>
          </template>

        </div>
	</div>

</template>

<style scoped>
	.right-profile-section {
		display: none;
	}
	@media only screen and (min-width: 1024px) {
		.right-profile-section {
			display: unset;
			margin-top: 0;
		}
	}
</style>