// src > app > api > agent.ts
// import { Store } from "@/stores/userStore.js" 
import axios from "axios"
 
// const userStore = 
const isProduction = true

if (isProduction) {
    axios.defaults.baseURL = "https://harry-house-backend.onrender.com/api/v1/";
} else {
    axios.defaults.baseURL = "http://localhost:5000/ibommarket/api/v1/";

}
axios.defaults.withCredentials = false;
const responseBody = (response) => response.data;

// axios.interceptors.request.use(config => {
//     const token =  JSON.parse( localStorage.getItem("ibmToken") ); 
//     // console.log(token)
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// })
 
const requests = {
    get: (url, params) => axios.get(url, {params}).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
    postForm: (url, data) => axios.post(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url, data) => axios.put(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody)
}

const Cards = {
    getCards : () => requests.get('post'),
    postCards : (body) => requests.post('post', body),
    deleteCards : (id) => requests.delete('post/' + id )
}
const Account = {
    login : (body) => requests.post('auth/login', body),
    register : (body) => requests.post('auth/register', body),
    getIdOwner: ( id ) => requests.get('user', id ),
}
const Business = {
    getBusinesses : () => requests.get("adverts"),
    getBusiness : (id) => requests.get("adverts/" + id),
    addBusiness : body => requests.postForm("business", body),
    delete : (id) => requests.delete("business/" + id)
}
const Advert = {
    get : () => requests.get("adverts"),
    post : body => requests.postForm("adverts", body),
    delete : id => requests.delete("adverts/" + id),
}
const Categories = {
    get : () => requests.get("post-categories"),
    post : body => requests.postForm("post-categories", body),
    delete : id => requests.delete("post-categories/" + id),
}
const SubCategories = {
    get : () => requests.get("post-sub-categories"),
    post : body => requests.postForm("post-sub-categories", body),
    delete : id => requests.delete("post-sub-categories/" + id),
}
const Bookmarks = {
    get : (id) => requests.get("bookmark/" + id ),
    getAll : (id, body) => requests.post("bookmark/all/" + id, body ),
    put : (id, body) => requests.put("bookmark/" + id , body )
}
const Post = {
    getAll : (params) => requests.get("post", params),
    getOne : (id) => requests.get("post/" + id ),
    getUsersPost : (id) => requests.get("post/user/" + id ),
    add : body => requests.put("post", body ),
    search : params  => requests.get("post/find/s", params )
}
const postActions = {
    close : (id, body) => requests.put("post/action/close/" + id), body),
    active : (id, body) => requests.put("post/action/active/" + id), body),
}

const agent = {
    Cards,
    Account,
    Advert,
    Business,
    Categories,
    SubCategories,
    Bookmarks,
    Post,
    postActions
}

export default agent;
