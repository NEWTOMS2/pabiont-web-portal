export class reportPayment {

    id_client: number;
    accountHolder: string;
    amount: number;
    invoice_number: string;
    description: string;
    payment_date: string;
    
    constructor(id_client: number, accountHolder: string, amount: number,  invoice_number: string,
        description: string, payment_date: string){
        this.id_client = id_client;
        this.accountHolder = accountHolder;
        this.amount = amount;
        this.invoice_number = invoice_number;
        this.description = description;
        this.payment_date = payment_date;
    }
    
}