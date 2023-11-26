<script setup>
	import { Store } from "@/stores/userStore.js"
	import { ref } from "vue"
	import { useRouter } from "vue-router" 
	import axios from "axios"
	import { RouterLink } from "vue-router"
	
	import ProfilePageNavBar from "../generic-view/ProfilePageNavBar.vue" 
	// import "../../styles/scoped/my-adverts.css"
	// import BookmarkCard from "@/views-components/bookmark-page/BookmarkCard.vue"

	const MainStore = Store()
	const router = useRouter()
	const callCount = ref(0)
	const fetchedBookmarks = ref([])
	if (!localStorage.USER) {
		router.push("/?from=/bookmarks")
		console.log(MainStore.USER)
	}

	const backFunction = () => {
		router.back() && router.push('/') 
	}  
	async function getBookmarksPost() {
		try {
				console.log("getting")
				let res = await axios.post("http://localhost:5000/ibommarket/api/v1/bookmark/all/" + MainStore.USER, {
					bookmarksArray : MainStore.userBookmarks.bookmarks
				})
				let data = res.data
				console.log(data)
				fetchedBookmarks.value = data  
		}catch (error) {
			console.log(error)
			callCount.value = callCount.value + 1
			if (callCount.value < 300) {
				getBookmarksPost()
			}
		}
	}
	setTimeout(function() {
		getBookmarksPost()

	}, 10000);
 
	function formartPrice(argument) {
		return argument?.toLocaleString()
	}
	function showContact (cardIndex) {
		fetchedBookmarks.value =  fetchedBookmarks.value.map((bookmark, index) => {
			if (cardIndex == index ) {
				return  { ...bookmark , contactShown : true  }
			} else {
				return bookmark
			}
		})
	}
	async function removeBookmark(cardId) {
		try {
			const res = await axios.put( MainStore.apiBaseUrl + "/bookmark/" + MainStore?.USER._id , {productId : cardId })
			const data = res.data
			MainStore.updateUserBookmarks(data.data)
			console.log(data)
			MainStore.openNotificationModal("info", "Bookmark removed", "Advert with ID " + cardId +  "has been removed from your bookmarks ")
			// fetchedBookmarks.value	= []
			const newBookmarks = []
			fetchedBookmarks.value = fetchedBookmarks.value.forEach(bookmark => {
				if (bookmark._id != cardId  ) {
					console.log(bookmark)
					newBookmarks.push(bookmark)
				}
			})
			console.log(newBookmarks)
			fetchedBookmarks.value = newBookmarks
			console.log(fetchedBookmarks.value)
			
		} catch(error) {
			console.log(error)
		} 
	}
</script>

<template>
	<!-- <MainHeader /> -->
	<div class="left-and-right-positions">
		<ProfilePageNavBar :USER = MainStore.USER />
    <div class="right-profile-section profile">
		<div class="all-profile-mobile-heading">
			<img @click="backFunction" src="https://img.icons8.com/ios-filled/50/3db83a/less-than.png" alt="" />
			<span @click="backFunction">Bookmarks </span>
		</div> 
		<div> 
			<header> Bookmarks</header>
			<div class="bokmark-cards">
				<template v-for="(card, index) in fetchedBookmarks" :key="card?._id">
					<div class="card">
						<RouterLink class="shell" :to="'/product/' + card?._id">
							<div class="top">	
								<div class="image" :style="{ 'background-image' : 'url(' + card?.postImages[0] + ')' }">
									<div class="image-count"> 
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
											<path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
										</svg>
										<span> {{ card?.postImages.length }} </span>
									</div>
								</div>
								<div class="details">
									<div class="title"> {{ formartPrice(card?.title) }} </div>
									<div class="price">₦  {{ formartPrice(card?.price) }} </div>
									<div class="location"> 
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
											<path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
										</svg>
										<span> {{ card?.location }} </span> 
										</div>
								</div>
							</div>
							<div @click.prevent="console.log('clicked')" class="foot">
								<button @click="removeBookmark( card?._id )" class="remove">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
										<path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
									</svg>
								</button>
								<button class="show-contact" v-if="card.contactShown" @click="console.log(index)">
									<a :href="'tel:0' + card.phoneNumber"> 0{{ card.phoneNumber }}  </a>
								</button>
								<button v-else @click="showContact( index )" class="show-contact"> Show contact </button>
							</div>
						</RouterLink>
					</div>
				</template>
			</div>
		</div>
    </div>
	</div>

</template> 

<style scoped>
	.left-profile-section {
		display: none;
		color: red;
	}
	.right-profile-section {
		margin-top: 0;
		background: unset;
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

	.right-profile-section {
		background: unset !important; 
	}
	.card {
		height: 180px;
		margin: 10px auto; 
		box-shadow: 0 1px 2px #607d8726;
		width: 97%;
		background: #fff;
		padding: 5px;
		border-radius: 5px
	}
	.card a.shell {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.card a.shell .top {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.card a.shell .top .image {
		height: 130px;
		border-radius: 5px;
		width: 45%;
		-o-object-fit: cover;
		object-fit: cover;
		position: relative;
		text-align: center;
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: cover;
		box-shadow: 0px 0px 2px 1px #0000004d;
		margin-right: 20px;
	}
	.card a.shell .top .image .image-count {
		position: absolute;
		bottom: 2px;
		left: 3px;
		padding: 1px 5px;
		background: #0000002b;
		border-radius: 5px;
		align-items: center;
		display: flex;
	}
	.card a.shell .top .image span {
		color: #fff;
		font-size: 11px;
	}
	.card a.shell .top .details {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 55%;
	}
	.card a.shell .top .details .title {
		font-size: 16px;
		font-weight: bold;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card a.shell .top .details .price {
		font-size: 15px;
		font-weight: bold;
		color: #4ea54c;
	}
	.card a.shell .top .details .location {
		display: flex;
		align-items: center;
	}
	.card a.shell .top .details .location svg {
		height: 15px;
		color: gray;
		margin-right: 10px;
	}
	.card a.shell .top .details .location span {
		font-size: 12px;
		color: gray;
	}
	.card a.shell .top .image svg {
		color: #fff;
		height: 12px;
		width: 12px;
		margin-right: 5px;
	}
	.card a.shell .foot {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.card a.shell .foot button {
		background: unset;
		padding: 3px 15px;
		margin: 0px 8px;
		border: 1px solid red;
		border-radius: 5px;
		color: red;
		cursor: pointer;
	}
	.card a.shell .foot button.show-contact {
		background:  #4ea54c;
		border:  1px solid;
		color: #fff;
	}
	.card a.shell .foot button.show-contact a {
		color: inherit;
	}
	.card a.shell .foot button svg {
		height: 18px;
	}
</style> 