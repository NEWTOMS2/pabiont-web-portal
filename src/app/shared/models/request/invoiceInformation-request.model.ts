export class InvoiceInformation {

    invoice_number?: string;
    status?: number;
    
    constructor(invoice_number?: string, status?: number){
        this.invoice_number = invoice_number;
        this.status = status;
    }
    
}