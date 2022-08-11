import { InvoiceInformation } from "../request/invoiceInformation-request.model";

export class InvoiceResponse {

    
    cid: String;
    status: String;
    code: Number;
    timestamp: String;
    data: InvoiceInformation[];
    error: any[]
        

    
}