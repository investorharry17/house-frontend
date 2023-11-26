
import { defineStore } from "pinia"

import { notification } from 'ant-design-vue';
const openNotificationWithIcon = (type, title, description) => {
  notification[type]({
    message: title,
    description:  description,
    placement : "bottomRight" 
  });
};
// openNotificationWithIcon("success")
// openNotificationWithIcon("info")
// openNotificationWithIcon("warning")
// openNotificationWithIcon("error") 
 
import { ref } from "vue"

export const Modal_States = defineStore ("modals", ()=> {
 
		const loginModalOpened = ref(false)
		const newUserSetupBusiness = ref(false)
		const urgentRequestModalState = ref(false)
	 
	
		function updateLoginModalState (value) {
			loginModalOpened.value = value 
		} 
		function updateNewUserSetupBusiness (value) {
			newUserSetupBusiness.value = value 
		} 

		function notifyUser(type, title, description) {
			openNotificationWithIcon(type, title, description)
		}
		function updateUrgentRequestModalState (value) {
			urgentRequestModalState.value = value
		}
	return {
		loginModalOpened,  
		updateLoginModalState,
		newUserSetupBusiness,
		updateNewUserSetupBusiness,
		notifyUser,
		urgentRequestModalState,
		updateUrgentRequestModalState
	}

}) 
 

 