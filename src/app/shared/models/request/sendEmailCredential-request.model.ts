export class SendEmailCredential {

    to: string;
    password: string;
    template: string;
    
    constructor( to: string, password: string, template: string){
        this.to = to;
        this.password = password;
        this.template = template;
    }
    
}