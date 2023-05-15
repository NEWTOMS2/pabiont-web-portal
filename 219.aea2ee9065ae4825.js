"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[219],{6399:(A,y,i)=>{i.d(y,{F:()=>s});var c=i(4004),m=i(5e3),g=i(3447),e=i(2470);let s=(()=>{class p{constructor(u,v){this.httpService=u,this.appConfig=v}saveWarehouse(u,v){return v?this.httpService.patch(`${this.appConfig.config.url.saveWarehouse}`,u).pipe((0,c.U)(h=>h.data)):this.httpService.post(`${this.appConfig.config.url.saveWarehouse}`,u).pipe((0,c.U)(h=>h.data))}getWarehouses(){return this.httpService.get(`${this.appConfig.config.url.getWarehouse}`).pipe((0,c.U)(u=>u.data))}}return p.\u0275fac=function(u){return new(u||p)(m.LFG(g.O),m.LFG(e._))},p.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},1219:(A,y,i)=>{i.r(y),i.d(y,{WarehouseManagementModule:()=>j});var c=i(9808),m=i(7330),g=i(5861),e=i(5e3),s=i(3075);class p{constructor(n,o,t,a,l,d,b){this.code=n,this.type=o,this.description=t,this.location=a,this.latitude=l,this.longitude=d,this.company=b}}var C=i(6399),u=i(4004),v=i(3447),h=i(2470);let S=(()=>{class r{constructor(o,t){this.httpService=o,this.appConfig=t}getLocations(o){return this.httpService.get(`${this.appConfig.config.url.getLocationByCode}${o}`).pipe((0,u.U)(t=>t.data))}}return r.\u0275fac=function(o){return new(o||r)(e.LFG(v.O),e.LFG(h._))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var _=i(9783),M=i(1424),G=i(4036);function F(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El c\xf3digo es obligatorio."),e.qZA())}function I(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El c\xf3digo no puede ser mayor a 3 caracteres."),e.qZA())}function w(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El Tipo es obligatorio."),e.qZA())}function D(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El Pais es obligatorio."),e.qZA())}function q(r,n){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&r){const o=e.oxw(2);e.xp6(2),e.hij(" ",o.selectedLocation.description," ")}}function U(r,n){if(1&r&&e.YNc(0,q,3,1,"div",23),2&r){const o=e.oxw();e.Q6J("ngIf",o.selectedLocation)}}function O(r,n){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&r){const o=n.$implicit;e.xp6(2),e.hij(" ",o.description," "),e.xp6(2),e.hij(" ",o.code," ")}}function W(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El estado es obligatorio."),e.qZA())}function J(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"La latitud es obligatorio."),e.qZA())}function N(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"El longitud es obligatorio."),e.qZA())}function k(r,n){1&r&&(e.TgZ(0,"small",22),e._uU(1,"La descripci\xf3n es Obligatoria."),e.qZA())}const f=function(r){return{"ng-dirty ng-invalid":r}};let L=(()=>{class r{constructor(o,t,a,l){this.formBuilder=o,this.warehouseManagementService=t,this.locationManagementService=a,this.messageService=l,this.typeList=[{label:"Almac\xe9n",value:"Almac\xe9n"},{label:"Localidad",value:"Localidad"}],this.countryList=[{label:"Venezuela",value:1},{label:"EEUU",value:2}],this.isUpdate=!1,this.dialogVisible=!1,this.overlays=[],this.draggable=!1,this.validShow=!0,this.updateList=new e.vpe,this.buttonEnabled=new e.vpe,this.resetForm()}ngOnInit(){}resetForm(){this.formGroup=this.formBuilder.group({code:["",[s.kI.required,s.kI.maxLength(3),s.kI.pattern("[a-zA-Z ]*")]],type:["",s.kI.required],description:["",s.kI.required],country:["",s.kI.required],state:["",s.kI.required],latitude:["",[s.kI.required,s.kI.pattern(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)]],longitude:["",[s.kI.required,s.kI.pattern(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/)]]}),this.validShow=!0,this.formGroup.statusChanges.subscribe(o=>{this.buttonEnabled.emit("VALID"==o)})}submit(){this.warehouseRow=this.isUpdate?new p(this.formGroup.controls.code.value,this.formGroup.controls.type.value.value,this.formGroup.controls.description.value,this.selectedLocation.code,this.formGroup.controls.latitude.value,this.formGroup.controls.longitude.value):new p(this.formGroup.controls.code.value.toUpperCase(),this.formGroup.controls.type.value.value,this.formGroup.controls.description.value,this.selectedLocation.code,this.formGroup.controls.latitude.value,this.formGroup.controls.longitude.value,1),console.log(this.warehouseRow),this.warehouseManagementService.saveWarehouse(this.warehouseRow,this.isUpdate).subscribe(o=>{this.messageService.add({severity:"success",summary:"Almac\xe9n o Localidad creado correctamente.",detail:""}),this.updateList.emit()},o=>{o.error.some(t=>"warehouse already exist"===t.error_description)?this.messageService.add({severity:"error",summary:"el Almac\xe9n o Localidad ya existe, intente un c\xf3digo diferente.",detail:""}):this.messageService.add({severity:"error",summary:"Ha ocurrido un error al generar el Almac\xe9n o Localidad.",detail:""}),console.log(o)})}enable(){this.formGroup.controls.code.enable()}updateForm(o){var t=this;return(0,g.Z)(function*(){console.log(o),t.validShow=!0,t.formGroup.controls.code.setValue(o.code),t.formGroup.controls.type.setValue(t.typeList.find(a=>o.type==a.value)),t.formGroup.controls.description.setValue(o.description),t.formGroup.controls.country.setValue(t.countryList.find(a=>o.country_code==a.value)),t.formGroup.controls.latitude.setValue(o.latitude),t.formGroup.controls.longitude.setValue(o.longitude),t.formGroup.controls.code.disable(),t.getStateList(),t.validShow=!0,yield t.getIndState(t.formGroup.controls.country.value.value),t.formGroup.controls.state.setValue(t.infoState.find(a=>o.state_code==a.code)),t.validShow=!1,t.isUpdate=!0})()}getStateList(){var o=this;return(0,g.Z)(function*(){o.validShow=!1;const t=o.formGroup.controls.country.value.value;o.stateList=yield o.locationManagementService.getLocations(t).toPromise().then(a=>a)})()}getIndState(o){var t=this;return(0,g.Z)(function*(){t.infoState=yield t.locationManagementService.getLocations(o).toPromise().then(a=>a)})()}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(s.qu),e.Y36(C.F),e.Y36(S),e.Y36(_.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-form"]],outputs:{updateList:"updateList",buttonEnabled:"buttonEnabled"},decls:40,vars:37,consts:[[3,"formGroup"],[1,"row","p-formgrid","p-grid","mt-3"],[1,"p-field","col-6"],["for","Code"],["type","text","id","Code","pInputText","","formControlName","code","required","","autofocus","",1,"uppercase",3,"ngClass"],["class","p-error",4,"ngIf"],["for","Type"],["optionLabel","label","styleClass","w-100","placeholder","Selecciona el Tipo","formControlName","type",3,"options","ngClass"],[1,"p-field","col-6","mt-3"],["for","Country"],["optionLabel","label","styleClass","w-100","dataKey","value","placeholder","Selecciona el Tipo","formControlName","country",3,"options","ngClass","onChange"],["for","State"],["optionLabel","description","filterBy","description,code","appendTo","body","styleClass","w-100","formControlName","state","placeholder","Estado",3,"options","ngModel","filter","disabled","showClear","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","item"],["for","Latitude"],["type","text","id","Latitude","pInputText","","formControlName","latitude","required","","autofocus","",1,"uppercase",3,"ngClass","maxlength"],["for","Longitude"],["type","text","id","Longitude","pInputText","","formControlName","longitude","required","","autofocus","",1,"uppercase",3,"maxlength","ngClass"],[1,"p-field","mt-3"],["for","Description"],["type","text","id","Description","pInputText","","formControlName","description","placeholder","Coloque la Ciudad y el Estado","required","",3,"ngClass","maxlength"],[1,"p-error"],[4,"ngIf"],[1,"filterSubtitle"]],template:function(o,t){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"C\xf3digo"),e.qZA(),e._UZ(5,"input",4),e.YNc(6,F,2,0,"small",5),e.YNc(7,I,2,0,"small",5),e.qZA(),e.TgZ(8,"div",2)(9,"label",6),e._uU(10,"Tipo"),e.qZA(),e._UZ(11,"p-dropdown",7),e.YNc(12,w,2,0,"small",5),e.qZA(),e.TgZ(13,"div",8)(14,"label",9),e._uU(15,"Pais"),e.qZA(),e.TgZ(16,"p-dropdown",10),e.NdJ("onChange",function(){return t.getStateList()}),e.qZA(),e.YNc(17,D,2,0,"small",5),e.qZA(),e.TgZ(18,"div",8)(19,"label",11),e._uU(20,"Estado"),e.qZA(),e.TgZ(21,"p-dropdown",12),e.NdJ("ngModelChange",function(l){return t.selectedLocation=l}),e.YNc(22,U,1,1,"ng-template",13),e.YNc(23,O,5,2,"ng-template",14),e.qZA(),e.YNc(24,W,2,0,"small",5),e.qZA(),e.TgZ(25,"div",8)(26,"label",15),e._uU(27,"Latitud"),e.qZA(),e._UZ(28,"input",16),e.YNc(29,J,2,0,"small",5),e.qZA(),e.TgZ(30,"div",8)(31,"label",17),e._uU(32,"Longitud"),e.qZA(),e._UZ(33,"input",18),e.YNc(34,N,2,0,"small",5),e.qZA()(),e.TgZ(35,"div",19)(36,"label",20),e._uU(37,"Descripci\xf3n"),e.qZA(),e._UZ(38,"input",21),e.YNc(39,k,2,0,"small",5),e.qZA()()),2&o&&(e.Q6J("formGroup",t.formGroup),e.xp6(5),e.Q6J("ngClass",e.VKq(25,f,t.formGroup.controls.code.touched&&(null==t.formGroup.controls.code.errors?null:t.formGroup.controls.code.errors.required))),e.xp6(1),e.Q6J("ngIf",t.formGroup.controls.code.touched&&(null==t.formGroup.controls.code.errors?null:t.formGroup.controls.code.errors.required)),e.xp6(1),e.Q6J("ngIf",null==t.formGroup.controls.code.errors?null:t.formGroup.controls.code.errors.maxlength),e.xp6(4),e.Q6J("options",t.typeList)("ngClass",e.VKq(27,f,t.formGroup.controls.type.touched&&(null==t.formGroup.controls.type.errors?null:t.formGroup.controls.type.errors.required))),e.xp6(1),e.Q6J("ngIf",t.formGroup.controls.type.touched&&(null==t.formGroup.controls.type.errors?null:t.formGroup.controls.type.errors.required)),e.xp6(4),e.Q6J("options",t.countryList)("ngClass",e.VKq(29,f,t.formGroup.controls.country.touched&&(null==t.formGroup.controls.country.errors?null:t.formGroup.controls.country.errors.required))),e.xp6(1),e.Q6J("ngIf",t.formGroup.controls.country.touched&&(null==t.formGroup.controls.country.errors?null:t.formGroup.controls.country.errors.required)),e.xp6(4),e.Q6J("options",t.stateList)("ngModel",t.selectedLocation)("filter",!0)("disabled",t.validShow)("showClear",!0),e.xp6(3),e.Q6J("ngIf",t.formGroup.controls.state.touched&&(null==t.formGroup.controls.state.errors?null:t.formGroup.controls.state.errors.required)),e.xp6(4),e.Q6J("ngClass",e.VKq(31,f,t.formGroup.controls.latitude.touched&&(null==t.formGroup.controls.latitude.errors?null:t.formGroup.controls.latitude.errors.required)))("maxlength",10),e.xp6(1),e.Q6J("ngIf",t.formGroup.controls.latitude.touched&&(null==t.formGroup.controls.latitude.errors?null:t.formGroup.controls.latitude.errors.required)),e.xp6(4),e.Q6J("maxlength",10)("ngClass",e.VKq(33,f,t.formGroup.controls.longitude.touched&&(null==t.formGroup.controls.longitude.errors?null:t.formGroup.controls.longitude.errors.required))),e.xp6(1),e.Q6J("ngIf",t.formGroup.controls.longitude.touched&&(null==t.formGroup.controls.longitude.errors?null:t.formGroup.controls.longitude.errors.required)),e.xp6(4),e.Q6J("ngClass",e.VKq(35,f,t.formGroup.controls.description.touched&&(null==t.formGroup.controls.description.errors?null:t.formGroup.controls.description.errors.required)))("maxlength",150),e.xp6(1),e.Q6J("ngIf",t.formGroup.controls.description.touched&&(null==t.formGroup.controls.description.errors?null:t.formGroup.controls.description.errors.required)))},directives:[s._Y,s.JL,s.sg,s.Fj,M.o,s.JJ,s.u,s.Q7,c.mk,c.O5,G.Lt,_.jx,s.nD],styles:[".uppercase[_ngcontent-%COMP%]{text-transform:uppercase}[_ngcontent-%COMP%]::placeholder{font-size:16px}"]}),r})();var z=i(135),E=i(7773),x=i(3833),Z=i(5315),T=i(845);function B(r,n){if(1&r){const o=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(o),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",11),e.NdJ("click",function(){e.CHM(o);const a=e.oxw(),l=e.MAs(8);return a.hideDialog(),l.submit()}),e.qZA()}if(2&r){const o=e.oxw();e.xp6(1),e.Q6J("disabled",!o.buttonIsEnabled)}}const Y=function(){return{width:"600px"}},Q=[{path:"",component:(()=>{class r{constructor(o,t,a,l,d){this.appConfig=o,this.tableManagmentService=t,this.warehouseManagementService=a,this.router=l,this.messageService=d,this.visibleDialog=!1,this.buttonIsEnabled=!1,this.warehouseList=[],this.page=this.appConfig.warehouseManagement,this.page=this.page.default,this.getWarehouseList(),this.tableManagmentService.buttonEvent.subscribe(b=>{this.selectedButton(b)})}ngOnInit(){}getWarehouseList(){var o=this;return(0,g.Z)(function*(){o.warehouseList=yield o.warehouseManagementService.getWarehouses().toPromise().then(t=>t),console.log(o.warehouseList)})()}buttonEnabled(o){this.buttonIsEnabled=o}selectedButton(o){switch(this.visibleDialog=!0,o.buttonId){case 0:this.child.enable();break;case 1:this.child.updateForm(o.rowData)}}hideDialog(){this.visibleDialog=!1}redirect(){this.router.navigate(["main"])}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(h._),e.Y36(z.l),e.Y36(C.F),e.Y36(m.F0),e.Y36(_.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-warehouse-management"]],viewQuery:function(o,t){if(1&o&&e.Gf(L,5),2&o){let a;e.iGM(a=e.CRH())&&(t.child=a.first)}},decls:12,vars:11,consts:[[1,"row","p-5","m-0"],[1,"title"],[1,"pabiont-card"],[3,"headerList","headerCustomButtons","customButtons","dataList","searchField","canCreate"],["header","Agregar o Modificar Almacenes y localidades","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"buttonEnabled","updateList"],["child",""],["class","m-0","pTemplate","footer"],[1,"d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"disabled","click"]],template:function(o,t){if(1&o){const a=e.EpF();e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"span",1),e._uU(3,"Gesti\xf3n de Almacenes y Localidades"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-basic-table",3),e.qZA()(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(d){return t.visibleDialog=d})("onHide",function(){return e.CHM(a),e.MAs(8).resetForm()}),e.TgZ(7,"app-create-form",5,6),e.NdJ("buttonEnabled",function(d){return t.buttonEnabled(d)})("updateList",function(){return t.getWarehouseList()}),e.qZA(),e.YNc(9,B,2,1,"ng-template",7),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return t.redirect()}),e.qZA()()}2&o&&(e.xp6(5),e.Q6J("headerList",t.page.tableConfiguration.headerList)("headerCustomButtons",t.page.tableConfiguration.headerCustomButtons)("customButtons",t.page.tableConfiguration.customButtons)("dataList",t.warehouseList)("searchField",t.page.tableConfiguration.searchField)("canCreate",!0),e.xp6(1),e.Akn(e.DdM(10,Y)),e.Q6J("visible",t.visibleDialog)("modal",!0))},directives:[E.FN,x.N,Z.V,L,_.jx,T.Hq],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),r})()}];let R=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.Bz.forChild(Q)],m.Bz]}),r})();var V=i(732);let P=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez]]}),r})(),j=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,R,V.T,T.hJ,M.j,Z.S,s.UX,G.kW,E.EV,P]]}),r})()}}]);