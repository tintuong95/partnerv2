import { fetchAxios } from "../../setup/axios";

const fetchNewsCreate = async (payload: FormData) => {
  return await fetchAxios({
    method: "POST",
    url: "/news",
    data: payload,
    headers:{
        "Accept": "multipart/form-data",
      "Content-Type": "multipart/form-data",
    }
  });
};

const fetchNewsUpdate=async (payload:any)=>{
  return await fetchAxios({
    method:"PUT",
    url:"/news/"+payload.id,
    data:payload.data,
    headers:{
      "Accept": "multipart/form-data",
      "Content-Type": "multipart/form-data",
    }
  })
}

const fetchNewsGets=async (payload:any)=>{
  const query = Object.entries(payload)
  .map((item) => item.join("="))
  .join("&");
  return await fetchAxios({
    method:"GET",
    url:"/news?"+query,
  })
}

const fetchNewsGet=async (payload:string)=>{
  return await fetchAxios({
    method:"GET",
    url:"/news/"+payload
  })
}

const fetchNewsRemove=async (id:string)=>{
  return await fetchAxios({
    method:"DELETE",
    url:"news/"+id
  })
}

export {fetchNewsUpdate,fetchNewsCreate,fetchNewsGets,fetchNewsRemove,fetchNewsGet}