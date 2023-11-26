<script setup>
  import { RouterLink } from "vue-router"
  import "@/styles/scoped/about-us.css"

  // images

  import womanAndCart from "../../images/about-us/woman-and-cart.jpg"
  import premium from "../../images/about-us/premium.jpg"
  import safety from "../../images/about-us/safety.jpg"
  import sale from "../../images/about-us/sale.jpg"
  import search from "../../images/about-us/search.jpg" 
  
</script>
<template> 
 
      <div className="smalltop">
        <div className="fpart">
          <RouterLink to="index.html">
            <img  src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"  />
          </RouterLink>
          <span className="fparttext"> About Ibommarket</span>
        </div>
      </div>
          <div id="about-us">
        <div className="section">
          <div className="section-part">
            <header className="bold">
              Ibommarket is the best place to seek anything to real people
            </header>
            <span className="faint">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium aliquid provident asperiores, nemo atque architecto
              saepe nulla id quisquam fuga libero illum delectus rem tenetur
              assumenda culpa nisi excepturi neque.
            </span>

            <label for="table-of-contents"> Table of contents </label>
            <a href="#how-to-sell">
              <div className="link-to">
                <span>How to sell on Ibommarket?</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
              </div>
            </a>
            <a href="#how-to-buy">
              <div className="link-to">
                <span>How to buy on Ibommarket?</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
                
              </div>
            </a>
            <a href="#safety">
              <div className="link-to">
                <span>Safety on Ibommarket</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
                
              </div>
            </a>
            <a href="#proselling">
              <div className="link-to">
                <span>Sell like a pro</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
                
              </div>
            </a>
          </div>
          <div className="section-part">
            <img :src= "womanAndCart" alt="woman and cart image" className="illustration"
            />
          </div>
        </div>
        <div className="section">
          <div className="section-part">
            <header className="bold">
              <a name="how-to-sell"></a>
              How to sell on Ibommarket
            </header>
            <div className="al">
              <span className="index-a">1</span>
              <span className="colored-a bold-a">Register</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <div className="al">
              <span className="index-a">2</span>
              <span className="bold-a">Take photos of your item</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <div className="al">
              <span className="index-a">3</span>
              <span className="bold-a">Press</span>
              <span className="colored-a">Sell</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <div className="al">
              <span className="index-a">4</span>
              <span className="bold-a"
                >Answer the messages and calls from your clients!</span
              >
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
              <RouterLink to="/premium">
                <span className="colored-a normal-a">Premiun Services</span>
              </RouterLink>
            </div>
            <RouterLink className="link-button" to="/post-ad">
              <button>SELL</button>
            </RouterLink>
          </div>
          <div className="section-part">
            <img className="illustration" :src="sale" alt=" how to sell" />
          </div>
        </div>
        <div className="section">
          <div className="section-part">
            <header className="bold">How to buy on Ibommarket</header>
            <a name="how-to-buy"></a>
            <div className="al">
              <span className="index-a">1</span>
              <span className="bold-a">Search for an item</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <div className="al">
              <span className="index-a">2</span>
              <span className="bold-a">Contact seller</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <Link className="link-button" href="/">
              <button>GO SHOPPING</button>
            </Link>
          </div>
          <div className="section-part">
            <img :src= "search" alt=" how to buy" className="illustration"  />
          </div>
        </div>
        <div className="section">
          <div className="section-part">
            <header className="bold">Safety on Ibommarket</header>
            <a name="safety"></a>
            <div className="al">
              <span className="index-a">1</span>
              <span className="bold-a">General</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <div className="al">
              <span className="index-a">2</span>
              <span className="bold-a">Personal safety tips</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
          </div>
          <div className="section-part">
            <img :src="safety" alt="safety" className="illustration" />
          </div>
        </div>
        <div className="section">
          <div className="section-part">
            <header className="bold">Sell like a pro!</header>
            <a name="proselling"></a>
            <div className="al">
              <span className="index-a">1</span>
              <span className="bold-a">General</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <div className="al">
              <span className="index-a">2</span>
              <span className="bold-a">Personal safety tips</span>
              <br />
              <span className="normal-a"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                necessitatibus sequi quae ea dignissimos consequatur earum odit
                praesentium omnis fugit, soluta delectus similique. Expedita,
                consectetur. Ipsa explicabo culpa voluptatem quod voluptates
                incidunt est pariatur eos neque nisi? Illo sit quos vitae amet,
                nemo dignissimos eum facere corporis ipsa dicta tenetur?</span
              >
            </div>
            <RouterLink to="/premium" className="link-button">
              <button>GO PREMIUM</button>
            </RouterLink>
          </div>
          <div className="section-part">
            <img :src="premium"   alt="premium service illustration"   className="illustration"
            />
          </div>
        </div>
        <RouterLink to="/faq" className="link-button">
          <div>Still have questions? Read FAQ</div>
        </RouterLink>
      </div> 
</template>