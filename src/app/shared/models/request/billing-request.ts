export class billing {

    description: string;
    date: any;
    due_date: any;
    subtotal: number;
    total: number;
    shipper: number;
    consignee: number;
    agent: number;
    bill_to: number;
    company: number;
    status: number;
    invoice_number: string;
    package_information: any[]; 
    payment_type: string;
    origin: string;
    destination: string;
    location: string;
    
    constructor(description: string, invoice_number: string, date: any, due_date: any, subtotal: number
                , total: number, shipper: number, consignee: number, agent: number, bill_to: number
                , company: number, status: number, package_information: any[],  payment_type: string
                , origin: string, destination: string, location: string){
        this.description = description;
        this.date = date;
        this.due_date = due_date;
        this.subtotal = subtotal;
        this.total = total;
        this.shipper = shipper;
        this.consignee = consignee;
        this.agent = agent;
        this.bill_to = bill_to;
        this.company = company;
        this.status = status;
        this.invoice_number = invoice_number;      
        this.package_information = package_information;      
        this.payment_type = payment_type;
        this.origin = origin;
        this.destination = destination;
        this.location = location;
    }
    
}