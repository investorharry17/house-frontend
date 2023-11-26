<script setup>
  import { Store } from "@/stores/userStore.js"
	import { ref } from "vue"
	import { useRouter } from "vue-router" 
	import ProfilePageNavBar from "../generic-view/ProfilePageNavBar.vue"
	import "../../styles/scoped/my-adverts.css"

  const MainStore = Store()
	const router = useRouter()
	if (!localStorage.USER) {
		router.push("/?from=/performance")
		console.log(MainStore.USER)
	}
      const backFunction = () => {
    router.back() && router.push('/') 
    console.log("router.back()")

  }
  const impression = ref(true) 
  const visitors = ref(true)
  const phoneViews = ref(true)
  const chatRequest = ref(true)
  const openRangeModal = ref(false)
  const range = ref(["Days", "Weeks" , "Months"])
  const rangeIndex = ref(0)


	function changeRangeFunction(index) {
		rangeIndex.value = Number(index)
		openRangeModal.value = !openRangeModal.value
	}
</script>

<template>
	<!-- <MainHeader /> -->
	<div class="left-and-right-positions">
		<ProfilePageNavBar :USER = MainStore.USER />

    <div class="right-profile-section profile">
      <div class="all-profile-mobile-heading">
            <img @click="backFunction" src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png" alt="" />
            <span @click="backFunction"> Performance</span>
      </div>
          <div class="performance-block">
            <div class="controls">
              <ol>
                <li>
                  <div @click="impression = !impression " :class="[impression ? 'true': '', 'control-button impression']">
                    <input  id="impression" :checked="impression" type="checkbox" class="control-input" />
                    <span class="control-span"></span>
                  </div>
                  <label for="impression">Impression</label>
                </li>
                <li>
                  <div @click="visitors = !visitors" :class="[visitors ? 'true': '', 'control-button visitors']">
                    <input  id="visitors" :checked="visitors" type="checkbox" class="control-input" />
                    <span class="control-span"></span>
                  </div>
                  <label for="visitors">Visitors</label>
                </li>
                <li>
                  <div @click="phoneViews = !phoneViews" :class="[phoneViews ? 'true': '', 'control-button phone-views']">
                    <input  id="phoneViews" :checked="phoneViews" type="checkbox" class="control-input" />
                    <span class="control-span"></span>
                  </div>
                  <label for="phoneViews">Phone Views</label>
                </li>
                <li>
                  <div @click="chatRequest = !chatRequest" :class="[chatRequest ? 'true': '', 'control-button chat-requests']" >
                    <input  id="chatRequest" :checked="chatRequest" type="checkbox" class="control-input" />
                    <span class="control-span"></span>
                  </div>
                  <label for="chatRequest">Chat requests</label>
                </li>
              </ol>
            </div>
            <div class="performance-filter">
              <div class="filter-value">Mon 00, 0000 - Mon 00, 0000</div>
              <div class="change-range">
                <span  @click=" openRangeModal = !openRangeModal " >
                    {{ range[rangeIndex] }}
                  <hr />
                    {{ range[rangeIndex] }}
                </span>
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/808080/sort.png"
                  alt="sort"
                   @click=" openRangeModal = !openRangeModal " 
                />
                <div v-if="openRangeModal" class="change-range-modal">
                  <div @click=" changeRangeFunction(0)" :class="rangeIndex === 0 ? 'active' : '' ">
                    Days
                    <hr />
                    Days
                  </div>
                  <div @click=" changeRangeFunction(1)" :class="rangeIndex === 1 ? 'active' : '' ">
                    Weeks
                    <hr />
                    Weeks
                  </div>
                  <div @click=" changeRangeFunction(2)" :class="rangeIndex === 2 ? 'active' : '' ">
                    Months
                    <hr />
                    Months
                  </div>
                </div>
              </div>
            </div>
            <div class="canvas-container">
              <canvas id="myChart"></canvas>
            </div>
            <ul class="performance-count">
              <li>
                <div :class="['count' , impression ? 'true': '']">0</div>
                <span> Impression</span>
              </li>
              <li>
                <div :class="['count' , visitors ? 'true': '']">0</div>
                <span> Visitors</span>
              </li>
              <li>
                <div :class="['count' , phoneViews ? 'true': '']">0</div>
                <span> Phone Views</span>
              </li>
              <li>
                <div :class="['count' , chatRequest ? 'true': '']">0</div>
                <span> Chat request</span>
              </li>
            </ul>
          </div>

        </div>
	</div>

</template>

<style scoped>
  .right-profile-section {
    margin-top: 0
  }
	.left-profile-section {
		display: none;
	}
	@media only screen and (min-width: 1024px) {
		.left-profile-section {
			display: unset;
			margin-top: 0;
		}
	}
</style> 

<style scoped>
	#fake-wrap-container {
  background: #fff;
}
#no-advert-block {
  margin: 0px auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
}
#no-advert-block span {
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  margin-top: 30px;
}

.left-profile-section {
  display: none;
}

.all-profile-mobile-heading {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff; 
  height: 50px;
  box-shadow: 1px 1px 9px rgb(0 0 0 / 25%);
  border-bottom: 1px solid #00000014;
  padding-left: 6.9px;
  position: relative;
}

.all-profile-mobile-heading img {
  height: 30px;
  width: 30px;
  margin-right: 15px;
}

.all-profile-mobile-heading span {
  color: #22c719;
}

.all-profile-mobile-heading span.mark-all-as-read {
  color: #000;
  font-size: 14px;
  left: 70%;
  position: absolute;
}
.header div:nth-of-type(1) img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  padding-right: 10px;
}
.header div:nth-of-type(1) img.to-back {
  width: 40px;
  height: 40px;
  padding: 10px;
}
/* main start */
.performance-block {
  background: #fff;
}
.performance-block ol {
  display: flex;
}
.performance-block ol li {
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  align-items: center;
  user-select: none;
}
.control-button {
  margin: 10px;
  display: flex;
  height: 10px;
  width: 35px;
  border-radius: 10px;
  background: #8080802d;
  position: relative;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

}
.performance-block ol li label {
	cursor: pointer;
}
.control-button input {
  display: none;
}
.control-button span {
  position: absolute;
  height: 15px;
  width: 15px;
  background: gray;
  border-radius: 50%;
  transition: 0.3s;
  left: 0;
}
.control-button.impression.true {
  background: #00000050;
}
.control-button.impression.true span {
  background: #000000;
}
.control-button.visitors.true {
  background: #00b53f50;
}
.control-button.visitors.true span {
  background: #00b53f;
}
.control-button.phone-views.true {
  background: #fea03c50;
}
.control-button.phone-views.true span {
  background: #fea03c;
}
.control-button.chat-requests.true {
  background: #ce002550;
}
.control-button.chat-requests.true span {
  background: #ce0025;
}
.control-button.true span {
  left: 60%;
}
.performance-filter {
  display: flex;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-around;
  margin: 20px 0;
}
.canvas-container {
  padding: 10px 20px;
}
.filter-value {
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid gray;
  width: fit-content;
  color: gray;
}
.change-range {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.change-range:hover {
  background: #80808014;
}
.change-range span {
  display: flex;
  font-weight: bold;
  white-space: normal;
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

}
.change-range img {
  height: 15px;
  width: 15px;
  margin-left: 5px;
}
.change-range span hr {
  width: 1px;
  border: none;
  background: #000;
  margin: 0px 5px;
}
.performance-count {
  display: flex;
  justify-content: space-around;
}
.performance-count li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.performance-count li div {
  padding: 5px;
  border-radius: 5px;
  width: 40px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  background: #80808050;
  margin: 5px 10px;
  transition: 0.3s;
}
.performance-block li:nth-of-type(1) div.count.true {
  background: #000;
}
.performance-block li:nth-of-type(2) div.count.true {
  background: #00b53f;
}
.performance-block li:nth-of-type(3) div.count.true {
  background: #fea03c;
}
.performance-block li:nth-of-type(4) div.count.true {
  background: #ce0025;
}
.change-range-modal {
  flex-direction: column;
  position: absolute;
  background: #fff;
  padding: 15px;
  box-shadow: -1px 6px 10px 0px #0000002e;
  border-radius: 10px;
  top: 40px;
  border: 1px solid #00000012;
  width: fit-content;
  display: flex;
  left: -30px;
}
.change-range-modal div {
  font-size: 14px;
  display: flex;
  cursor: pointer;
  margin: 15px 0;
}
.change-range-modal div.active {
  font-weight: bold;
}
.change-range-modal div hr {
  margin: 0px 10px;
  border: none;
  width: 1px;
  background: #000;
}
@media only screen and (max-width: 400px) {
}

@media only screen and (max-width: 450px) {
  .all-profile-mobile-heading.message {
    width: 100vw;
  }
}

@media only screen and (min-width: 500px) {

  .right-profile-section {
    background-color: #fff;
  }
}
@media only screen and (min-width: 768px) {
  .right-profile-section {
    border-radius: 10px;
  }
  .performance-block {
    padding: 0px 40px;
  }
}
@media only screen and (min-width: 1024px) {
  #fake-wrap-container {
    background: #eef2f4;
  }
  .left-profile-section {
    display: flex;
    width: 520px;
  }

  .left-profile-section {
    width: 544px !important;
    box-shadow: 1px 1px 4px #50727d66;
    flex-direction: column;
    margin-right: 10px;
    height: fit-content;
  }

  .left-profile-section .header {
    height: 165px;
    background: linear-gradient(118.45deg, #00b53f 0.67%, #00831e 100.93%);
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .header div:nth-of-type(1) {
    flex-direction: column;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header div:nth-of-type(1) a {
    display: none;
  }
  .header div:nth-of-type(1) img {
    width: 96px;
    height: 96px;
  }
  .header div.user-name {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 10px 0;
  }
  .left-profile-section .header div .user-name,
  .left-profile-section .header div .phone-number {
    display: unset;
  }

  .header div.phone-number {
    display: flex;
    font-size: 14px;
    opacity: 0.4;
    color: #fff;
    font-weight: 700;
  }
  .header .setting-container a {
    position: absolute;
    top: 10px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    height: 25px;
    transition: 0.3s;
    padding: 0px 10px;
    border-radius: 5px;
  }
  .header .setting-container a:hover {
    background: #80808033;
  }
  .setting-container span {
    font-size: 10px;
    margin-right: 10px;
  }

  .setting-container img {
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
  }

  .main-container {
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 5px;
    height: fit-content;
    padding: 0;
  }

  .main-container ol {
    height: 50px;
    background-color: #fff;
    margin: 2px 0;
    padding: 0;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-radius: 0;
    cursor: pointer;
  }
  .main-container ol img {
    height: 25px;
    width: 25px;
    padding-right: 10px;
  }
  .main-container ol span {
    font-size: 14px;
    transition: 0.3s;
  }
  .main-container ol:hover span,
  .main-container ol span.active {
    color: #3db83a;
  }
  .main-container ol span:nth-of-type(2) {
    display: none;
  }
  .main-container ol span:nth-of-type(2).show {
    color: gray;
    font-size: 10px;
    display: block;
  }

  .main-container ol div {
    display: flex;
    flex-direction: column;
  }
  .right-profile-section { 
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px #50727d66;
  }
  .all-profile-mobile-heading {
    width: 100%;
    display: none;
  }
  .performance-block {
    padding: 0;
  }
}
@media only screen and (min-width: 1200px) {
  .left-profile-section {
    margin-right: 50px;
  }
  .left-profile-section .header {
    height: 212px;
    background: #fff;
  }
  .header div.user-name {
    font-size: 24px;
    color: #000;
    font-weight: 500;
  }
  .header div.phone-number {
    color: #000;
    font-weight: 500;
  }

  .all-profile-mobile-heading {
    border: none;
  }

}

</style>