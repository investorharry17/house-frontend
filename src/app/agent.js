 import axios from "axios"
const isLocal = false
axios.defaults.baseURL = isLocal ? "http://localhost:5000/api/v1/" : "https://harry-house-backend.onrender.com/api/v1/";
axios.defaults.withCredentials = false;
const responseBody = (response) => response.data;

axios.interceptors.request.use(config => {
    const token =  JSON.parse( localStorage.getItem("justMoved") ); 
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})
 
const requests = {
    get: (url, params) => axios.get(url, { params }).then(responseBody),
    post: (url, body) => axios.post(url, body).then(response => responseBody(response)),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
    postForm: (url, data) => axios.post(url, data, {
        headers: { 'Content-type': 'multipart/form-data' }
    }).then(responseBody),
    patchForm: (url, data) => axios.patch(url, data).then(responseBody)
};


const Account = {
    login : (body) => requests.post('auth/login', body),
    currentUser: () => requests.get('auth/currentuser'),
    register : (body) => requests.post('account/register', body)
}
const Advert = {
    get : () => requests.get("adverts"),
    post : body => requests.postForm("adverts", body),
    delete : id => requests.delete("adverts/" + id),
}
const Categories = {
    get : () => requests.get("categories"),
    post : body => requests.postForm("categories", body),
    delete : id => requests.delete("categories/" + id),
}
const SubCategories = {
    get : () => requests.get("subcategories"),
    post : body => requests.postForm("subcategories", body),
    delete : id => requests.delete("subcategories/" + id),
}

const Post = {
    getAll : () => requests.get("post")
}
const agent = {
    Account,
    Advert, 
    Categories,
    SubCategories, 
    Post
}

export default agent;