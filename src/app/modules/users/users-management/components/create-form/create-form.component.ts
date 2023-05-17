import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersManagementService } from 'src/app/core/services/users/users-management.service';
import { UserInformation } from 'src/app/shared/models/request/userInformation-request.model';
import  * as CryptoJS from 'crypto-js'
import { SendEmailCredential } from 'src/app/shared/models/request/sendEmailCredential-request.model';
import { SendEmailManagementService } from 'src/app/core/services/sendEmail/send-email-management.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  //Page Variables
  formGroup: FormGroup;//Dropdown data
  rolList: any[] = [
    { label: "Agente", value: "Agente" },
    { label: "Administrador", value: "Administrador" }
  ];
  idEmpresa: number = 1;
  code: number;
  userRow: UserInformation;
  sendEmailCredentialRow: SendEmailCredential
  isUpdate = false; 
  password: string

  //INPUT AND OUPUTS
  @Output() updateList = new EventEmitter();
  @Output() buttonEnabled = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private usersManagementService: UsersManagementService,    
    private sendEmailManagementService: SendEmailManagementService,
    private messageService: MessageService,
  ) { 
    this.resetForm();
  }

  ngOnInit(): void {
  }

  convertirTexto(conversion: string) {
    return CryptoJS.AES.encrypt(conversion, "pabiont123").toString();
  }

  resetForm(){
    this.formGroup = this.formBuilder.group({
      first_name: ["", [Validators.required,Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.']+$/u)]],
      last_name: ["", [Validators.required,Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.']+$/u)]],
      email: ["", [Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)]],
      rol: ["", Validators.required],
      phone: ["", Validators.required]
    });
    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled.emit(status == "VALID" ? true : false);
    });
    
   
  }

  submit() {
    if(this.isUpdate){
      this.userRow = new UserInformation(
        this.formGroup.controls['first_name'].value,
        this.formGroup.controls['last_name'].value,
        this.formGroup.controls['email'].value,       
        this.formGroup.controls['rol'].value.value,
        this.formGroup.controls['phone'].value,
        1,
        "",
        this.code,
        ) 
    }else{
        this.password = this.generateP()
        this.userRow = new UserInformation(
          this.formGroup.controls['first_name'].value,
          this.formGroup.controls['last_name'].value,
          this.formGroup.controls['email'].value,       
          this.formGroup.controls['rol'].value.value,
          this.formGroup.controls['phone'].value,
          1,
          this.convertirTexto(this.password)
          )
    }
    this.usersManagementService.saveUser(this.userRow, this.isUpdate).subscribe(
      response => {
        //cambios de post
        this.messageService.add({severity: 'success', summary: 'Usuario creado o modificado correctamente.', detail: ''});
        this.generateEmail(this.isUpdate)
        this.updateList.emit();
      },
      err => {
        if((err.error).some(e => e.error_description === 'User already exist')){
          this.messageService.add({severity: 'error', summary: 'el Usuario ya existe, intente un correo diferente.', detail: ''})
        }
        else
        this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al crear o modificar el Usuario.', detail: ''})
        
      }
    );
  }

  async generateEmail(send: boolean){
    if(send == false){
    this.sendEmailCredentialRow = new SendEmailCredential(
      this.userRow.email,
      this.password,
      "credential" 
    )
   await this.sendEmail(this.sendEmailCredentialRow)
  }
  else null

  }

  async sendEmail(body: any){
   await this.sendEmailManagementService.sendEmail(body).subscribe(
      response => {
        this.messageService.add({severity: 'success', summary: 'Email enviado con la contraseña al Usuario creado.', detail: ''});
        
      },
      err => {
        this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al enviar el email al usuario.', detail: ''})
        console.log(err)
      }
    );  
  }

  enable(){
    this.formGroup.controls['email'].enable();
    this.formGroup.controls['rol'].enable();
    this.isUpdate=false;
  }

  updateForm(rowData: any){
    this.formGroup.controls.rol.setValue(this.rolList.find(rol => rowData.rol == rol.value));
    this.formGroup.controls.first_name.setValue(rowData.first_name);
    this.formGroup.controls.last_name.setValue(rowData.last_name);
    this.formGroup.controls.email.setValue(rowData.email);
    this.formGroup.controls.phone.setValue(rowData.phone);
    this.idEmpresa = rowData.idEmpresa;
    this.code = rowData.code;
    this.formGroup.controls['rol'].disable();
    this.isUpdate=true;
  }

  generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);    
        pass += str.charAt(char)
    }
      
    return pass;
}


}
