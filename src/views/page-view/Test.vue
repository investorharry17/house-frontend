<script setup>
	import agent  from "@/app/agent.js"
	console.log(agent.Cards)
	async function fetchCards() {
		try {
		const res =  await agent.Cards.getCards()
		console.log(res)
		} catch (err) {
			console.log(err)
		}
		// body...
	}
	fetchCards()
</script>

<template>
	<div>HI</div>
</template>
