export class WarehouseInformation {

    code: string;
    description: string;
    type: string;
    company?: number;
    
    constructor(code: string, type: string, description: string, company?: number){
        this.code = code;
        this.type = type;
        this.description = description;
        this.company = company;
    }
    
}