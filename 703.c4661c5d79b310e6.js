"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[703],{4703:(N,h,n)=>{n.r(h),n.d(h,{WarehouseManagementModule:()=>B});var p=n(9808),c=n(7330),Z=n(5861),e=n(5e3),a=n(3075);class g{constructor(s,t,o,i){this.code=s,this.type=t,this.description=o,this.company=i}}var f=n(6399),m=n(9783),b=n(1424),v=n(4036);function _(r,s){1&r&&(e.TgZ(0,"small",11),e._uU(1,"El c\xf3digo es obligatorio."),e.qZA())}function T(r,s){1&r&&(e.TgZ(0,"small",11),e._uU(1,"El c\xf3digo no puede ser mayor a 3 caracteres."),e.qZA())}function F(r,s){1&r&&(e.TgZ(0,"small",11),e._uU(1,"El Tipo es obligatorio."),e.qZA())}function L(r,s){1&r&&(e.TgZ(0,"small",11),e._uU(1,"La descripci\xf3n es Obligatoria."),e.qZA())}const d=function(r){return{"ng-dirty ng-invalid":r}};let C=(()=>{class r{constructor(t,o,i){this.formBuilder=t,this.warehouseManagementService=o,this.messageService=i,this.typeList=[{label:"Almacen",value:"Almacen"},{label:"Localidad",value:"Localidad"}],this.isUpdate=!1,this.updateList=new e.vpe,this.buttonEnabled=new e.vpe,this.resetForm()}ngOnInit(){}resetForm(){this.formGroup=this.formBuilder.group({code:["",[a.kI.required,a.kI.maxLength(3),a.kI.pattern("[a-zA-Z ]*")]],type:["",a.kI.required],description:["",a.kI.required]}),this.formGroup.statusChanges.subscribe(t=>{this.buttonEnabled.emit("VALID"==t)})}submit(){this.warehouseRow=this.isUpdate?new g(this.formGroup.controls.code.value,this.formGroup.controls.type.value.value,this.formGroup.controls.description.value):new g(this.formGroup.controls.code.value.toUpperCase(),this.formGroup.controls.type.value.value,this.formGroup.controls.description.value,1),console.log(this.warehouseRow),this.warehouseManagementService.saveWarehouse(this.warehouseRow,this.isUpdate).subscribe(t=>{this.messageService.add({severity:"success",summary:"almancen o localidad creado correctamente.",detail:""}),this.updateList.emit()},t=>{t.error.some(o=>"warehouse already exist"===o.error_description)?this.messageService.add({severity:"error",summary:"el Almacen o Localidad ya existe, intente un c\xf3digo diferente.",detail:""}):this.messageService.add({severity:"error",summary:"Ha ocurrido un error al generar el Almancen o Localidad.",detail:""}),console.log(t)})}enable(){this.formGroup.controls.code.enable()}updateForm(t){console.log(t),this.formGroup.controls.code.setValue(t.code),this.formGroup.controls.type.setValue(this.typeList.find(o=>t.type==o.value)),this.formGroup.controls.description.setValue(t.description),this.formGroup.controls.code.disable(),this.isUpdate=!0}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.qu),e.Y36(f.F),e.Y36(m.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-form"]],outputs:{updateList:"updateList",buttonEnabled:"buttonEnabled"},decls:18,vars:15,consts:[[3,"formGroup"],[1,"row","p-formgrid","p-grid","mt-3"],[1,"p-field","col-6"],["for","Code"],["type","text","id","Code","pInputText","","formControlName","code","required","","autofocus","",1,"uppercase",3,"ngClass"],["class","p-error",4,"ngIf"],["for","Type"],["optionLabel","label","styleClass","w-100","placeholder","Selecciona el Tipo","formControlName","type",3,"options","ngClass"],[1,"p-field","mt-3"],["for","Description"],["type","text","id","Description","pInputText","","formControlName","description","placeholder","Coloque la Ciudad y el Estado","required","",3,"ngClass"],[1,"p-error"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Codigo"),e.qZA(),e._UZ(5,"input",4),e.YNc(6,_,2,0,"small",5),e.YNc(7,T,2,0,"small",5),e.qZA(),e.TgZ(8,"div",2)(9,"label",6),e._uU(10,"Tipo"),e.qZA(),e._UZ(11,"p-dropdown",7),e.YNc(12,F,2,0,"small",5),e.qZA()(),e.TgZ(13,"div",8)(14,"label",9),e._uU(15,"Descripci\xf3n"),e.qZA(),e._UZ(16,"input",10),e.YNc(17,L,2,0,"small",5),e.qZA()()),2&t&&(e.Q6J("formGroup",o.formGroup),e.xp6(5),e.Q6J("ngClass",e.VKq(9,d,o.formGroup.controls.code.touched&&(null==o.formGroup.controls.code.errors?null:o.formGroup.controls.code.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.code.touched&&(null==o.formGroup.controls.code.errors?null:o.formGroup.controls.code.errors.required)),e.xp6(1),e.Q6J("ngIf",null==o.formGroup.controls.code.errors?null:o.formGroup.controls.code.errors.maxlength),e.xp6(4),e.Q6J("options",o.typeList)("ngClass",e.VKq(11,d,o.formGroup.controls.type.touched&&(null==o.formGroup.controls.type.errors?null:o.formGroup.controls.type.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.type.touched&&(null==o.formGroup.controls.type.errors?null:o.formGroup.controls.type.errors.required)),e.xp6(4),e.Q6J("ngClass",e.VKq(13,d,o.formGroup.controls.description.touched&&(null==o.formGroup.controls.description.errors?null:o.formGroup.controls.description.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.description.touched&&(null==o.formGroup.controls.description.errors?null:o.formGroup.controls.description.errors.required)))},directives:[a._Y,a.JL,a.sg,a.Fj,b.o,a.JJ,a.u,a.Q7,p.mk,p.O5,v.Lt],styles:[".uppercase[_ngcontent-%COMP%]{text-transform:uppercase}"]}),r})();var A=n(6456),W=n(135),y=n(7773),w=n(3833),M=n(5315),G=n(845);function J(r,s){if(1&r){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",11),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),l=e.MAs(8);return i.hideDialog(),l.submit()}),e.qZA()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("disabled",!t.buttonIsEnabled)}}const E=function(){return{width:"450px"}},I=[{path:"",component:(()=>{class r{constructor(t,o,i,l,u){this.appConfig=t,this.tableManagmentService=o,this.warehouseManagementService=i,this.router=l,this.messageService=u,this.visibleDialog=!1,this.buttonIsEnabled=!1,this.warehouseList=[],this.page=this.appConfig.warehouseManagement,this.page=this.page.default,this.getWarehouseList(),this.tableManagmentService.buttonEvent.subscribe(x=>{this.selectedButton(x)})}ngOnInit(){}getWarehouseList(){var t=this;return(0,Z.Z)(function*(){t.warehouseList=yield t.warehouseManagementService.getWarehouses().toPromise().then(o=>o)})()}buttonEnabled(t){this.buttonIsEnabled=t}selectedButton(t){switch(this.visibleDialog=!0,t.buttonId){case 0:this.child.enable();break;case 1:this.child.updateForm(t.rowData)}}hideDialog(){this.visibleDialog=!1}redirect(){this.router.navigate(["main"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(A._),e.Y36(W.l),e.Y36(f.F),e.Y36(c.F0),e.Y36(m.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-warehouse-management"]],viewQuery:function(t,o){if(1&t&&e.Gf(C,5),2&t){let i;e.iGM(i=e.CRH())&&(o.child=i.first)}},decls:12,vars:11,consts:[[1,"row","p-5","m-0"],[1,"title"],[1,"pabiont-card"],[3,"headerList","headerCustomButtons","customButtons","dataList","searchField","canCreate"],["header","Agregar Almacenes y localidades","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"buttonEnabled","updateList"],["child",""],["class","m-0","pTemplate","footer"],[1,"d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"disabled","click"]],template:function(t,o){if(1&t){const i=e.EpF();e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"span",1),e._uU(3,"Gesti\xf3n de Almacenes y Localidades"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-basic-table",3),e.qZA()(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(u){return o.visibleDialog=u})("onHide",function(){return e.CHM(i),e.MAs(8).resetForm()}),e.TgZ(7,"app-create-form",5,6),e.NdJ("buttonEnabled",function(u){return o.buttonEnabled(u)})("updateList",function(){return o.getWarehouseList()}),e.qZA(),e.YNc(9,J,2,1,"ng-template",7),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return o.redirect()}),e.qZA()()}2&t&&(e.xp6(5),e.Q6J("headerList",o.page.tableConfiguration.headerList)("headerCustomButtons",o.page.tableConfiguration.headerCustomButtons)("customButtons",o.page.tableConfiguration.customButtons)("dataList",o.warehouseList)("searchField",o.page.tableConfiguration.searchField)("canCreate",!0),e.xp6(1),e.Akn(e.DdM(10,E)),e.Q6J("visible",o.visibleDialog)("modal",!0))},directives:[y.FN,w.N,M.V,C,m.jx,G.Hq],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),r})()}];let U=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.Bz.forChild(I)],c.Bz]}),r})();var q=n(732);let B=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.ez,U,q.T,G.hJ,b.j,M.S,a.UX,v.kW,y.EV]]}),r})()}}]);