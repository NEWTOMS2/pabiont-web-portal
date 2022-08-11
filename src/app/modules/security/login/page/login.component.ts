import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersService } from 'src/app/core/services/security/users.service';
import { ValidateCredential } from 'src/app/shared/models/request/validateCredential-request.model';
import  * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  isValid: boolean;
  validPassword: boolean = false;
  emailCredential: string = "n";
  passwordCredential: string = "t";
  passwordClass: string = "";
  emailClass: boolean = true;
  validateRow: any;
  valid: boolean;
  
  constructor(
    private formBuilder: FormBuilder,
    private router:Router, 
    private messageService: MessageService,
    private usersService: UsersService
  ) { 
    this.resetForm(); 
    if(Object.keys(this.usersService.getData('user')).length > 0){
      this.router.navigate(["main"])
    }
  }

  ngOnInit(): void {
  }

  convertirTexto(conversion: string) {
    return CryptoJS.AES.encrypt(conversion, "pabiont123").toString();
  }

  desconvertirTexto(conversion: any) {
    return CryptoJS.AES.decrypt(conversion, "pabiont123").toString(CryptoJS.enc.Utf8);
  }
  async credentials(email: string){
     await this.usersService.validateCre(email).toPromise().then(response => { 
     this.validateRow = response
    })
  }
  resetForm(){
    this.formGroup = this.formBuilder.group({
      password: ["", Validators.required],
      email: ["", [Validators.required]],
    });

    this.formGroup.statusChanges.subscribe(status => {
      this.isValid = status == "VALID" ? true : false;
      this.passwordClass = (this.formGroup.controls['password'].touched && this.formGroup.controls['password'].errors?.['required']) ? 
                            "ng-invalid ng-dirty" : "";
      this.emailClass = (this.formGroup.controls['email'].touched && this.formGroup.controls['email'].errors?.['required']) ? 
                          false : true;
    });
  }

 async gotoDashboard() {
    await this.credentials(this.formGroup.controls['email'].value)
    if ((this.validateRow) != null){
      if (this.formGroup.controls['password'].value == this.desconvertirTexto(this.validateRow.password))
        this.valid = true
      else{
        this.valid = false
      }
    }
    else
      this.valid = false

    if(this.isValid && this.valid){
      this.usersService.saveData("user",{email:this.formGroup.controls['email'].value, isLogged: true})
      this.router.navigate([`main`]);
      
    }
    else{
      this.passwordClass = "ng-invalid ng-dirty";
      this.emailClass = false;
      this.messageService.add({severity:'error', summary: 'Access failed', detail: 'Please double check the username and password and try again.'});
    }
  }

}
