 interface TypeFormProduct {
  title: string;
  content: string;
  price: string;
  style: string;
  file: string;
  photo: string;
  width: string;
  long: string;
  room: string;
  floor: string;
  typeID: string;
  description:string;
  area:string
}

interface TypeQueryGetProduct {
  limit?:string,
  offset?:string,
  partnerID?:string,
  typeID?:string,
}

interface TypeUpdatePayload {
  id:string,
  data:FormData
}

export type {TypeUpdatePayload,TypeFormProduct,TypeQueryGetProduct}
