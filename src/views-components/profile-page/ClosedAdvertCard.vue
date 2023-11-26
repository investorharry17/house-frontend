<script setup>
	import { defineProps } from "vue"
  const props = defineProps(["card", "makeAdvertActiveFunction"])

  function formatPrice(argument) {
    return argument.toLocaleString()
  }
</script>

<template>
        <div class="advert-in-profile-ad-box closed">
              <div class="top-part">
                <img :src="props?.card?.postImages[0]" :alt="props?.card?.title" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> Title of advert</span>
                  <span class="price-of-ad"> ₦ {{ formatPrice( props?.card.price) }} </span>
                  <div class="active-renewed">
                    <span>closed </span> <span></span>
                  </div>
                  <ol class="ad-stats">
                    <li>0 impressions</li>
                    <li>0 visitors</li>
                    <li>0 phone views</li>
                    <li>0 chats</li>
                  </ol>
                </div>
              </div>
              <div class="button-part">
                <ol class="edit-close">
                  <li>
                    <img
                      src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40dd50/external-Write-contact-us-tanah-basah-glyph-tanah-basah.png"
                      alt=""
                    />
                    <span>EDIT</span>
                  </li>
                  <li>
                    <img
                      src="https://img.icons8.com/carbon-copy/100/FA5252/filled-trash.png"
                    />
                    <span>Delete</span>
                  </li>
                </ol>
                <ol class="renew-topad">
                  <li>
                    <img
                      src="https://img.icons8.com/ios-filled/50/40dd50/recurring-appointment.png"
                    />
                    <span >Publish</span>
                  </li>
                  <li @click="props.makeAdvertActiveFunction(props.card._id); console.log('hey')">Publish</li>
                </ol>
              </div>
            </div>
</template>