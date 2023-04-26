export class WarehouseInformation {

    code: string;
    description: string;
    type: string;
    location: number;
    latitude: string;
    longitude: string;
    company?: number;
    
    constructor(code: string, type: string, description: string, location: number, latitude: string, longitude: string, company?: number){
        this.code = code;
        this.type = type;
        this.description = description;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
        this.company = company;
    }
    
}