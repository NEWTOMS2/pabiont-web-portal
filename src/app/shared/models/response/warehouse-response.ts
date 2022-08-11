import { WarehouseInformation } from "src/app/shared/models/request/warehouseInformation-request.model";

export class WarehouseResponse {

    
    cid: String;
    status: String;
    code: Number;
    timestamp: String;
    data: WarehouseInformation[];
    error: any[]
        

    
}