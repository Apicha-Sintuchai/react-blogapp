import axios from "axios";

export const get = async () => {
   return await  axios.get('http://localhost:3000/blog-app')
}