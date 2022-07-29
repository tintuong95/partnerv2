type TypeGetsPayload = {
    limit: number;
    offset: number;
    partnerID?: string;
  };
  

  type TypeMessageReducer ={
    messages:any[]
}

  export type {TypeGetsPayload,TypeMessageReducer}