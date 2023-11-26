<script setup>
	import { RouterLink } from "vue-router"
  import Logo from "../../images/generic/jiji.png"
	
</script>

<template>

      <div class="footer-f-m index">
        <div>
          <img :src="Logo" />
          <a href="#top">
            <img to="#top"  src="https://img.icons8.com/ios-filled/50/a6b8bd/more-than.png"
            />
          </a>
        </div>
        <div style= "padding-left: 0">
          <ol style= "padding-left: 25px">
            <li><RouterLink to="/about-us"> About Ibommarket</RouterLink></li>

            <li><RouterLink to="/terms-and-conditions">Terms & Conditions</RouterLink></li>

            <li><RouterLink to="/billing-policy"> Billing Policy</RouterLink></li>
            <li><RouterLink to="/safety-tips">Ibommarket tips</RouterLink></li>
          </ol>
          <ol>
            <li><RouterLink to="/faq">FAQ</RouterLink></li>
            <li><RouterLink to="/privacy-policy"> Privacy Policy</RouterLink></li>
            <li><RouterLink to="/contact-us">Contact Us</RouterLink></li>

            <li></li>
            <li><RouterLink to="/cookie-policy"> Cookie Policy</RouterLink></li>
            <li>
              <RouterLink to="/copyright-infringement-policy"> Copyright Infringement Policy</RouterLink>
            </li>
          </ol>
        </div>
        <div>
          <ol>
            <li>Free classified in Nigeria</li>
            <li>© 2020 Jiji.ng Gibraltar</li>
          </ol>
        </div>
      </div>
	
</template>