<script setup>  
  import axios from "axios"
  import { ref } from "vue"
  import { RouterView } from "vue-router"
  import  { Store } from "@/stores/userStore.js" 
  // components
  import Footer from "./views/generic-view/Footer.vue"  
  import LoadingAnimation from "./views/generic-view/LoadingAnimation.vue"  
  import DesktopFooterLinks from "./views/generic-view/DesktopFooterLinks.vue"  
  import LoginModal from "./views/generic-view/LoginModal.vue"  
  import MainHeader from "./views/generic-view/MainHeader.vue"  
  import MobileSlideBar from "./views/generic-view/MobileSlideBar.vue"  
  import MobileViewFooter from "./views/generic-view/MobileViewFooter.vue"  
  import InfoModals from "@/views/generic-view/InfoModals.vue"
  // syles
  import "./styles/reusable/login-modal.css"
  import "./styles/reusable/main.css"
    
  const mainUserStore = Store()
  const fetchingUser = ref(true)
   
 

  // login modal state and function
   const loginModalDisplayState = ref(false)
   const updateLoginModalDisplayState = (pas) => {
    loginModalDisplayState.value = !loginModalDisplayState.value
    console.log(pas)
   }
// colorPrimary: '#3db83a',

 </script> 

<template> 
      <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#3db83a',
      },
    }"
  > 
  <div id="fake-wrap-container" > 
    <InfoModals />
      <LoginModal />
      <MainHeader />
      <RouterView 
       :updateLoginModalDisplayState = "updateLoginModalDisplayState"
       :USER = "USER"
       />
      <LoadingAnimation />
      <DesktopFooterLinks />
      <MobileSlideBar />
      <MobileViewFooter />
      <Footer />
  </div>
</a-config-provider >
</template>

<style >
  .ant-notification {
    z-index: 2500
  }
</style>

