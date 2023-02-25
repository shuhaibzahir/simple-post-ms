import axios from "axios";
import { APIs } from "./constant";

export const saveComment = (id,data)=>{
    return axios.post(`${APIs.COMMENT}/${id}`,data)
}

export const getComment = (id)=>{
    return axios.get(`${APIs.COMMENT}/${id}`)
}