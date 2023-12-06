<template>
	<div class="epage-not-found"> 

		<span class="b" >Oops! Page not found</span>
		<span class="n">It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track.</span>
		<RouterLink to="/"> <span>Back to main</span> </RouterLink>
	 </div>
</template>

<style scoped>
	div {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	div span.b {
		font-size: 25px;
		font-weight: bold;
	}
	div span.n { 
		max-width: 350px;
		display: block;
		text-align: center;
		margin: 20px 0;
		line-height: 20px;
	}
</style>