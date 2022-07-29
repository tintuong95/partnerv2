import { fetchAxios } from "../../setup/axios";
import { TypeGetsPayload } from "./type";


const fetchMessageGets = async (payload: TypeGetsPayload) => {
  const query = Object.entries(payload)
    .map((item) => item.join("="))
    .join("&");
  return await fetchAxios({
    method: "GET",
    url: "/message?" + query,
  });
};

export { fetchMessageGets };
