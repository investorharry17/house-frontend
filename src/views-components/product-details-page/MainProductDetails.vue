<script setup>
	import { defineProps } from "vue"
  // import { PhoneFilled }  from '@ant-design/icons-vue'
  import  { Store } from "@/stores/userStore.js"
  const props = defineProps(["productDetails"]) 
  const mainUserStore = Store()
  console.log(mainUserStore)
 
</script>

<template>
     <div class="featuresandspec">
            <ol class="firstfands">
              <li> Value </li>
              <li>Input</li> 
            </ol>
            <ol class="secondfands">
              <li>Value d d</li>
              <li>Input d d</li> 
            </ol>
          </div>
          <div class="onelinefands">
            <ol>
              {{ props?.productDetails?.description }}.
            </ol>
          </div>
          <div class="maosc">
            <a-button for="a" type="" class="request1">Make an offer</a-button>
           <!--  <a-button type="primary" :size="size">
              Show contact
              <template #icon>
                <PhoneFilled />
              </template>
            </a-button> -->
            
          </div>
          <div class="social-media-links">  
          </div>
          <div class="mao-block">
            <button class="last-make-an-offer">Make an offer</button>
      </div>
 
</template>