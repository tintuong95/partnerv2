 interface TypePartner {
    id: string;
    useranme: string;
    role: string;
  }
  
   interface TypePartnerState {
    partner: TypePartner | null;
  }


export type {TypePartner,TypePartnerState}
  