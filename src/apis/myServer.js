import axios from "axios"

const myAxios = axios.create({
    baseURL : "https://my-vtuberlist.herokuapp.com"
    
})

export default myAxios