<script setup>
	import { defineProps } from "vue"
  import { RouterLink } from "vue-router"
  import { PhoneFilled, FlagFilled }  from '@ant-design/icons-vue'

  const props = defineProps(["postOwner"])
  console.log(props.postOwner)
</script>

<template>

    <div class="second-part">
          <div class="second-part-one">
            <div class="price-and-rcb">
              <div class="desktop-mode-price"></div>
              <div class="desktop-mode-rcb">
              <a-button type="" :size="size">
                Request call back
              </a-button>
                <div class="request-callback-modal one">
                  <span class="words"> Your Name & Phone NUmber</span>
                  <div class="name-container">
                    <input
                      type="text"
                      style="text-indent: 10px"
                      class="option-box name1-box"
                    />
                    <span
                      style= "top: 30px"
                      class="option-box-span name1-box-span"
                      >Your Name<sup>*</sup></span
                    >
                  </div>
                  <div class="phone-number-container">
                    <input
                      type="text"
                      style= "text-indent: 10px"
                      class="option-box phone1-box"
                    />
                    <span
                      style= "top: 30px"
                      class="option-box-span phone1-box-span"
                    >
                      Your phone number<sup>*</sup></span
                    >
                  </div>
                  <a-button type="" :size="size">
                    Request callback
                  </a-button>
                </div>
              </div>
            </div>
            <div class="name-show">
              <div class="sellers-info">
                <RouterLink :to="'/business/' + props?.postOwner?._id ">
                  <img class="profile-image" :src="props?.postOwner?.profileImage" />
                </RouterLink>
                <div class="active-stat"></div>
                <div class="seller-info-sub">
                  <RouterLink :to="'/business/' + props?.postOwner?._id ">
                    <div class="name-and-add-info">
                      <div class="name"> {{ props?.postOwner?.businessName ||   props?.postOwner?.firstName + " " + props?.postOwner?.lastName  }} </div>
                      <ol class="no-of-ads">
                        203 Ads
                      </ol>
                      <img src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"/>
                    </div>
                   </RouterLink>
                  <div class="no-of-years">
                    <span>
                      <img
                        src="https://img.icons8.com/fluency/48/null/filled-message.png"
                      />
                      Typically replies within a day
                    </span>
                    <span>
                      <img
                        src="https://img.icons8.com/material/24/null/ok--v1.png"
                      />
                      3y 4m on Jiji</span
                    >
                  </div>
                </div>
              </div>
              <div class="scsc">
              <a-button type="primary" :size="size">
                Show contact
                <template #icon>
                  <PhoneFilled />
                </template>
              </a-button>     
               <a-button type="primary" :size="size">
                Start chat
                <template #icon>
                  <PhoneFilled />
                </template>
              </a-button> 
              </div>
            </div>
          </div>

          <div class="s-tips-to-palt">
            <div class="safety-tips">
              <label>Safety tips</label>
              <ul>
                <li> Don't not pay in advance including for delivery</li>
                <li>Meet the seller at a safe public place</li>
                <li>Inspect the item and ensure it is exactly what you want</li>
                <li>
                  On delivery, check that the item delivered is what was
                  inspected
                </li>
                <li>Only pay when you are satisfied</li>
              </ul>
            </div>
            <div class="unavailable-and-report">
              <a-button size="" > Mark unavailable </a-button>
            <a-button type="danger" :size="size">
                Report abuse
                <template #icon>
                  <FlagFilled />
                </template>
              </a-button>
            </div>
             <RouterLink class="post-ad-like-this" to="/post-ad" > POST AD LIKE THIS </RouterLink> 
          </div>
    </div>
</template>