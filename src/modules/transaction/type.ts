

interface TypeTransactionState {
    transactions:any[]
}

type TypePayloadGets ={
    limit:number,
    offset:number,
    partnerID?:string,
    productID?:string,
}

export type {TypeTransactionState,TypePayloadGets}