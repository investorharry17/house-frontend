 <script setup>
   import { RouterLink } from "vue-router"
 </script>
  <template>
      <div class="footer">
        <ol>
          <li>About us</li>
          <li><RouterLink to="/about-us"> About Ibommarket</RouterLink></li>

          <li><RouterLink to="/terms-and-conditions"> Terms and Conditions</RouterLink></li>
          <li><RouterLink to="/privacy-policy"> Privacy Policy</RouterLink></li>
          <li><RouterLink to="/billing-policy"> Billing Policy</RouterLink></li>
          <li><RouterLink to="/cookie-policy"> Cookie Policy</RouterLink></li>
          <li>
            <RouterLink to="/copyright-infringement-policy"> Copyright Infringement Policy</RouterLink>
          </li>
        </ol>
        <ol>
          <a id="#top"></a>

          <li>Support</li>
          <li><a href="mailto:support@ibommarket.ng"> suppoer@jiji.ng</a></li>
          <li><RouterLink to="/safety-tips">Safety tips</RouterLink></li>
          <li><RouterLink to="/contact-us">Contact Us</RouterLink></li>
          <li><RouterLink to="/faq">FAQ</RouterLink></li>
        </ol>
        <ol>
          <li>Our apps</li>
        </ol> 
        <ol>
          <li>Our resources</li>

          <li><a href="facebook-link"> Ibommarket on FB</a></li>
          <li><a href="instagram-link"> Our instagram</a></li>
          <li><a href="youtube-link"> Our youtube</a></li>
          <li><a href="twitter-link"> Our twitter</a></li>
        </ol>
      </div>

    
  </template>