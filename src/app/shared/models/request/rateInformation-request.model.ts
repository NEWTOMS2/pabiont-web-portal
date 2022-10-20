export class RateInformation {

    aerial: number;
    maritime: number;
    company: number
    
    constructor(aerial: number,maritime: number, company: number){
        this.aerial = aerial;
        this.maritime = maritime;
        this.company = company;
    }
    
}