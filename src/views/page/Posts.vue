<script setup>
    import { ref } from "vue";
    import agent  from "@/app/agent.js";
	import { useQuery } from "@tanstack/vue-query" 

    const fetchData = async () => {   
        try {
            const res = await  agent.Properties.get()
        	console.log(res)
        	return res
        } catch (err) {
            console.log(err)
        }


	}
  
	const { isLoading, data, error, isError } = useQuery({
		queryKey: ["Posts"],
		queryFn: () => fetchData(),  
		keepPreviousData: true 
	}) 
    function formartPrice (price) {
        return price.toLocaleString()
    }
    const detailModalOpened = ref(false)  
    const showModal = () => {
      open.value = true;
    };
    const handleOk = e => {
      console.log(e);
      open.value = false;
    }; 
    const detailsIndex = ref(null)
    function openDetailsModal(argument, index) {

        detailsIndex.value = index
        detailModalOpened.value = true
        console.log(argument)
    }

</script>

<template>
    <section class="content-main">
       
        <div class="content-header">
            <div>
                <h2 class="content-title card-title">Order List</h2>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <div class="card mb-4">
                    <header class="card-header">
                        <div class="row gx-3">
                            <div class="col-lg-4 col-md-6 me-auto">
                                <input type="text" placeholder="Search..." class="form-control" />
                            </div>
                            <div class="col-lg-2 col-md-3 col-6">
                                <select class="form-select">
                                    <option>Status</option>
                                    <option>Active</option>
                                    <option>Disabled</option>
                                    <option>Show all</option>
                                </select>
                            </div>
                            <div class="col-lg-2 col-md-3 col-6">
                                <select class="form-select">
                                    <option>Show 20</option>
                                    <option>Show 30</option>
                                    <option>Show 40</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <!-- card-header end// -->
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Post ID</th>
                                        <th>Business ID</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(post , index) in data">
                                        <td>{{ post.Id }}</td>
                                        <td><b> {{ post.BusinessId }} </b></td>
                                        <td> ₦ {{ formartPrice(post.Price)  }} </td>
                                        <td><span class="badge rounded-pill alert-success">Active</span></td>
                                        <td>07.05.2020</td>
                                        <td class="text-end">
                                            <div @click="openDetailsModal( post.Id, index )" class="btn btn-md rounded font-sm">Detail</div>
                                            <div class="dropdown">
                                                <a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">View detail</a>
                                                    <a class="dropdown-item" href="#">Edit info</a>
                                                    <a class="dropdown-item text-danger" href="#">Delete</a>
                                                </div>
                                            </div>
                                            <!-- dropdown //end -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- table-responsive //end -->
                    </div>
                    <!-- card-body end// -->
                </div>
                <!-- card end// -->
            </div>
            <div class="col-md-3">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="mb-3">Filter by</h5>
                        <form>
                            <div class="mb-4">
                                <label for="order_id" class="form-label">Order ID</label>
                                <input type="text" placeholder="Type here" class="form-control" id="order_id" />
                            </div>
                            <div class="mb-4">
                                <label for="order_customer" class="form-label">Customer</label>
                                <input type="text" placeholder="Type here" class="form-control" id="order_customer" />
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Order Status</label>
                                <select class="form-select">
                                    <option>Published</option>
                                    <option>Draft</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="order_total" class="form-label">Total</label>
                                <input type="text" placeholder="Type here" class="form-control" id="order_total" />
                            </div>
                            <div class="mb-4">
                                <label for="order_created_date" class="form-label">Date Added</label>
                                <input type="text" placeholder="Type here" class="form-control" id="order_created_date" />
                            </div>
                            <div class="mb-4">
                                <label for="order_modified_date" class="form-label">Date Modified</label>
                                <input type="text" placeholder="Type here" class="form-control" id="order_modified_date" />
                            </div>
                            <div class="mb-4">
                                <label for="order_customer_1" class="form-label">Customer</label>
                                <input type="text" placeholder="Type here" class="form-control" id="order_customer_1" />
                            </div>
                        </form>
                    </div>
                </div>
                <!-- card end// -->
            </div>
        </div>
        <div class="pagination-area mt-15 mb-50">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                    <li class="page-item active"><a class="page-link" href="#">01</a></li>
                    <li class="page-item"><a class="page-link" href="#">02</a></li>
                    <li class="page-item"><a class="page-link" href="#">03</a></li>
                    <li class="page-item"><a class="page-link dot" href="#">...</a></li>
                    <li class="page-item"><a class="page-link" href="#">16</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#"><i class="material-icons md-chevron_right"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>

    <a-modal :footer="null" v-model:open="detailModalOpened" width="1000px" wrap-class-name="full-modal" title="Post details"> 
        <section class="content-main">
           
            <div class="content-header">
                <div>
                    <h2 class="content-title card-title"> {{ data[detailsIndex].Title }} </h2>
                    <p>token : {{ data[detailsIndex].Token }}</p>  
                    <h5 class="content-title card-title"> Category : {{ data[detailsIndex].CategoryId }} </h5>
                    <h5 class="content-title card-title"> sub Catrgory : {{ data[detailsIndex].SubcategoryId }} </h5> 
                    <h5 class="content-title card-title"> Price : ₦ {{ formartPrice(data[detailsIndex].Price)  }} </h5> 


                </div>
            </div>
            <div class="row">
                <div class="card-body">
                    <div class="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5"> 
                        <template v-if="!isError && !isLoading ">
                            <!-- <template  v-for="category in data"> -->
                                 
                            <div v-for="image in data[detailsIndex].PropertyPhotos" :key="image.Id" class="col">
                                <div class="card card-product-grid"> 
                                    <div class="img-wrap"> 
                                        <img :src="image.Url" alt="Product" /> 
                                    </div> 
                                </div>
                            <!-- card-product  end// -->
                            </div> 
                            <!-- </template> -->

                        </template>

                    </div>
                    <!-- row.// -->
                </div>
            </div>
            <h5 class="content-title card-title"> Location : {{ data[detailsIndex].Location }} </h5> 
            <h5 class="content-title card-title"> Address : {{ data[detailsIndex].PropertyAddress }} </h5> 
            <h5 class="content-title card-title"> Description : {{ data[detailsIndex].Description }} </h5> 

        </section>
    </a-modal>

    </template>
    <style lang="less">
    .full-modal {
    .ant-modal { 
    top: 30px; 
    }
    .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: 90vh; 
    overflow-y: scroll;
  }
  .ant-modal-body {
    flex: 1;
  }
}
 .img-wrap img {
    display: none;
 } 
</style>
<style scoped>
    .card-product-grid {
        max-height: 150px;
        min-height: 150px;
        /*display: none;*/
    }
    /* .img-wrap img {
        max-height: 200px; 
    }*/
</style>