"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[822],{7600:(k,f,n)=>{n.r(f),n.d(f,{UsersManagementModule:()=>H});var p=n(9808),c=n(7330),h=n(5861),e=n(5e3),a=n(3075),d=n(272),A=n(7206);class T{constructor(s,t,o){this.to=s,this.password=t,this.template=o}}var g=n(9643),y=n(4004),F=n(3447),v=n(6456);let S=(()=>{class r{constructor(t,o){this.httpService=t,this.appConfig=o}sendEmail(t){return console.log(t),this.httpService.post(`${this.appConfig.config.url.sendEmail}`,t).pipe((0,y.U)(o=>o.data))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(F.O),e.LFG(v._))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var b=n(9783),C=n(1424),G=n(2537),_=n(4036);function L(r,s){1&r&&(e.TgZ(0,"small",15),e._uU(1,"El nombre es obligatorio."),e.qZA())}function I(r,s){1&r&&(e.TgZ(0,"small",15),e._uU(1,"El apellido es obligatorio."),e.qZA())}function q(r,s){1&r&&(e.TgZ(0,"small",15),e._uU(1,"El Tel\xe9fono es Obligatorio."),e.qZA())}function J(r,s){1&r&&(e.TgZ(0,"small",15),e._uU(1,"El Rol es obligatorio."),e.qZA())}function N(r,s){1&r&&(e.TgZ(0,"small",15),e._uU(1,"El email es obligatorio."),e.qZA())}const m=function(r){return{"ng-dirty ng-invalid":r}};let U=(()=>{class r{constructor(t,o,l,i){this.formBuilder=t,this.usersManagementService=o,this.sendEmailManagementService=l,this.messageService=i,this.rolList=[{label:"Agente",value:"Agente"},{label:"Administrador",value:"Administrador"}],this.idEmpresa=1,this.isUpdate=!1,this.updateList=new e.vpe,this.buttonEnabled=new e.vpe,this.resetForm()}ngOnInit(){}convertirTexto(t){return A.AES.encrypt(t,"pabiont123").toString()}resetForm(){this.formGroup=this.formBuilder.group({first_name:["",[a.kI.required,a.kI.pattern("[a-zA-Z ]*")]],last_name:["",[a.kI.required,a.kI.pattern("[a-zA-Z ]*")]],email:["",[a.kI.required,a.kI.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)]],rol:["",a.kI.required],phone:["",a.kI.required]}),this.formGroup.statusChanges.subscribe(t=>{this.buttonEnabled.emit("VALID"==t)})}submit(){this.isUpdate?this.userRow=new d.s(this.formGroup.controls.first_name.value,this.formGroup.controls.last_name.value,this.formGroup.controls.email.value,this.formGroup.controls.rol.value.value,this.formGroup.controls.phone.value,1,"",this.code):"Administrador"==this.formGroup.controls.rol.value.value?(this.password=this.generateP(),this.userRow=new d.s(this.formGroup.controls.first_name.value,this.formGroup.controls.last_name.value,this.formGroup.controls.email.value,this.formGroup.controls.rol.value.value,this.formGroup.controls.phone.value,this.idEmpresa,this.convertirTexto(this.password))):this.userRow=new d.s(this.formGroup.controls.first_name.value,this.formGroup.controls.last_name.value,this.formGroup.controls.email.value,this.formGroup.controls.rol.value.value,this.formGroup.controls.phone.value,this.idEmpresa),this.usersManagementService.saveUser(this.userRow,this.isUpdate).subscribe(t=>{this.messageService.add({severity:"success",summary:"Usuario creado o modificado correctamente.",detail:""}),this.updateList.emit()},t=>{this.messageService.add({severity:"error",summary:"Ha ocurrido un error al crear o modificar el Usuario.",detail:""}),console.log(t)}),"Administrador"==this.formGroup.controls.rol.value.value&&0==this.isUpdate&&(this.sendEmailCredentialRow=new T(this.formGroup.controls.email.value,this.password,"credential"),this.sendEmail(this.sendEmailCredentialRow))}sendEmail(t){var o=this;return(0,h.Z)(function*(){yield o.sendEmailManagementService.sendEmail(t).subscribe(l=>{o.messageService.add({severity:"success",summary:"Email enviado con la contrase\xf1a al Usuario creado.",detail:""})},l=>{o.messageService.add({severity:"error",summary:"Ha ocurrido un error al enviar el email al usuario.",detail:""}),console.log(l)})})()}enable(){this.formGroup.controls.email.enable(),this.formGroup.controls.rol.enable()}updateForm(t){this.formGroup.controls.rol.setValue(this.rolList.find(o=>t.rol==o.value)),this.formGroup.controls.first_name.setValue(t.first_name),this.formGroup.controls.last_name.setValue(t.last_name),this.formGroup.controls.email.setValue(t.email),this.formGroup.controls.phone.setValue(t.phone),this.idEmpresa=t.idEmpresa,this.code=t.code,this.formGroup.controls.email.disable(),this.formGroup.controls.rol.disable(),this.isUpdate=!0}generateP(){var t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";for(let i=1;i<=8;i++){var l=Math.floor(Math.random()*o.length+1);t+=o.charAt(l)}return t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.qu),e.Y36(g.D),e.Y36(S),e.Y36(b.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-form"]],outputs:{updateList:"updateList",buttonEnabled:"buttonEnabled"},decls:28,vars:22,consts:[[3,"formGroup"],[1,"row","p-formgrid","p-grid","mt-3"],[1,"p-field","col-6"],["for","First_name"],["type","text","id","First_name","pattern","[a-zA-Z ]*","pInputText","","formControlName","first_name","required","","autofocus","",3,"ngClass"],["class","p-error",4,"ngIf"],["for","Last_name"],["type","text","id","Last_name","pattern","[a-zA-Z ]*","pInputText","","formControlName","last_name","required","","autofocus","",3,"ngClass"],["for","Phone"],["formControlName","phone","id","Tel\xe9fono","mask","+99 (999) 999-9999","placeholder","+99 (999) 999-9999",3,"ngClass"],["for","Rol"],["optionLabel","label","styleClass","w-100","placeholder","Selecciona el rol","formControlName","rol",3,"options","ngClass"],[1,"p-field","mt-3"],["for","Email"],["type","text","id","Email","placeholder","abcd@abcd.abcd","pInputText","","formControlName","email","required","","autofocus","",3,"ngClass"],[1,"p-error"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Nombre"),e.qZA(),e._UZ(5,"input",4),e.YNc(6,L,2,0,"small",5),e.qZA(),e.TgZ(7,"div",2)(8,"label",6),e._uU(9,"Apellido"),e.qZA(),e._UZ(10,"input",7),e.YNc(11,I,2,0,"small",5),e.qZA()(),e.TgZ(12,"div",1)(13,"div",2)(14,"label",8),e._uU(15,"Tel\xe9fono"),e.qZA(),e._UZ(16,"p-inputMask",9),e.YNc(17,q,2,0,"small",5),e.qZA(),e.TgZ(18,"div",2)(19,"label",10),e._uU(20,"Rol"),e.qZA(),e._UZ(21,"p-dropdown",11),e.YNc(22,J,2,0,"small",5),e.qZA()(),e.TgZ(23,"div",12)(24,"label",13),e._uU(25,"Email"),e.qZA(),e._UZ(26,"input",14),e.YNc(27,N,2,0,"small",5),e.qZA()()),2&t&&(e.Q6J("formGroup",o.formGroup),e.xp6(5),e.Q6J("ngClass",e.VKq(12,m,o.formGroup.controls.first_name.touched&&(null==o.formGroup.controls.first_name.errors?null:o.formGroup.controls.first_name.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.first_name.touched&&(null==o.formGroup.controls.first_name.errors?null:o.formGroup.controls.first_name.errors.required)),e.xp6(4),e.Q6J("ngClass",e.VKq(14,m,o.formGroup.controls.last_name.touched&&(null==o.formGroup.controls.last_name.errors?null:o.formGroup.controls.last_name.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.last_name.touched&&(null==o.formGroup.controls.last_name.errors?null:o.formGroup.controls.last_name.errors.required)),e.xp6(5),e.Q6J("ngClass",e.VKq(16,m,o.formGroup.controls.phone.touched&&(null==o.formGroup.controls.phone.errors?null:o.formGroup.controls.phone.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.phone.touched&&(null==o.formGroup.controls.phone.errors?null:o.formGroup.controls.phone.errors.required)),e.xp6(4),e.Q6J("options",o.rolList)("ngClass",e.VKq(18,m,o.formGroup.controls.rol.touched&&(null==o.formGroup.controls.rol.errors?null:o.formGroup.controls.rol.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.rol.touched&&(null==o.formGroup.controls.rol.errors?null:o.formGroup.controls.rol.errors.required)),e.xp6(4),e.Q6J("ngClass",e.VKq(20,m,o.formGroup.controls.email.touched&&(null==o.formGroup.controls.email.errors?null:o.formGroup.controls.email.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.email.touched&&(null==o.formGroup.controls.email.errors?null:o.formGroup.controls.email.errors.required)))},directives:[a._Y,a.JL,a.sg,a.Fj,a.c5,C.o,a.JJ,a.u,a.Q7,p.mk,p.O5,G.vy,_.Lt],styles:[""]}),r})();var B=n(135),Z=n(7773),Q=n(3833),M=n(5315),E=n(845);function R(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(),i=e.MAs(8);return l.hideDialog(),i.submit()}),e.qZA()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("disabled",!t.buttonIsEnabled)}}const Y=function(){return{width:"450px"}},z=[{path:"",component:(()=>{class r{constructor(t,o,l,i){this.appConfig=t,this.tableManagmentService=o,this.userManagementService=l,this.router=i,this.visibleDialog=!1,this.buttonIsEnabled=!1,this.userList=[],this.currentStep=-1,this.page=this.appConfig.userManagement,this.page=this.page.default,this.getUserList(),this.tableManagmentService.buttonEvent.subscribe(u=>{this.selectedButton(u)})}ngOnInit(){}getUserList(){var t=this;return(0,h.Z)(function*(){t.userList=yield t.userManagementService.getUserAdmin().toPromise().then(o=>o)})()}buttonEnabled(t){this.buttonIsEnabled=t}selectedButton(t){switch(this.visibleDialog=!0,this.currentStep=t.buttonId,t.buttonId){case 0:this.child.enable();break;case 1:this.child.updateForm(t.rowData)}}hideDialog(){this.visibleDialog=!1,this.currentStep=-1}redirect(){this.router.navigate(["main"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v._),e.Y36(B.l),e.Y36(g.D),e.Y36(c.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-users-management"]],viewQuery:function(t,o){if(1&t&&e.Gf(U,5),2&t){let l;e.iGM(l=e.CRH())&&(o.child=l.first)}},decls:12,vars:11,consts:[[1,"row","p-5","m-0"],[1,"title"],[1,"pabiont-card"],[3,"headerList","headerCustomButtons","customButtons","dataList","searchField","canCreate"],["header","Agregar o Modificar Usuarios","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"buttonEnabled","updateList"],["child",""],["class","m-0","pTemplate","footer"],[1,"d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"disabled","click"]],template:function(t,o){if(1&t){const l=e.EpF();e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"span",1),e._uU(3,"Gesti\xf3n de Usuarios"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-basic-table",3),e.qZA()(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(u){return o.visibleDialog=u})("onHide",function(){return e.CHM(l),e.MAs(8).resetForm()}),e.TgZ(7,"app-create-form",5,6),e.NdJ("buttonEnabled",function(u){return o.buttonEnabled(u)})("updateList",function(){return o.getUserList()}),e.qZA(),e.YNc(9,R,2,1,"ng-template",7),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return o.redirect()}),e.qZA()()}2&t&&(e.xp6(5),e.Q6J("headerList",o.page.tableConfiguration.headerList)("headerCustomButtons",o.page.tableConfiguration.headerCustomButtons)("customButtons",o.page.tableConfiguration.customButtons)("dataList",o.userList)("searchField",o.page.tableConfiguration.searchField)("canCreate",!0),e.xp6(1),e.Akn(e.DdM(10,Y)),e.Q6J("visible",o.visibleDialog)("modal",!0))},directives:[Z.FN,Q.N,M.V,U,b.jx,E.Hq],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),r})()}];let V=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.Bz.forChild(z)],c.Bz]}),r})();var w=n(732);let H=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.ez,V,w.T,E.hJ,C.j,M.S,a.UX,_.kW,G.zz,Z.EV]]}),r})()}}]);