import { defineStore } from "pinia" 
import agent from "@/app/agent.js"
import { ref } from "vue"

export const Store = defineStore ("User", ()=> {

		const User = ref(null)   
   		const token =  JSON.parse( localStorage.getItem("justMoved") ); 
		

		if (token) {
			User.value	 = true
			async function fetUser(argument) {
				try {
				 const res = await agent.Account.currentUser()
		     	 User.value = res
				} catch (error) {
					if (error.status == 500) {
						localStorage.removeItem("justMoved")
					}
				}
	     	}
	     	fetUser()
		}   else {
			console.log("no token")
		}
	
		function updateUser (newUser) {
			User.value = newUser 
		}
	return {
		User,
		updateUser
	}

})