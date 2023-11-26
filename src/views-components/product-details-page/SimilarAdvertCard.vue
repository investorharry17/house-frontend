<script setup>
	import { RouterLink } from "vue-router"
</script>

<template>

	<ol>
		<RouterLink to="/product/1234567">
			<div className="s-a-image"> 
				<img src="" alt="" />
			</div>
			<span>₦ Price</span>
			<span> Name of product</span>
			<span>
				Short Description of Product Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Dolore, odio.
			</span>
			<div className="location">
				<img src="https://img.icons8.com/ios-filled/50/a6b8bd/visit.png" alt=""/>
				<span> State , Local Government</span>
			</div>
			<div className="condition"><span>Used</span></div>
		</RouterLink>
	</ol>   
</template> 