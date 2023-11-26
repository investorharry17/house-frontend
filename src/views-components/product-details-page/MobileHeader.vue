<script setup>
	import { defineProps } from "vue"
	import { useRouter, RouterLink } from "vue-router"
	const props = defineProps(["productTitle"])
	const router = useRouter() 
	const backFunction = () => {
		router.back() && router.push('/') 
		console.log("router.back()")

	}
	console.log(props.productTitle)
</script>

<template>
 
      <div class="smalltop">
        <div class="fpart">
          <RouterLink @click.prevent= "backFunction" to="#">
            <img
              src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"  />
          </RouterLink>
          <span class="fparttext"> {{ props.productTitle }} </span>
        </div>
        <img src="https://img.icons8.com/ios-glyphs/30/3db83a/share--v1.png" />
      </div>
 

</template>