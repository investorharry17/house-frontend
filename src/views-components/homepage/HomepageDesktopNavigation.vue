<script setup>
	// category images
	import cat_image_1 from "../../images/homepage-category/fashion.png"
	import cat_image_3 from "../../images/homepage-category/real-estate.png"
	import cat_image_4 from "../../images/homepage-category/services.png"
	import cat_image_5 from "../../images/homepage-category/vehicles.png"

	
</script>
<template> 
	<div className ="desktop-navigation">
		<div>
			<label>
				<img className ="main" :src="cat_image_3" alt="property" />
				<span>Property</span>
				<img  className ="point" src="https://img.icons8.com/ios-filled/50/a6b8bd/more-than.png" alt="property" />
			</label>
			<div>
				<span className ="to-filter-page">House & Apartment for Rent</span>
				<span className ="to-filter-page">House & Apartment for Sale</span>
				<span className ="to-filter-page">Land & Plots for Rent</span>
				<span className ="to-filter-page">Land & Plots for Sale</span>
				<span className ="to-filter-page">Commercial Property for Rent</span>
				<span className ="to-filter-page">Commercial Property for Sale</span>
				<span className ="to-filter-page">Event Centres, Venues & Workstations</span>
				<span className ="to-filter-page">Short Let Property</span>
			</div>
		</div>
		<div>
			<label>
			<img className = "main" :src="cat_image_5" alt="vehicles" />
			<span>Vehicles</span>
			<img   className ="point"  src="https://img.icons8.com/ios-filled/50/a6b8bd/more-than.png"  alt="vehicle"  />
			</label>
			<div> 
				<span className ="to-filter-page">Cars</span>
				<span className ="to-filter-page">Buses & Microbuses</span>
				<span className ="to-filter-page">Heavy Equipments</span>
				<span className ="to-filter-page">Motorcycles & Scooters</span>
				<span className ="to-filter-page">Trucks & Trailers</span>
				<span className ="to-filter-page">Vehicle Parts & Accessories</span>
				<span className ="to-filter-page">Watercraft & Boats</span>
			</div>
		</div>
		<div>
			<label>
				<img className ="main" :src="cat_image_1" alt="fashion" />
				<span>Fashion</span>
				<img
				className ="point"   src="https://img.icons8.com/ios-filled/50/a6b8bd/more-than.png"   alt="fashion"  />
			</label>
			<div>
				<span className ="to-filter-page">Bag></span>
				<span className ="to-filter-page">Clothing </span>
				<span className ="to-filter-page">Clothing Accessories</span>
				<span className ="to-filter-page">Jewelry</span>
				<span className ="to-filter-page">Shoe</span>
				<span className ="to-filter-page">Watches</span>
				<span className ="to-filter-page">Wedding Wears & Accessories</span>
			</div>
		</div>
		<div>
			<label>
				<img className ="main" :src="cat_image_4" alt="fashion" />
				<span>Skills</span>
				<img
				className ="point"
				src="https://img.icons8.com/ios-filled/50/a6b8bd/more-than.png"
				alt="skill"
				/>
			</label>
			<div>
				<span className ="to-filter-page">Barbing</span>
				<span className ="to-filter-page">Shoe Making</span>
				<span className ="to-filter-page">Hair Styling</span>
				<span className ="to-filter-page">Plumbing</span>
				<span className ="to-filter-page">Cleaning</span>
				<span className ="to-filter-page">Sewing</span>
				<span className ="to-filter-page">Others</span>
			</div>
		</div>
		<div>
			<label>
				<img   className ="main"   :src="cat_image_5" alt="fashion"  />
				<span>Mechanic Village</span>
				<img   className ="point"  src="https://img.icons8.com/ios-filled/50/a6b8bd/more-than.png"   alt="mechanic village"	   />
			</label>
			<div>
				<span className ="to-filter-page">Repair</span>
				<span className ="to-filter-page">Sale </span>
				<span className ="to-filter-page">Consultation</span>
				<span className ="to-filter-page">Vulcanizing</span>
				<span className ="to-filter-page">Car Electrician</span>
				<span className ="to-filter-page">Panel Beaters</span>
				<span className ="to-filter-page">Welders</span>
				<span className ="to-filter-page">Vehicles Spare Parts</span>
				<span className ="to-filter-page">Others</span>
			</div>
		</div>
	</div> 
</template>