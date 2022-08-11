import { UserInformation } from "../request/userInformation-request.model";

export class UserResponse {

    
    cid: String;
    status: String;
    code: Number;
    timestamp: String;
    data: UserInformation[];
    error: any[]
        

    
}