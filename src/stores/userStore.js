import { ref } from "vue"
import agent from "@/app/agent.js"
import { defineStore } from "pinia"
import { notification } from 'ant-design-vue'; 
const openNotificationWithIcon = (type, title, description) => {
  notification[type]({
    message: title,
    description:  description
  });
};
// openNotificationWithIcon("success") 
// openNotificationWithIcon("info")
// openNotificationWithIcon("warning")
// openNotificationWithIcon("error") 
 
// const modalOpenedState = ref(false)

export const Store = defineStore ("user", ()=>{
 
		const USER  = ref(null)

   		const token =  JSON.parse( localStorage.getItem("USER") )
		const userBookmarks = ref(null)
		console.log(token)
		if (token) {
			console.log(token)
			USER.value = JSON.parse( localStorage.getItem("USER") )
			console.log(token)
		  	async	function getBookmarks(argument) {
					
				const res = await agent.Bookmarks.get(token._id)
				userBookmarks.value = res
				console.log(res)
			}
			getBookmarks()
		}


		const currentPostDetails  = ref(null) 
		const modalOpenedState  = ref(false) 
		const userLoggedIn  = ref(null) 
		const userSearchString  = ref("") 
		const apiBaseUrl  = "http://localhost:5000/ibommarket/api/v1"
 
		function updateUser (newUser) {
			USER.value = newUser 
		} 
		function updateUserBookmarks (bookmarks) {
			userBookmarks.value = bookmarks
		} 
		function updateCurrentPostDetails (state) {
			currentPostDetails.value = state
		} 
		function updateModalState (state) {
			modalOpenedState.value = state 
		} 
		function updateUserLogginIn (state) {
			userLoggedIn.value = state
		} 
		function openNotificationModal (type, title, description) {
			openNotificationWithIcon(type, title , description) 
		} 
		function updateUserSearchString (value) {
			userSearchString.value = value
		}

		return {
		USER,
		userBookmarks,
		currentPostDetails,
		modalOpenedState,
		userLoggedIn,
		userSearchString,
		apiBaseUrl,
		updateUser,
		updateUserBookmarks,
		updateCurrentPostDetails,
		updateModalState,
		updateUserLogginIn,
		openNotificationModal,
		updateUserSearchString
	}
}) 