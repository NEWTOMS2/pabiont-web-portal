import { TrackingInformation } from "../trackingInformation";

export class TrackingResponse {

    
    cid: String;
    status: String;
    code: Number;
    timestamp: String;
    data: TrackingInformation[];
    error: any[]
        

    
}