export class PackageInformation {

    package_code?: number;
    status?: number;
    
    constructor(package_code?: number, status?: number){
        this.package_code = package_code;
        this.status = status;
    }
    
}