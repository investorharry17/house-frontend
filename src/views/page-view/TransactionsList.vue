<script setup>
  import { defineProps } from "vue"
  import { RouterLink } from "vue-router"
  import "@/styles/scoped/my-adverts.css"
	import "@/styles/scoped/profile.css"

  const prop = defineProps(["USER"])



</script>

<template>
	<!-- <MainHeader /> -->
      <div class="tab-and-desktop transaction">
        <div class="navigate-back">
          <img
            src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"
            alt=""
          />
        </div>
        <div class="tad-one order-list">
          <div class="header">
            <div>
              <RouterLink to="/">
                <img
                  class="back-to-main"
                  src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"
              /></RouterLink>
              <div class="profile-picture">
                <img v-if="prop.USER?.profileImage" :src="prop.USER?.profileImage" alt="" />
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" loggedin w-6 h-6">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="user-name"> {{ prop.USER?.firstName + " " + prop.USER?.lastName }} </div>
              <div class="phone-number"> {{ "0" + prop.USER?.phoneNumber }} </div>
            </div>
            <RouterLink to="/setting">
              <div class="setting-container">
                <span>SETTINGS</span>
                <img
                  src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/303a4b/external-social-social-media-basic-others-anggara-putra-35.png"
                />
              </div>
            </RouterLink>
          </div>
          <div class="main-container">
            <RouterLink to="/my-adverts">
              <ol>
                <img src="https://img.icons8.com/material/24/303a4b/my-topic--v2.png" />
                <span :class="$route.path === '/my-adverts' ? 'active' : ''"  >My adverts</span>
              </ol>
            </RouterLink>
            <RouterLink to="/performance">
              <ol>
                <img src="https://img.icons8.com/material/24/303a4b/my-topic--v2.png" />
                <span :class="$route.path === '/performance' ? 'active' : ''" >Performance</span>
              </ol>
            </RouterLink>
            <RouterLink to="/followers">
              <ol>
                <img src="https://img.icons8.com/material/24/303a4b/my-topic--v2.png" />
                <span :class="$route.path === '/followers' ? 'active' : ''" >Followers</span>
              </ol>
            </RouterLink>
            <RouterLink to="/feedback">
              <ol>
                <img src="https://img.icons8.com/ios-filled/50/303a4b/question-group.png" />
                <span :class="$route.path === '/feedback' ? 'active' : ''" >Feedbacks</span>
              </ol>
            </RouterLink>
            <RouterLink to="/transactions">
              <ol>
                <img src="https://img.icons8.com/ios-filled/50/303a4b/question-group.png" />
                <span>Transaction lists</span>
              </ol>
            </RouterLink>
            <RouterLink to="/orders">
              <ol>
                <img src="https://img.icons8.com/ios-filled/50/303a4b/question-group.png" />
                <span :class="$route.path === '/orders' ? 'active' : ''" >Order lists</span>
              </ol>
            </RouterLink>
            <RouterLink to="/faq">
              <ol>
                <img src="https://img.icons8.com/material/24/303a4b/help--v2.png" />
                <span :class="$route.path === '/faq' ? 'active' : ''" >Frequently asked questions</span>
              </ol>
            </RouterLink>

            <ol :class="requestedCall? 'm-c' : ''" id="open-manager-call-modal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>

              <div @click="openManagerCallModal">
                <span v-if="!requestedCall" >Manager call</span>
                <span v-else class="m-c">REQUEST SENT</span>
              </div>
            </ol>
          </div>
        </div>
        <div class="transaction-details tad-two order-list">
          <div class="transaction-details-conatiner order-list">
            <header>
              <span>Order list </span>
              <span> Lorem ipsum dolor sit amet. </span>
            </header>
            <div class="hero order-list transaction-page one">
              <div class="search-filter-select trl">
                <input
                  placeholder="Search Reference"
                  type="text"
                  class="search-order-list"
                />
                <div class="filter-selects">
                  <select name="" id="">
                    <option value="">All Accounts</option>
                    <option value="">Option</option>
                    <option value="">Option</option>
                    <option value="">Option</option>
                  </select>
                  <button name="" id="">Filter By Status</button>
                </div>
              </div>

              <table class="order-list">
                <tr>
                  <td>Amount</td>
                  <td>Customer</td>
                  <td>Reference</td>
                  <td>Chanel</td>
                  <td>Paid On</td>
                </tr>
                <tr>
                  <td>000</td>
                  <td>amehharrison202@gmail.com</td>
                  <td>Dxu00eecwef8hSn</td>
                  <td>Card</td>
                  <td>Monday, March 6 , 2022, 7:14 PM</td>
                </tr>
                <tr>
                  <td>000</td>
                  <td>amehharrison202@gmail.com</td>
                  <td>Dxu00eecwef8hSn</td>
                  <td>Card</td>
                  <td>Monday, March 6 , 2022, 7:14 PM</td>
                </tr>
                <tr>
                  <td>000</td>
                  <td>amehharrison202@gmail.com</td>
                  <td>Dxu00eecwef8hSn</td>
                  <td>Card</td>
                  <td>Monday, March 6 , 2022, 7:14 PM</td>
                </tr>
                <tr>
                  <td>000</td>
                  <td>amehharrison202@gmail.com</td>
                  <td>Dxu00eecwef8hSn</td>
                  <td>Card</td>
                  <td>Monday, March 6 , 2022, 7:14 PM</td>
                </tr>
                <tr>
                  <td>000</td>
                  <td>amehharrison202@gmail.com</td>
                  <td>Dxu00eecwef8hSn</td>
                  <td>Card</td>
                  <td>Monday, March 6 , 2022, 7:14 PM</td>
                </tr>
              </table>
              <ol class="pagination">
                <li class="active">01</li>
                <li>00</li>
                <li>00</li>
                <li>---</li>
                <li>
                  <img
                    src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png"
                    alt=""
                  />
                </li>
              </ol>
            </div>
            <div class="hero order-list transaction-page two">
              <ol class="filters transaction-list">
                <li>
                  <label for="filter-by">Filter by</label>
                  <label for="" class="close-trl-filter">X</label>
                </li>
                <li>
                  <span>Status</span>
                  <select name="" id="">
                    <option value="">Successful</option>
                    <option value="">Successful</option>
                    <option value="">Successful</option>
                    <option value="">Successful</option>
                  </select>
                </li>
                <li>
                  <span>Channel</span>
                  <select name="" id="">
                    <option value="">Show All</option>
                    <option value="">Show All</option>
                    <option value="">Show All</option>
                    <option value="">Show All</option>
                  </select>
                </li>
                <li>
                  <span>Amount</span>
                  <input
                    placeholder="Transaction Amount"
                    type="text"
                    name=""
                    id=""
                  />
                </li>
                <li>
                  <span>Date Period</span>
                  <select>
                    <option>All Time</option>
                    <option>Option</option>
                    <option>Option</option>
                  </select>
                </li>
                <li>
                  <span>Customer ID/Email</span>
                  <input
                    placeholder="Customer ID or Email"
                    type="text"
                    name=""
                    id=""
                  />
                </li>
                <li>
                  <span>Payment Page</span>
                  <input
                    placeholder="Payment Page ID"
                    type="text"
                    name=""
                    id=""
                  />
                </li>
                <li>
                  <span>Terminal ID</span>
                  <input placeholder="Terminal ID" type="text" name="" id="" />
                </li>
                <li class="check">
                  <input type="checkbox" name="" id="" />
                  <span>Save as default filter</span>
                </li>
                <div>
                  <button>Reset</button>
                  <button>Filter</button>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>

</template>


<style scoped>
  #fake-wrap-container {
  overflow: unset;
}
div.top_header {
  display: none;
}

.tab-and-desktop {
  margin-top: 40px;
  display: flex;
  margin: 40px auto;
}

.header {
  width: 100%;
  display: flex;
  background-color: #3db83a;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  color: #383737;
  transition: all 0.3s;
}

.header div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.header div:nth-of-type(1) {
  margin-left: 5px;
}
.header div.phone-number {
  display: none;
}
.main-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 105%;
  justify-content: space-between;
  margin-top: 5px;
  height: fit-content;
}

.main-container ol {
  height: 50px;
  background-color: #fff;
  margin: 2px 0;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
  cursor: pointer;
}

.main-container ol img {
  width: 20px;
  margin-right: 10px;
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

.main-container ol.diff {
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  height: fit-content;
  background: transparent;
  width: 100%;
}

.main-container ol.differ {
  width: 100%;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.pagination li {
  height: 25px;
  width: 25px;
  border: 1px solid #d2dde3;
  margin: 0px 3px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: #8080802a;
  cursor: pointer;
}
.pagination li.active {
  background: #3db83a;
  color: #fff;
}
.pagination li img {
  height: 20px;
  width: 20px;
  transform: rotate(180deg);
}
.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.transaction-details-conatiner header {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.transaction-details-conatiner header span:nth-of-type(1) {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}
.transaction-details-conatiner header span:nth-of-type(2) {
  color: gray;
}
.transaction-details.tad-two.order-list {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgb(80 114 125 / 40%);
  position: relative;
  width: 80vw;
  margin: 0;
  padding: 20px;
}
ol.filters li button {
  height: 30px;
  background: #3db83a;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.hero.order-list {
  background: #fff;
  margin: 10px 0 50px;
}
@media only screen and (max-width: 430px) {
  .header {
    background-color: #fff;
    width: 109%;
  }
}
@media only screen and (min-width: 750px) {
  .main-container {
    flex-direction: column;
    width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  .tab-and-desktop.transaction {
    margin: 10px auto;
  }
  .header {
    height: 165px;
    background: linear-gradient(118.45deg, #00b53f 0.67%, #00831e 100.93%);
    position: relative;
    align-items: center;
    justify-content: center;
  }
  .header.transaction {
    height: 145px;
  }

  .header div:nth-of-type(1) {
    flex-direction: column;
  }

  .header .setting-container {
    position: absolute;
    top: 2px;
    right: 5px;
    flex-direction: row !important;
  }
  .header .setting-container span {
    font-size: 10px;
  }
  .header .setting-container img {
    height: 20px;
  }

  .header div.user-name {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 10px 0;
  }

  .header div.phone-number {
    display: flex;
    font-size: 14px;
    opacity: 0.4;
    color: #fff;
    font-weight: 700;
  }
  .main-container {
    flex-direction: column;
    overflow: hidden;
  }
  .profile-picture img {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
}
@media only screen and (min-width: 1200px) {
  .header {
    background: #fff;
    height: 212px;
    width: 100%;
  }
  .header.transaction {
    height: 170px;
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
  .pagination {
    position: absolute;
    left: 20px;
  }
  .profile-picture img {
    width: 100px;
    height: 100px;
  }
}
.hero.order-list {
  background: #fff;
  background: #fff;
  margin: 10px 0 50px;
}
.search-order-list {
  width: 90%;
  height: 50px;
  border-radius: 5px;
  margin: 10px 15px;
  background: #eef2f4;
  border: none;
  outline: none;
  color: gray;
  text-indent: 20px;
  font-size: 15px;
}
.search-order-list:focus {
  background: transparent;
  border: 2px solid #eef2f4;
  height: 46px;
}
.filter-selects {
  padding: 10px 15px;
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.filter-selects select {
  width: 45%;
  height: 50px;
  background: #eef2f4;
  border: none;
  outline: none;
  border-radius: 5px;
  text-indent: 20px;
  color: gray;
}
.filter-selects button {
  width: 45%;
  height: 50px;
  background: #fff;
  border: 1px solid #eef2f4;
  outline: none;
  border-radius: 5px;
  color: #3db83a;
  font-weight: bolder;
}
.filter-selects select:focus {
  background: transparent;
  height: 46px;
  border: 1px solid #eef2f4;
}

table.order-list {
  padding: 10px 15px;
  width: 100%;
}
table.hero.order-list tbody {
  display: flex;
  flex-direction: column;
  align-items: center;
}
table.order-list tr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  outline: none;
  padding: 20px 0;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #80808045;
}
table.order-list tr:nth-of-type(1) {
  display: none;
}
table.order-list tr td {
  padding: 10px 0;
  display: flex;
  font-size: 15px;
  align-items: center;
  position: relative;
}
table.order-list tr td:nth-of-type(4) {
  background: #3db83a6e;
  padding: 3px 15px;
  border-radius: 7px;
  color: #2ab127;
}
table.order-list tr td button {
  padding: 5px 10px;
  margin: 3px;
  border-radius: 4px;
  border: none;
  outline: none;
}
table.order-list tr td button:nth-of-type(1) {
  padding: 8px 10px;
  margin: 3px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: #3db83a;
  color: #fff;
}
table.order-list tr td button:nth-of-type(2) {
  padding: 2px 15px;
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  background: #d2dde3;
  transition: 0.5s;
  cursor: pointer;
}
table.order-list tr td button:nth-of-type(2).active {
  background: #3db83aa8;
}
table.order-list tr td div {
  display: none;
  position: absolute;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  flex-direction: column;
  width: 170px;
  box-shadow: 0px 0px 10px #808080b0;
  right: -5px;
  top: 50px;
  transition: 0.5s;
  opacity: 0;
  z-index: 2;
}
table.order-list tr td div.show {
  display: flex;
  opacity: 1;
}

table.order-list tr td div span {
  padding: 7px;
  font-size: 14px;
  cursor: pointer;
  margin: 1px 0;
  transition: 0.3s;
}
table.order-list tr td div span:hover {
  background: #eef2f4;
}
table.order-list tr td div span:nth-of-type(3) {
  color: #ff0000;
}
ol.filters {
  padding: 10px 15px;
}
ol.filters li {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
ol.filters li label {
  font-size: 15px;
  font-weight: bold;
}
ol.filters li span {
  font-size: 14px;
}
ol.filters li input,
ol.filters li select {
  height: 50px;
  border: none;
  background: #eef2f4;
  text-indent: 20px;
  border-radius: 5px;
  margin: 5px 0;
  outline: none;
}
ol.filters li input[type="date"] {
  padding-right: 10px;
  text-indent: 10px;
}
ol.filters li select {
  padding-right: 10px;
}
ol.filters li input:focus,
ol.filters li select:focus {
  height: 46px;
  background: transparent;
  border: 2px solid #eef2f4;
}
@media only screen and (min-width: 650px) {
  .transaction-details-conatiner.order-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .transaction-details-conatiner header {
    grid-column: span 2;
  }
  .hero.order-list {
    width: 37vw !important;
    margin: 10px;
    box-shadow: 1px 1px 4px rgb(80 114 125 / 40%);
  }
}

@media only screen and (min-width: 1024px) {
  .tad-one.order-list {
    width: 250px;
    height: fit-content;
    box-shadow: 1px 1px 4px rgb(80 114 125 / 40%);
    display: block;
    position: sticky;
    top: 70px;
  }
  .transaction-details-conatiner header {
    padding: 15px;
  }
  .transaction-details-conatiner.order-list {
    width: 590px;
  }
  .search-filter-select {
    display: flex;
  }
  .hero.order-list {
    box-shadow: 0px 0px 10px #80808061;
    width: 335px !important;
  }
  .hero.order-list:nth-of-type(2) {
    width: 190px !important;
  }
  .search-order-list {
    margin: 10px;
    font-size: 13px;
    height: 30px;
    width: 80%;
  }
  .search-order-list:focus {
    height: unset;
  }
  .filter-selects select,
  .filter-selects button {
    height: 30px;
    text-indent: 0;
    width: 47%;
  }
  .filter-selects select:focus,
  .filter-selects button:focus {
    height: unset;
  }
  .transaction-details.tad-two.order-list {
    width: fit-content;
    margin-left: 30px;
  }
}

@media only screen and (min-width: 1200px) {
  .transaction-details-conatiner.order-list {
    width: 900px;
    padding-bottom: 30px;
  }
  .hero.order-list {
    width: 670px !important;
    margin: 5px;
  }
  table.order-list {
    padding: 10px 3px;
  }
  table.order-list tr {
    flex-direction: row;
    justify-content: flex-start;
    padding: 1px 10px;
    width: 98%;
    margin: 8px 0;
  }
  table.order-list tr td {
    font-size: 12px;
    width: 100%;
  }
  table.order-list tr:nth-of-type(1) {
    display: flex;
    background: #eef2f4;
    box-shadow: none;
  }
  table.order-list tr:nth-of-type(1) td:nth-of-type(4) {
    color: unset;
    background: unset;
    padding: 10px 0;
  }
  table.order-list tr td:nth-of-type(4) {
    background: transparent;
    padding: 0;
  }
  table.order-list tr td:nth-of-type(4) span {
    padding: 1px 10px;
    background: #3db83a6e;
    border-radius: 5px;
  }
  table.order-list tr td button:nth-of-type(1) {
    padding: 4px;
  }
  table.order-list tr td button:nth-of-type(2) {
    font-size: 14px;
  }
}

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
      .tad-one {
        display: none;
      }
      .navigate-back {
        height: 30px;
        width: 30px;
        position: absolute;
        top: 3px;
        left: 10px;
      }
      .navigate-back img {
        height: 100%;
        width: 100%;
      }
      .date-eds {
        flex-direction: column;
        align-items: baseline;
      }
      @media only screen and (max-width: 430px) {
        div.top_header {
          display: none;
        }

        .header {
          width: 105%;
        }

        .footer-f-m {
          width: 104%;
        }
      }

      @media only screen and (min-width: 1024px) {
        div.top_header {
          display: flex;
          width: 100%;
        }
        .tad-one {
          display: block;
        }
        .navigate-back {
          display: none;
        }
        .date-eds {
          flex-direction: row;
          align-items: center;
        }
      }
</style>