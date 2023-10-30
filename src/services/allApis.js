import id from "date-fns/locale/id/index";
import { baseUrl } from "./baseUrl";
import { commonRequest } from "./commonRequest";


export const addVideos=async (body)=>{

    return await commonRequest('POST',`${baseUrl}/videos`,body)
}
export const getAllVideos=async ()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}
export const deleteVideos=async (id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}
export const getVideoById=async (id)=>{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}
export const addCategory=async (body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)

}
export const getAllCategory=async ()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}
export const getCategoryById=async (categId)=>{
    return await commonRequest('GET',`${baseUrl}/categories/${categId}`,{})
}
export const deleteCategory= async (categId)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${categId}`,{})
}

export const addHistory=async (body)=>
{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}
export const getAllHistory=async ()=>
{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}
export const deleteHistory= async (histId)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${histId}`,{})
}
export const getvideo=async (id)=>
{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}
export const updateCategory=async (id,body)=>
{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}