import { defineStore } from "pinia" 
import agent from "@/app/agent.js"
import { ref } from "vue"

export const Store = defineStore ("Admin", ()=> {

		const Admin = ref(null)   
   		const token =  JSON.parse( localStorage.getItem("ibmToken") ); 
		const AdminProfile = ref(null)

		if (token) {
			Admin.value	 = true
			async function fetchAdminBusiness(argument) {
			 const res = await agent.Account.currentUser()
	     	 Admin.value = res
	     	}
	     	fetchAdminBusiness()
		}  
	
		function updateAdmin (newAdmin) {
			Admin.value = newAdmin 
		}
	return {
		Admin,
		updateAdmin
	}

})