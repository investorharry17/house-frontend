import { defineStore } from "pinia"

export const Store = defineStore("fake", {
	state: ()=> ({
		one : 1,
		two : 2,
		three : 3,
	}),
	getters: {
		getOne (state) {
			return state.one
		}
	},
	actions : {
		changeOne (value) {
			this.one = value
		}
	}
})