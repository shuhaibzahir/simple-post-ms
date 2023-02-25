import axios from "axios";
import { APIs } from "./constant";

export const savePost = (data)=>{
    return axios.post(APIs.POST,data)
}

export const getPosts = ()=>{
    return axios.get(APIs.QUERY)
}