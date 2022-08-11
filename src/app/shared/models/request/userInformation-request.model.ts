export class UserInformation {

    first_name: string;
    last_name: string;
    email: string;
    rol: string;
    phone: string;
    idEmpresa?: number;
    password?: string;
    code?: number;
    
    constructor(first_name: string, last_name: string, email: string, rol: string, phone: string, idEmpresa?: number, password?: string, code?: number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.rol = rol;
        this.phone = phone;
        this.idEmpresa = idEmpresa;
        this.password = password; 
        this.code = code;
    }
    
}