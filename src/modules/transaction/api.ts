import { fetchAxios } from "../../setup/axios"
import { TypePayloadGets } from "./type"




const fetchTransactionGets =async(payload:TypePayloadGets )=>{
    const query=Object.entries(payload).map(item=>item.join("=")).join("&")
    return await fetchAxios({
        method:"GET",
        url:"/transaction?"+query
    })
}

export {
    fetchTransactionGets,
}