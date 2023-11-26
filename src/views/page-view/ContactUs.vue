<script setup>
	import { RouterLink } from "vue-router"
	import "@/styles/scoped/contact-us.css"
</script>

<template>
	
      <div id="contact-us"> 
        <header>Contact Us</header>
        <div class="cu-hero">
          <img src="" alt="" />
          <span>
            Ibommarket customers support team is always ready to answer your
            questions and provide all the necessary assistance
          </span>
          <span>
            Ibommarket.com customer care department - you can email your
            questions, suggestions, and comments at
            <a href="mailto:support@ibommarket.com">support@ibommarket.ng</a>
          </span>
          <span>
            If you found any bugs or have security related questions, please get
            in touch with our team at
            <a href="mailto:security@ibommarket.com">security@ibommarket.com</a>
          </span>
          <span class="bold"> Check our Frequently Asked Questions </span>
          <RouterLink to="/faq">
            <button>Visit FAQ Page</button>
          </RouterLink>
        </div>
      </div>
</template>