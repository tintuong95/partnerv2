import { fetchAxios } from "../../setup/axios";

const fetchPartnerProfile = async () => {
  return await fetchAxios({
    method: "GET",
    url: "/partner/profile",
  });
};

const fetchPartnerLogout = async () => {
  return await fetchAxios({
    method: "GET",
    url: "/partner/logout",
  });
};


const fetchPartnerLogin = async (payload: FormData) => {
  return await fetchAxios({
    method: "POST",
    url: "/partner/login",
    data: payload,
  
    headers: {
      "Accept": "multipart/form-data",
      "Content-Type": "multipart/form-data",
    },
    
  });
};

export { fetchPartnerProfile, fetchPartnerLogin,fetchPartnerLogout };
