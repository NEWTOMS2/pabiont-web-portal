export class PackageInformation {

    package_code?: string;
    status?: number;
    
    constructor(package_code?: string, status?: number){
        this.package_code = package_code;
        this.status = status;
    }
    
}