<script setup>
  import { Store } from "@/stores/userStore.js"
  import axios from "axios" 
  import { ref, reactive , watch} from "vue"
  import { RouterLink, useRouter } from "vue-router"
  import useVuelidate from "@vuelidate/core"
  import   agent   from "@/app/agent.js"
  import { required,   email, helpers, requiredIf, minLength } from "@vuelidate/validators"

  import { Modal_States } from "@/stores/modalStatesStore.js"
  const ModalStates = Modal_States() 
    
 


  const { Account } = agent 

  const MainStore = Store()  
  const modalRef = ref(null) 
  const router = useRouter() 
  const sendingAuthDetails = ref(false) 
  const requestErrors = ref('')  
  const requestTypeIsLogin = ref(true)
  const formOpened = ref(false) 
  const showPassword = ref(false)
  const disableSubmit = ref(true)

  const body = document.querySelector("body")
  const closeModalFromOutsideClick = (event)=> {
    requestErrors.value = ""
    if (event.target === modalRef.value) {
      MainStore.updateModalState(false)
      requestTypeIsLogin.value = true
      formOpened.value = false
      body.style.overflow = "auto"
    }
  } 

  const checked = (value) => value == true

 const passwordRules = helpers.regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/)
 const phoneNumberRule = helpers.regex(/^(?:\+?234|0)[789]\d{9}$/)
 let v$ 
 let formData
 let rules
 console.log(helpers) 
 function changeRules () {
      if (requestTypeIsLogin.value === true) {
           formData = reactive({
           email: "",
           password: "", 
           agreeWithRules: true
          })
           rules = {
           email: {required, email } , 
           password : {required: helpers.withMessage('Password field cannot be empty', required), minLength: minLength(6)  } ,
           agreeWithRules : {  required , checked  },
          }
       v$ =  useVuelidate(rules, formData)


     } else {
        formData = reactive({
          email: "",
          password: "",
          firstName: "", 
          lastName: "",
          phoneNumber: "",
          agreeWithRules: true
         })
          rules = { 
          email: {required, email } ,
          password : {required: helpers.withMessage('Password field cannot be empty', required), passwordRules : helpers.withMessage('Password must have at least 8 characters , one upper-case, lowercase, one number and a special character', passwordRules) },
          firstName: { required },
          lastName : { },
          phoneNumber: { 
                       required ,  phoneNumberRule
                   },
           agreeWithRules : {  required , checked  }
         }
       v$ =  useVuelidate(rules, formData)
     }
}
changeRules()
watch(requestTypeIsLogin, ()=>{
  changeRules()
}) 
watch(v$, async ()=>{
  const result = await v$.value.$validate()
  if (result) {
    disableSubmit.value = false
  } else {
    disableSubmit.value = true
  }
}) 

 

async function loginFunction(loginCredentials) {
  sendingAuthDetails.value = true
  try {

    const data = await agent.Account.login(loginCredentials)

    
    console.log(data)
    ModalStates.notifyUser("success", "Login sucessful", "")

    localStorage.setItem("USER", JSON.stringify(data.user) )
    MainStore.updateUser(data.user)
    // const currentUser = await agent.Account.currentUser()
    // console.log(currentUser)
    // MainStore.updateUser(currentUser)
    console.log("off")

    ModalStates.updateLoginModalState(false)
    console.log("ON")

  } catch (err) {
    console.log(err)
    ModalStates.notifyUser("error", "Login failed", err.response.data.message + ".. try again" )
 
  }
  sendingAuthDetails.value = false
}
async function registerFunction(registerCredentials) { 
   sendingAuthDetails.value = true
    try {

      const data = await agent.Account.register(registerCredentials)
    ModalStates.notifyUser("success", "User registered","" )

      console.log(data)
    } catch (err) {
      console.log(err)
    ModalStates.notifyUser("error", "Registration failed", err.response.data.message + ".. try again" )

    }
    sendingAuthDetails.value = false

}



async function submitForm () { 
   const result = await v$.value.$validate()
   console.log(result)
   if(requestTypeIsLogin.value && result ) {

     loginFunction(formData)
   } else if (result) {
    registerFunction(formData)
   } else {
    console.log("error")
   }  
 }
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

function closeModal (argument) {
  ModalStates.updateLoginModalState(false)
  // requestTypeIsLogin.value = true 
  changeRules()
  

}
</script>
<template>

  <div id="components-modal-demo-position">
  
   
    <a-modal
      :footer = "null"
      v-model:open="ModalStates.loginModalOpened"
      @afterClose = "closeModal"
      title=""
      centered
      @ok="modal2Visible = false"
      style="padding: 20px 10px; "
    > 
          <span class="sign-in-words">  {{ requestTypeIsLogin ? "Sign in" : "Register" }} </span>
          <button v-if="!formOpened" @click="formOpened = true"  class="email-phone-sign-in"> 
              {{ requestTypeIsLogin ?"E-mail or phone number" : "Register via e-mail or phone number"  }}   
          </button>
          <form v-if="formOpened" @submit.prevent ="submitForm"  class="input-email-phone-password">
            <template v-if="formOpened"> 
              <div class="input">
                <span  v-for="error in v$.email.$errors" :key="error"> {{ error.$message }}  </span>
                <input placeholder=" " v-model="formData.email" type="email" id ="email"  />
                <label :class = "{ error : v$.email.$errors[0] }" for = "email" class="move"> Email </label>
              </div>
              <!--  -->
              
              <!--  -->
              <div class="input">
                <span  v-for="error in v$.password.$errors" :key="error"> {{ error.$message }}  </span>
                <input placeholder=" " v-model="formData.password" id ="password" :type= " showPassword ?  'text' : 'password' " class="password-field sign-in-password-field"   />
                <label   :key="error" for="password" :class = "{ error : v$.password.$errors[0] }" class="move"> Password</label> 
                <p @click="togglePasswordVisibility" className="password-visibility" >
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                </p>
              </div>
            </template>
             <template v-if=" formOpened && !requestTypeIsLogin"> 
                <div class="input">
                  <span  v-for="error in v$.firstName?.$errors" :key="error"> {{ error.$message }}  </span>
                  <input  placeholder=" " v-model="formData.firstName" type="text" id="firstName" class="register-first-name"   />
                  <label class="move" :class = "{ error : v$.firstName?.$errors[0] }" for="firstName">First name</label>
                </div>

                <div class="input">
                  <input  placeholder=" " v-model="formData.lastName" id="lastName" type="text" class="register-last-name"   />
                  <label for="lastName" class="move">Last name (optional)</label>
                </div>

                <div class="input">
                  <span  v-for="error in v$.phoneNumber?.$errors" :key="error"> {{ error.$message }}  </span> 
                  <input  placeholder=" " v-model="formData.phoneNumber" id="phoneNumber" type="tel" class="register-phone"   />
                  <label for="phoneNumber" :class = "{ error : v$.phoneNumber?.$errors[0] }" class="move">Phone (digits only)</label>
                </div>
             </template>
            
            <template v-if="formOpened"> 
              <div class="agree-with-rules"> 
                <input type="checkbox" v-model="formData.agreeWithRules" name="i-agree" id="i-agree"   />
                <label :class = "{ error : v$.agreeWithRules?.$errors[0] }" for="i-agree">I agree with rules</label> 
              </div>
                <span> </span>
              <span class="forgotten-password"> Forgot your Password?</span>  
              <a-button :loading="sendingAuthDetails" @click="submitForm" class="submit-login-details" type="primary">  
                 {{ sendingAuthDetails ? 'authenticating...' : 'SIGN IN' }} 
              </a-button>
              <span v-if="requestErrors" style="color: red"> {{ requestErrors }} </span>
            </template>
            
            
          </form>
          <div class="asdf">
            <span class="no-account"> {{ requestTypeIsLogin ? " Don't have an account?" : "Already have an account?" }} </span>
            <span @click ="formOpened = false; requestTypeIsLogin = !requestTypeIsLogin " id="sign-in-register"> {{ requestTypeIsLogin ? "Registration" : "Sign in" }}    </span>
          </div>
          <span class="policy-and-rules">  By continuing you have agreed to the
            <b> <RouterLink to="/privacy-policy"> Policy and Rules </RouterLink> </b></span>
    </a-modal>
  </div>
 
    
  
</template>


<style scoped>
 .agree-with-rules input {
  margin-right: 10px;
  cursor: pointer;
 }
  .agree-with-rules label , button{
    cursor: pointer;
    transition: .3s
  }
  .agree-with-rules label.error {
    color: red
  }
  span.sign-in-words {
    display: block;
  }
  .email-phone-sign-in {
    margin: 5px auto;

  }
</style>