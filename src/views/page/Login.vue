<script setup>
	import { ref, reactive } from "vue"
	import useVuelidate from "@vuelidate/core"
	import { required,   email, helpers } from "@vuelidate/validators"
	import agent from "@/app/agent.js"
 	import { message as antMessage } from 'ant-design-vue';
    import { useRouter } from "vue-router"
    import { Store } from "@/store/userStore.js"


    const router = useRouter()
    const AdminStore = Store()

    if (localStorage.getItem("justMoved")) {
        router.push("/")
    }
	const passwordRules = helpers.regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)

	const data = reactive({
		email: "",
		password: ""
	})
	const rules = {
		email: { required: helpers.withMessage('Email field cannot be empty', required), email : helpers.withMessage("Please enter a valid email", email) },
		password: { required: helpers.withMessage('Password field cannot be empty', required ) , passwordRules : helpers.withMessage('Password must have at least 8 characters , one upper-case, lowercase, one number and a special character', passwordRules) 
	}
				}
	const v$ = useVuelidate(rules, data)
	const makingRequest = ref(false)

	async function submitForm () {
		const result = await v$.value.$validate()

		if (!result) {
			return
		}  else {
			makingRequest.value = true
			try {
                console.log(data)
				const res = await agent.Account.login(data) 
				makingRequest.value = false
				antMessage.success('Login successful!');
                localStorage.setItem("justMoved", JSON.stringify(res.token))
                router.push("/")
                console.log(res)
                const res2 = await agent.Account.currentUser()
                console.log(res2)

			} catch (err) {
				makingRequest.value = false
				// if () {}
				console.log(err)
				antMessage.error( err.response.data.message );
			}
		}

	}
</script>
<template>
        <main>
            <header class="main-header style-2 navbar">
                <div class="col-brand">
                    <RouterLink  to="/" class="brand-wrap">
                        <img src="@/assets/imgs/theme/logo.svg" class="logo" alt="Nest Dashboard" />
                    </RouterLink >
                </div>
                <div class="col-nav">
                    <ul class="nav">
                        <li class="nav-item"> 
                        </li>
                       <li class="nav-item">
                            <RouterLink to="/register" class="requestfullscreen nav-link btn-icon"> 
                            	<button class="btn btn-primary w-100"> Register</button>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </header>
            <section class="content-main mt-80 mb-80">
                <div class="card mx-auto card-login">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Sign in</h4>
                        <form @submit.prevent="submitForm">
                            <div class="mb-3">
                                <input v-model="data.email" :class = "{ error : v$.email.$errors[0] }" class="form-control" placeholder="Email" type="text" />
                                <span  v-for="error in v$.email.$errors" :key="error" class="error"> {{ error.$message }}  </span>
                            </div>
                            <!-- form-group// -->
                            <div class="mb-3">
                                <input v-model="data.password" :class = "{ error : v$.password.$errors[0] }" class="form-control" placeholder="Password" type="password" />
                                <span  v-for="error in v$.password.$errors" :key="error" class="error"> {{ error.$message }}  </span>
                            </div>
                            <!-- form-group// -->
                            <div class="mb-3">
                                <a href="#" class="float-end font-sm text-muted">Forgot password?</a>
                                <label class="form-check">
                                    <input  type="checkbox" class="form-check-input" checked="" />
                                    <span class="form-check-label">Remember</span>
                                </label>
                            </div>
                            <!-- form-group form-check .// -->
                            <div class="mb-4">
                                <a-button :loading = "makingRequest" @click="submitForm" size="large" type="submit" class="btn btn-primary w-100">Login</a-button>
                            </div>
                            <!-- form-group// -->
                        </form>
                        <RouterLink to="/register">
                        	<p class="text-center small text-muted mb-15">or sign up with</p>
                        </RouterLink>
                        <div class="d-grid gap-3 mb-4">
                        
                        </div>
                        <p class="text-center mb-4">Don't have account? <a href="#">Sign up</a></p>
                    </div>
                </div>
            </section>
<!--             <footer class="main-footer text-center">
                <p class="font-xs">
                     
                         {{ new Date().getFullYear() }}
                    
                    &copy; Ibommarket.
                </p>
                <p class="font-xs mb-30">All rights reserved</p>
            </footer> -->
        </main>
</template>

