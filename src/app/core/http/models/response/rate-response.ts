import { RateInformation } from "src/app/shared/models/rateInformation";

export class RateResponse {

  
    cid: String;
    status: String;
    code: Number;
    timestamp: String;
    data:RateInformation[];
    error: any[]

    
}