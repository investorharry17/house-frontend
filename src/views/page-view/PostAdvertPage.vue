<script setup>
  import axios from "axios"
  import agent from "@/app/agent.js"
  import { Store } from "@/stores/userStore"
  import { PlusOutlined } from '@ant-design/icons-vue';
  import "@/styles/scoped/post-ad.css"
  import { ref } from "vue"  
  import { useRouter } from "vue-router"

  const MainStore = Store()
  const router = useRouter()
if (!localStorage.USER) {
  router.push("/?from=/post-advert")
} 
 
 
import { reactive } from 'vue';
const formCategoryIndex = ref(null)
const postingAdvert = ref(false)
const formState = reactive({
  category : null,
  subCategory : null,
  'input-number': 3,
  'checkbox-group': ['A', 'B'],
  rate: 3.5,
  'location' : "",
  'title' : "",
  'description' : "",
  price : null
});
let uploadData = null
const onFinish = values => {
  console.log('Success:', values);
  formValidate.value = true
  uploadData = values
};
const formValidate = ref(false)
const onFinishFailed = errorInfo => {
  formValidate.value = false
  console.log('Failed:', errorInfo);
};
  const formCategories = ref([])
  const formSubCategories = ref([])

    const fetchSelectOptions = async () => {
      try {
        console.log("trying")
        let categories = await axios.all([
          agent.Categories.get(),
          agent.SubCategories.get()
        ])
        formCategories.value = categories[0].data.categories
        formSubCategories.value = categories[1].data.subCategories
        console.log(categories)
        console.log(formCategories.value)
      } catch (err) {
        console.log(err)
      }
    }
    fetchSelectOptions()
    function trackSelectChange(argument) {
      formCategoryIndex.value = argument
    }
  
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([]); 
 
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async file => {
  // let newF = file
  if (!file.url && !file.preview) { 
    console.log(file) 
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = false;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};
   function beforeUpload (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
 
      };
      return false;
    }
  async function handleFormSubmit () {
    console.log(formState)
    postingAdvert.value = true

    setTimeout( async ()=> {

    if (formValidate.value) {
         const uploadImages = []
        fileList.value.forEach(value => {
          uploadImages.push(value.originFileObj)
        })
        console.log(uploadImages)
        const requests = []
         uploadImages.forEach((file) => {
            const formFiles = new FormData()
            formFiles.append("file", file )
            formFiles.append("upload_preset", "ibommarket")
            requests.push(formFiles)
        })
         try {
            const res = await axios.all([
              requests.map( async (one) => {
                return await axios.post("https://api.cloudinary.com/v1_1/dggvnotet/image/upload", one)
              })
            ])
         const newRes = await Promise.all(res[0])
         const uploadImageUrl = []
          const uploadPublicId = []

          newRes.forEach(res => {
            uploadImageUrl.push(res.data.url)
            uploadPublicId.push(res.data.public_id)
          })
        const postDetails = {
            category : uploadData.category,
            subCategory : uploadData.subCategory,
            postImages : uploadImageUrl ,
            postImagesId : uploadPublicId,
            location : uploadData.location,
            title : uploadData.title,
            description : uploadData.description,
            price : uploadData.price,
            postOwnerId : MainStore.USER.value._id
        }

         await agent.Post.add( postDetails )
        MainStore.openNotificationModal("success", "Post Successful", "Congratulation, your advert has been added to Ibommarket")

        router.push('/')  

        postingAdvert.value = false
        console.log(router, postDetails)
       } catch (err) {
        console.log(err)
       }

    } else {
      console.log("Failed to validate ")
      postingAdvert.value = false
       MainStore.openNotificationModal("error", "Post Failed", "Something went wrong, Please try again")
    }
    },1000)

  }
</script>
<template>
<a-form
    class="main-category-container"
    :model="formState"
    name="validate_other"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
    @submit="handleFormSubmit"
  > 
  <a-form-item >
    <a-upload
      :show-remove-icon= "false"
      accept="image/jpeg, image/png, image/jpg" 
      v-model:file-list="fileList"
      @preview="handlePreview"
      :multiple ="true"
      v-model:value="fileList"
      :before-upload="beforeUpload"
      list-type="picture-card" 
    >
      <div >
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </a-form-item>
    <a-form-item
      name="category" 
      has-feedback
      :rules="[{ required: true, message: 'Category!' }]"
    >
      <a-select size="large" @change="trackSelectChange" v-model:value="formState.category" placeholder="Choose category">
        <template v-for="(category, index) in formCategories" :key="index">
          <a-select-option  :value="category.categoryId">{{ category.name }}</a-select-option>
        </template>
      </a-select>
    </a-form-item>

    <a-form-item
      v-if="formCategoryIndex"
      name="subCategory" 
      :rules="[{ required: true, message: 'Please select a sub-category!'  }]"
    >
      <a-select 
        size="large"
        v-model:value="formState.subCategory"
        placeholder="Choose sub-category"
      >
        <template v-for="(value, index) in formSubCategories " :key="index">
          <a-select-option v-if=" value.categoryId === formCategoryIndex" :value="value.subCategoryId">{{ value.name }}</a-select-option>
        </template>
      </a-select>
    </a-form-item>

    <a-form-item
       name="location" direction="vertical"
       :rules="[{ required: true, message: 'Please select a location!'  }]"
     >
      <a-input size="large" v-model:value="formState['location']"  placeholder="Location" /> 
    </a-form-item>
    <a-form-item
       name="title" direction="vertical"
       :rules="[{ required: true, message: 'Please add a title!'  }]"
     >
      <a-input size="large" v-model:value="formState['title']" placeholder="Title" /> 
    </a-form-item>
    <a-form-item name="description" :rules="[{ required: true, message: 'Please add a description!'  }]" >
      <a-textarea 
         v-model:value="formState['description']" 
         placeholder="Description" 
         show-count 
         :maxlength="1000"
         :autoSize ="{ minRows: 6, maxRows: 6 }"

       />
    </a-form-item>

    <a-form-item 
      name="price"
      :rules="[{ required: true, message: 'Please add a price!' }]"
      >
      <a-input-number
      style="height: 40px;"
      v-model:value="formState.price"
      prefix="₦ "
      :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"
      :controls = "false"
      size="large"
    />
    </a-form-item>

    <a-form-item > 
      <a-button style="width: 100%;" type="primary" size="large" :loading ="postingAdvert" html-type="submit" >Post AD</a-button>
    </a-form-item>
  </a-form>
</template>


<style scoped>
 
div {
  width: 100%; 
}
 
 
</style>



