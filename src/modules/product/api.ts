import { fetchAxios } from "../../setup/axios";
import { TypeQueryGetProduct, TypeUpdatePayload } from "./type";

const fetchProductGets = async (payload: TypeQueryGetProduct) => {
  const query = Object.entries(payload)
    .map((item) => item.join("="))
    .join("&");
  return await fetchAxios({
    method: "GET",
    url: `/product?${query}`,
  });
};

const fetchProductGet = async (payload: string) => {
  return await fetchAxios({
    method: "GET",
    url: `/product/${payload}`,
  });
};

const fetchProductCreate = async (payload: FormData) => {
  return await fetchAxios({
    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
    },
    url: "/product",
    data: payload,
  });
};

const fetchProductUpdate = async (id:string,data:FormData ) => {
console.log("asdf")
  return await fetchAxios({
    
    method: "PUT",
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
    },
    url: "/product/"+id,
    data: data,
  });
};

const fetchProductDelete = async (payload: string) => {
  return await fetchAxios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
    url: `/product/${payload}`,
  });
};

const fetchProductState = async (payload: string) => {
  return await fetchAxios({
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    url: `/product/state/${payload}`,
  });
};

export {
  fetchProductGets,
  fetchProductCreate,
  fetchProductDelete,
  fetchProductState,
  fetchProductUpdate,
  fetchProductGet
};
