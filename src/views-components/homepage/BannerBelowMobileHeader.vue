<script setup>
  import { Store } from "@/stores/userStore.js"
  import { useRouter } from "vue-router"
  import axios from "axios"
	import { ref } from "vue"
  const suggestions = ref([])
  const inputValue = ref("")
  const MainStore = Store()
  const router = useRouter()
  async function getSuggestions() {
        // inputValue.value = inputValue.value.trim()
        MainStore.updateUserSearchString(inputValue.value)
        try {
          const res = await axios.post("http://localhost:5000/ibommarket/api/v1/post/find?searchString=" + inputValue.value.trim() )
          const data = res.data
          console.log(data)
          suggestions.value = data
        } catch( error ){
            console.log(error)
        }
  }
  const categories = ["Property", "Vehicles", "Fashion", "Skill", "Mechanic VIllage"]
  function formatCategory(value) {
    let send = ""
    categories.map((one, index)=> {
      if (Number(value) ===  index + 1 ) {
        return send = one
      }
    })
    return send
  }
</script>
<template>
 
      <div id="container" class="index">
        <div class="help_me">
          <div class="below_header">
            <div class="center">
              <div style = "display: flex; align-items : center">
                <span>Find anything in</span>
                <span id="nigger" style="display: flex;align-items: center;">
                  <svg height="16" style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
</svg>

                  All Nigeria
                  </span
                >
              </div>
              <div>
                <svg @click="router.push('/search?searchString=' + inputValue ) " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
                <input @input="getSuggestions" v-model="inputValue" placeholder="I am looking for..." type="text" />
                <ol id="drop-suggestions" v-if="inputValue">
                  <li v-for="value in suggestions" :key="value._id"> 
                    <RouterLink :to="'/product/' + value._id">
                      <img :src="value.postImages[0]">
                      <span class="input-text"> {{ value.title }} </span>
                      <span class="in"> in </span>
                      <span class="sub-category"> {{ formatCategory(value.category) }} </span>
                    </RouterLink>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
	
</template>