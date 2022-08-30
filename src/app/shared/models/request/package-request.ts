export class packages {

    weight: number;
    high: number;
    width: number;
    long: number;
    description: string;
    bill: number;
    company: number;
    shipping_type: string;
    
    constructor(weight: number, high: number, width: number, long: number,
        description: string , bill: number, company: number, shipping_type: string){
        this.weight = weight;
        this.high = high;
        this.width = width;
        this.long = long;   
        this.description = description;
        this.bill = bill;
        this.shipping_type = shipping_type;
        this.company = company;
    }
    
}