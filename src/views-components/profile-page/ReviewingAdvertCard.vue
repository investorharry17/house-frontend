<script setup>
  import { defineProps } from "vue"

  const props = defineProps(["card"])
  function formatPrice(argument) {
    return argument.toLocaleString()
  }
</script>

<template>
        <div class="advert-in-profile-ad-box reviewing">
              <div class="top-part">
                <img :src="props?.card?.postImages[0]" :alt="props?.card?.title" />
                <div class="inside-ad-box">
                  <span class="title-of-ad"> {{ props?.card?.title }} </span>
                  <span class="price-of-ad"> ₦  {{ formatPrice(props?.card?.price) }} </span>
                  <div class="active-renewed">
                    <span>reviewing </span> <span> </span>
                  </div>
                  <ol class="ad-stats">
                    <li>
                      <img
                        class="time"
                        src="https://img.icons8.com/ios/50/1A1A1A/clock--v3.png"
                      />
                      <span> live in 4 hours max</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="button-part red">
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
                    <span>Publish</span>
                  </li>
                  <li>EDIT</li>
                </ol>
              </div>
            </div> 
</template>