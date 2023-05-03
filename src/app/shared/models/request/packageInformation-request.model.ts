export class PackageInformation {

    package_code?: number;
    status?: number;
    location?: number;
    
    constructor(package_code?: number, status?: number, location?: number){
        this.package_code = package_code;
        this.status = status;
        this.location = location;
    }
    
}