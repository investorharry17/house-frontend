<script setup>
  import { defineProps, ref } from "vue"
  import { useRouter, RouterLink } from "vue-router" 
  import { Store } from "@/stores/userStore.js"
  const prop = defineProps(["USER"])


  const MainStore = Store()
  const router = useRouter() 
  const backFunction = () => {
    router.back() && router.push('/') 
  } 
  const mangerCallModalOpened = ref(false)
  const requestedCall = ref(false)
  function openManagerCallModal() {
    // if (!requestedCall.value) {
      const body  = document.querySelector("body")
      body.style.overflow = ( !mangerCallModalOpened.value ? "hidden" : "auto")
     !requestedCall.value ? mangerCallModalOpened.value = !mangerCallModalOpened.value : ''
    // } 
  }
  function requestCallFunction () {
      mangerCallModalOpened.value = !mangerCallModalOpened.value 
      requestedCall.value = true
      const body  = document.querySelector("body")
      body.style.overflow =  "auto"


  }
</script>

<template>
    <div :class="['left-profile-section', $route.path ==='/profile' ? 'profile' : '' ]">
          <div class="header">
            <div>
              <RouterLink @click="backFunction" to="#">
                <img
                  class="to-back"
                  src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"
                  alt="back"
                />
              </RouterLink>
              <div class="profile-picture">
                <img v-if="MainStore.USER?.profileImage" :src="MainStore.USER?.profileImage" alt="" />
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" loggedin w-6 h-6">
  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
</svg>
              </div>
              <div class="user-name"> {{ MainStore.USER?.firstName + " " + MainStore.USER?.lastName }} </div>
              <div class="phone-number"> {{ "0" + MainStore.USER?.phoneNumber }} </div>
            </div>
            <div class="setting-container">
              <RouterLink to="/settings">
                <span>SETTINGS</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

              </RouterLink>
            </div>
          </div>
          <div class="main-container">
            <RouterLink to="/my-adverts">
              <ol>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>

                <span :class="$route.path === '/my-adverts' ? 'active' : ''"  >My adverts</span>
              </ol>
            </RouterLink>
            <RouterLink to="/performance">
              <ol>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>

                <span :class="$route.path === '/performance' ? 'active' : ''" >Performance</span>
              </ol>
            </RouterLink>
            <RouterLink to="/followers">
              <ol>
                <img src="https://img.icons8.com/material/24/303a4b/my-topic--v2.png" />
                <span :class="$route.path === '/followers' ? 'active' : ''" >Followers</span>
              </ol>
            </RouterLink>
            <RouterLink to="/feedback">
              <ol>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>

                <span :class="$route.path === '/feedback' ? 'active' : ''" >Feedbacks</span>
              </ol>
            </RouterLink>
            <RouterLink to="/transactions">
              <ol>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>

                <span>Transaction lists</span>
              </ol>
            </RouterLink>
            <RouterLink to="/orders">
              <ol>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>

                <span :class="$route.path === '/orders' ? 'active' : ''" >Order lists</span>
              </ol>
            </RouterLink>
            <RouterLink to="/faq">
              <ol>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>

                <span :class="$route.path === '/faq' ? 'active' : ''" >Frequently asked questions</span>
              </ol>
            </RouterLink>

            <ol :class="requestedCall? 'm-c' : ''" id="open-manager-call-modal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>

              <div @click="openManagerCallModal">
                <span v-if="!requestedCall" >Manager call</span>
                <span v-else class="m-c">REQUEST SENT</span>
              </div>
            </ol>
          </div>
        </div>
          <div v-if="mangerCallModalOpened" id="manager-call"> 
              <div>
                <img src="" alt="" id="close-manager-call-modal" />
                <span> Do you want Ibommarket manager to call you?</span>
                <button  @click="requestCallFunction" class="yes">Yes</button>
                <button  @click="openManagerCallModal" class="no">No</button>
              </div>
            </div>
</template>

<style scoped>
  .header div:nth-of-type(1) img, .header div:nth-of-type(1) svg {
    padding: 0;
  }
  svg {
    height: 30px !important;
    width: 30px !important;
    color: #000 !important;
  }
  .main-container ol:hover span, .main-container ol:hover svg, .main-container ol span.active {
    color: #3db83a !important;
  }
</style>