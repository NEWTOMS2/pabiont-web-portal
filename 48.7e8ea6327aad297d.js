"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[48],{9643:(U,_,i)=>{i.d(_,{D:()=>s});var d=i(4004),u=i(5e3),m=i(3447),e=i(4948);let s=(()=>{class c{constructor(l,v){this.httpService=l,this.appConfig=v}saveUser(l,v){return v?this.httpService.patch(`${this.appConfig.config.url.saveUser}`,l).pipe((0,d.U)(g=>g.data)):this.httpService.post(`${this.appConfig.config.url.saveUser}`,l).pipe((0,d.U)(g=>g.data))}getUserClient(){return this.httpService.get(`${this.appConfig.config.url.getUserClient}`).pipe((0,d.U)(l=>l.data))}getUserAdmin(){return this.httpService.get(`${this.appConfig.config.url.getUserAdmin}`).pipe((0,d.U)(l=>l.data))}getUserChofer(){return this.httpService.get(`${this.appConfig.config.url.getUserChofer}`).pipe((0,d.U)(l=>l.data))}}return c.\u0275fac=function(l){return new(l||c)(u.LFG(m.O),u.LFG(e._))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5048:(U,_,i)=>{i.r(_),i.d(_,{AssignedDriverManagementModule:()=>z});var d=i(9808),u=i(7330),m=i(5861),e=i(5e3),s=i(3075);class c{constructor(o,t,n){this.user_code=o,this.license_plate=t,this.vehicule_code=n}}var h=i(9783),l=i(4004),v=i(3447),g=i(4948);let C=(()=>{class r{constructor(t,n){this.httpService=t,this.appConfig=n}saveDriver(t){return this.httpService.post(`${this.appConfig.config.url.postDriver}`,t).pipe((0,l.U)(n=>n.data))}getAllVehicule(){return this.httpService.get(`${this.appConfig.config.url.getAllVehicule}`).pipe((0,l.U)(t=>t.data))}getAllVehiculeModel(t){return this.httpService.get(`${this.appConfig.config.url.getAllVehiculeModel}${t}`).pipe((0,l.U)(n=>n.data))}getAllDrivers(){return this.httpService.get(`${this.appConfig.config.url.getAllDrivers}`).pipe((0,l.U)(t=>t.data))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(v.O),e.LFG(g._))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var y=i(9643),b=i(4036),M=i(1424);function F(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&r){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedDriver.first_name," ",t.selectedDriver.last_name," ")}}function S(r,o){if(1&r&&e.YNc(0,F,3,2,"div",20),2&r){const t=e.oxw();e.Q6J("ngIf",t.selectedDriver)}}function x(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&r){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function G(r,o){1&r&&(e.TgZ(0,"small",22),e._uU(1,"La licencia es obligatoria."),e.qZA())}function E(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&r){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedBrand.name," ")}}function I(r,o){if(1&r&&e.YNc(0,E,3,1,"div",20),2&r){const t=e.oxw();e.Q6J("ngIf",t.selectedBrand)}}function w(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&r){const t=o.$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.code," ")}}function B(r,o){1&r&&(e.TgZ(0,"small",22),e._uU(1,"La Marca es obligatoria."),e.qZA())}function J(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&r){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedModel.name," ")}}function N(r,o){if(1&r&&e.YNc(0,J,3,1,"div",20),2&r){const t=e.oxw();e.Q6J("ngIf",t.selectedModel)}}function q(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&r){const t=o.$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.code," ")}}function V(r,o){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El Modelo es obligatorio."),e.qZA())}function Y(r,o){1&r&&(e.TgZ(0,"small",22),e._uU(1,"La placa no cumple el formato XXX-XX-0000"),e.qZA())}const A=function(r){return{"ng-dirty ng-invalid":r}};let Z=(()=>{class r{constructor(t,n,a,p){this.formBuilder=t,this.messageService=n,this.driverManagementService=a,this.userManagementService=p,this.typeList=[{label:"Almac\xe9n",value:"Almac\xe9n"},{label:"Localidad",value:"Localidad"}],this.countryList=[{label:"Venezuela",value:1},{label:"EEUU",value:2}],this.isUpdate=!1,this.dialogVisible=!1,this.overlays=[],this.draggable=!1,this.validShow=!0,this.updateList=new e.vpe,this.buttonEnabled=new e.vpe,this.resetForm(),this.getDriver(),this.getVehiculeBrandList(),this.formGroup.controls.license.disable()}ngOnInit(){}resetForm(){this.formGroup=this.formBuilder.group({driver:["",[s.kI.required]],license_plate:["",[s.kI.required,s.kI.pattern(/^[A-Za-z]{1,3}-[A-Za-z]{1,2}-[0-9]{1,4}/)]],brand:["",s.kI.required],model:["",s.kI.required],license:["",s.kI.required]}),this.validShow=!0,this.formGroup.statusChanges.subscribe(t=>{this.buttonEnabled.emit("VALID"==t)})}submit(){this.driverRow=new c(this.selectedDriver.code,this.formGroup.controls.license_plate.value.toUpperCase(),this.selectedModel.code),this.driverManagementService.saveDriver(this.driverRow).subscribe(t=>{this.messageService.add({severity:"success",summary:"Chofer asignado correctamente.",detail:""}),this.updateList.emit()},t=>{t.error.some(n=>"Vehicule already exist"===n.error_description)?this.messageService.add({severity:"error",summary:"La placa del vehiculo ya esta registrada, intente una diferente.",detail:""}):this.messageService.add({severity:"error",summary:"Ha ocurrido un error al generar la asignaci\xf3n del chofer.",detail:""}),console.log(t)})}enable(){}updateForm(t){var n=this;return(0,m.Z)(function*(){n.validShow=!0,n.formGroup.controls.code.setValue(t.code),n.formGroup.controls.type.setValue(n.typeList.find(a=>t.type==a.value)),n.formGroup.controls.description.setValue(t.description),n.formGroup.controls.country.setValue(n.countryList.find(a=>t.country_code==a.value)),n.formGroup.controls.latitude.setValue(t.latitude),n.formGroup.controls.longitude.setValue(t.longitude),n.formGroup.controls.code.disable(),n.validShow=!0,n.validShow=!1,n.isUpdate=!0})()}getVehiculeModelList(){var t=this;return(0,m.Z)(function*(){t.validShow=!1;const n=t.selectedBrand.code;t.modelList=yield t.driverManagementService.getAllVehiculeModel(n).toPromise().then(a=>a)})()}getVehiculeBrandList(){var t=this;return(0,m.Z)(function*(){t.brandList=yield t.driverManagementService.getAllVehicule().toPromise().then(n=>n)})()}getDriver(){var t=this;return(0,m.Z)(function*(){t.driverList=yield t.userManagementService.getUserChofer().toPromise().then(n=>n),console.log(t.driverList)})()}setLincense(){this.formGroup.controls.license.setValue(this.selectedDriver.license)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(h.ez),e.Y36(C),e.Y36(y.D))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-form"]],outputs:{updateList:"updateList",buttonEnabled:"buttonEnabled"},decls:38,vars:26,consts:[[3,"formGroup"],[1,"row","p-formgrid","p-grid","mt-3"],[1,"p-field","col-12","info"],[1,"title"],[1,"p-field","col-6"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","appendTo","body","formControlName","driver","placeholder","Chofer",3,"options","ngModel","filter","showClear","ngModelChange","onChange"],["pTemplate","selectedItem"],["pTemplate","item"],["for","License"],["type","text","id","License","pInputText","","formControlName","license","required","","autofocus","",1,"uppercase",3,"ngClass","disabled"],["class","p-error",4,"ngIf"],[1,"p-field","col-12","info","mt-4"],[1,"title","m-0"],["for","Brand"],["optionLabel","name","filterBy","name,code","appendTo","body","styleClass","w-100","formControlName","brand","placeholder","Marca",3,"options","ngModel","filter","showClear","ngModelChange","onChange"],["for","Model"],["optionLabel","name","filterBy","name,code","appendTo","body","styleClass","w-100","formControlName","model","placeholder","Modelo",3,"options","ngModel","filter","disabled","showClear","ngModelChange"],[1,"p-field","col-6","mt-3"],["for","License_Plate"],["type","text","id","License_Plate","pInputText","","placeholder","XXX-XX-0000","formControlName","license_plate","required","","autofocus","",1,"uppercase",3,"ngClass","maxlength"],[4,"ngIf"],[1,"filterSubtitle"],[1,"p-error"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"Informaci\xf3n del chofer"),e.qZA()(),e.TgZ(5,"div",4)(6,"label"),e._uU(7,"Chofer"),e.qZA(),e.TgZ(8,"p-dropdown",5),e.NdJ("ngModelChange",function(p){return n.selectedDriver=p})("onChange",function(){return n.setLincense()}),e.YNc(9,S,1,1,"ng-template",6),e.YNc(10,x,5,3,"ng-template",7),e.qZA()(),e.TgZ(11,"div",4)(12,"label",8),e._uU(13,"Licencia"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,G,2,0,"small",10),e.qZA(),e.TgZ(16,"div",11)(17,"span",12),e._uU(18,"Informaci\xf3n del veh\xedculo "),e.qZA()(),e.TgZ(19,"div",4)(20,"label",13),e._uU(21,"Marca"),e.qZA(),e.TgZ(22,"p-dropdown",14),e.NdJ("ngModelChange",function(p){return n.selectedBrand=p})("onChange",function(){return n.getVehiculeModelList()}),e.YNc(23,I,1,1,"ng-template",6),e.YNc(24,w,5,2,"ng-template",7),e.qZA(),e.YNc(25,B,2,0,"small",10),e.qZA(),e.TgZ(26,"div",4)(27,"label",15),e._uU(28,"Modelo"),e.qZA(),e.TgZ(29,"p-dropdown",16),e.NdJ("ngModelChange",function(p){return n.selectedModel=p}),e.YNc(30,N,1,1,"ng-template",6),e.YNc(31,q,5,2,"ng-template",7),e.qZA(),e.YNc(32,V,2,0,"small",10),e.qZA(),e.TgZ(33,"div",17)(34,"label",18),e._uU(35,"Placa"),e.qZA(),e._UZ(36,"input",19),e.YNc(37,Y,2,0,"small",10),e.qZA()()()),2&t&&(e.Q6J("formGroup",n.formGroup),e.xp6(8),e.Q6J("options",n.driverList)("ngModel",n.selectedDriver)("filter",!0)("showClear",!0),e.xp6(6),e.Q6J("ngClass",e.VKq(22,A,n.formGroup.controls.license.touched&&(null==n.formGroup.controls.license.errors?null:n.formGroup.controls.license.errors.required)))("disabled",!0),e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.license.touched&&(null==n.formGroup.controls.license.errors?null:n.formGroup.controls.license.errors.required)),e.xp6(7),e.Q6J("options",n.brandList)("ngModel",n.selectedBrand)("filter",!0)("showClear",!0),e.xp6(3),e.Q6J("ngIf",n.formGroup.controls.brand.touched&&(null==n.formGroup.controls.brand.errors?null:n.formGroup.controls.brand.errors.required)),e.xp6(4),e.Q6J("options",n.modelList)("ngModel",n.selectedModel)("filter",!0)("disabled",n.validShow)("showClear",!0),e.xp6(3),e.Q6J("ngIf",n.formGroup.controls.model.touched&&(null==n.formGroup.controls.model.errors?null:n.formGroup.controls.model.errors.required)),e.xp6(4),e.Q6J("ngClass",e.VKq(24,A,n.formGroup.controls.license_plate.touched&&(null==n.formGroup.controls.license_plate.errors?null:n.formGroup.controls.license_plate.errors.required)))("maxlength",11),e.xp6(1),e.Q6J("ngIf",n.formGroup.controls.license_plate.touched&&n.formGroup.controls.license_plate.invalid))},directives:[s._Y,s.JL,s.sg,b.Lt,s.JJ,s.u,h.jx,d.O5,s.Fj,M.o,s.Q7,d.mk,s.nD],styles:[".uppercase[_ngcontent-%COMP%]{text-transform:uppercase}[_ngcontent-%COMP%]::placeholder{font-size:16px}.info[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700}"]}),r})();var P=i(135),T=i(7773),O=i(3833),D=i(5315),L=i(845);function Q(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",11),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(),p=e.MAs(8);return a.hideDialog(),p.submit()}),e.qZA()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("disabled",!t.buttonIsEnabled)}}const j=function(){return{width:"450px"}},R=[{path:"",component:(()=>{class r{constructor(t,n,a,p){this.appConfig=t,this.tableManagmentService=n,this.driverManagementService=a,this.router=p,this.visibleDialog=!1,this.buttonIsEnabled=!1,this.userList=[],this.currentStep=-1,this.page=this.appConfig.assigned_driverManagement,this.page=this.page.default,this.getAllDrivers(),this.tableManagmentService.buttonEvent.subscribe(f=>{this.selectedButton(f)})}ngOnInit(){}getAllDrivers(){var t=this;return(0,m.Z)(function*(){t.userList=yield t.driverManagementService.getAllDrivers().toPromise().then(n=>n)})()}buttonEnabled(t){this.buttonIsEnabled=t}selectedButton(t){0===(this.visibleDialog=!0,this.currentStep=t.buttonId,t.buttonId)&&this.child.enable()}hideDialog(){this.visibleDialog=!1,this.currentStep=-1}redirect(){this.router.navigate(["main"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g._),e.Y36(P.l),e.Y36(C),e.Y36(u.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-assigned-driver-management"]],viewQuery:function(t,n){if(1&t&&e.Gf(Z,5),2&t){let a;e.iGM(a=e.CRH())&&(n.child=a.first)}},decls:12,vars:11,consts:[[1,"row","p-5","m-0"],[1,"title"],[1,"pabiont-card"],[3,"headerList","headerCustomButtons","customButtons","dataList","searchField","canCreate"],["header","Asignar chofer a veh\xedculo ","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"buttonEnabled","updateList"],["child",""],["class","m-0","pTemplate","footer"],[1,"d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"disabled","click"]],template:function(t,n){if(1&t){const a=e.EpF();e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"span",1),e._uU(3,"Gesti\xf3n de Choferes asignados"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-basic-table",3),e.qZA()(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(f){return n.visibleDialog=f})("onHide",function(){return e.CHM(a),e.MAs(8).resetForm()}),e.TgZ(7,"app-create-form",5,6),e.NdJ("buttonEnabled",function(f){return n.buttonEnabled(f)})("updateList",function(){return n.getAllDrivers()}),e.qZA(),e.YNc(9,Q,2,1,"ng-template",7),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return n.redirect()}),e.qZA()()}2&t&&(e.xp6(5),e.Q6J("headerList",n.page.tableConfiguration.headerList)("headerCustomButtons",n.page.tableConfiguration.headerCustomButtons)("customButtons",n.page.tableConfiguration.customButtons)("dataList",n.userList)("searchField",n.page.tableConfiguration.searchField)("canCreate",!0),e.xp6(1),e.Akn(e.DdM(10,j)),e.Q6J("visible",n.visibleDialog)("modal",!0))},directives:[T.FN,O.N,D.V,Z,h.jx,L.Hq],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}@media only screen and (max-width: 576px){[_nghost-%COMP%]     .p-toast-top-right{right:0!important}[_nghost-%COMP%]     .p-toast{padding:10px!important;width:100%!important}}"]}),r})()}];let X=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[u.Bz.forChild(R)],u.Bz]}),r})();var $=i(732);let z=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.ez,X,$.T,L.hJ,M.j,D.S,s.UX,b.kW,T.EV]]}),r})()}}]);