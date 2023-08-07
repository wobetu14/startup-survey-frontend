import axios from "axios";

const instance = axios.create(
    {
        baseURL:"https://ecom-application.wobetu.com/api/",
        headers:{
            'Authorization': 'Bearer',
            'Accept':'application/json',
            'Content-Type': 'multipart/form-data'
          },
    }
)
export default instance