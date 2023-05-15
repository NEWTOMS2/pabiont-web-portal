"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[212],{2212:(Y,d,r)=>{r.r(d),r.d(d,{RateManagementModule:()=>Q});var u=r(9808),p=r(7330),F=r(5861),e=r(5e3),i=r(3075);class T{constructor(n,t,o){this.aerial=n,this.maritime=t,this.company=o}}var g=r(4004),Z=r(3447),f=r(2470);let h=(()=>{class a{constructor(t,o){this.httpService=t,this.appConfig=o}getRate(t){return this.httpService.get(`${this.appConfig.config.url.rate}${t}`).pipe((0,g.U)(o=>o.data))}changeRate(t){return this.httpService.patch(`${this.appConfig.config.url.changeRate}`,t).pipe((0,g.U)(o=>o.data))}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(Z.O),e.LFG(f._))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var v=r(9783),b=r(7010),C=r(1424);function A(a,n){1&a&&(e.TgZ(0,"small",12),e._uU(1," El campo no puede ser cero o estar vac\xedo. "),e.qZA())}function _(a,n){1&a&&(e.TgZ(0,"small",12),e._uU(1," El campo no puede ser cero o estar vac\xedo. "),e.qZA())}function E(a,n){1&a&&(e.TgZ(0,"small",13),e._uU(1,"El campo es obligatorio."),e.qZA())}const c=function(a){return{"ng-dirty ng-invalid":a}};let M=(()=>{class a{constructor(t,o,l){this.formBuilder=t,this.rateManagementService=o,this.messageService=l,this.isUpdate=!1,this.updateList=new e.vpe,this.buttonEnabled=new e.vpe,this.resetForm()}ngOnInit(){}resetForm(){this.formGroup=this.formBuilder.group({aerial:["",[i.kI.required,i.kI.pattern(/^\d*\.?\d*$/)]],maritime:["",[i.kI.required,i.kI.pattern(/^\d*\.?\d*$/)]],company:["",i.kI.required]}),this.formGroup.statusChanges.subscribe(t=>{this.buttonEnabled.emit("VALID"==t)})}submit(){this.rateRow=new T(parseFloat(this.formGroup.controls.aerial.value),parseFloat(this.formGroup.controls.maritime.value),1),console.log(this.rateRow),this.rateManagementService.changeRate(this.rateRow).subscribe(t=>{this.messageService.add({severity:"success",summary:"Tarifa modificada correctamente.",detail:""}),this.updateList.emit()},t=>{this.messageService.add({severity:"error",summary:"Ha ocurrido un error al modificar las tarifas.",detail:""}),console.log(t)})}updateForm(t){console.log("DATA",t),this.formGroup.controls.aerial.setValue(t.aerial),this.formGroup.controls.maritime.setValue(t.maritime),this.formGroup.controls.company.setValue(t.company_name),this.formGroup.controls.company.disable()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(i.qu),e.Y36(h),e.Y36(v.ez))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-create-form"]],outputs:{updateList:"updateList",buttonEnabled:"buttonEnabled"},decls:17,vars:19,consts:[[3,"formGroup"],[1,"row","p-formgrid","p-grid","mt-3"],[1,"p-field","col-6"],["for","Aerial"],["inputId","aerialId","mode","decimal","formControlName","aerial","placeholder","0",1,"w-100",3,"minFractionDigits","maxFractionDigits","maxlength","ngClass"],["class","p-error d-block",4,"ngIf"],["for","Maritime"],["inputId","maritimeId","mode","decimal","formControlName","maritime","placeholder","0",1,"w-100",3,"minFractionDigits","maxFractionDigits","maxlength","ngClass"],[1,"p-field","mt-3"],["for","Company"],["type","text","id","Company","pInputText","","formControlName","company","required","",3,"ngClass"],["class","p-error",4,"ngIf"],[1,"p-error","d-block"],[1,"p-error"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Tarifa A\xe9rea"),e.qZA(),e._UZ(5,"p-inputNumber",4),e.YNc(6,A,2,0,"small",5),e.qZA(),e.TgZ(7,"div",2)(8,"label",6),e._uU(9,"Tarifa Mar\xedtima"),e.qZA(),e._UZ(10,"p-inputNumber",7),e.YNc(11,_,2,0,"small",5),e.qZA()(),e.TgZ(12,"div",8)(13,"label",9),e._uU(14,"Compa\xf1\xeda"),e.qZA(),e._UZ(15,"input",10),e.YNc(16,E,2,0,"small",11),e.qZA()()),2&t&&(e.Q6J("formGroup",o.formGroup),e.xp6(5),e.Q6J("minFractionDigits",1)("maxFractionDigits",2)("maxlength",6)("ngClass",e.VKq(13,c,o.formGroup.controls.aerial.touched&&(null==o.formGroup.controls.aerial.errors?null:o.formGroup.controls.aerial.errors.required)||o.formGroup.controls.aerial.value<=0&&null!=o.formGroup.controls.aerial.value)),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.aerial.touched&&(null==o.formGroup.controls.aerial.errors?null:o.formGroup.controls.aerial.errors.required)||o.formGroup.controls.aerial.value<=0&&null!=o.formGroup.controls.aerial.value),e.xp6(4),e.Q6J("minFractionDigits",1)("maxFractionDigits",2)("maxlength",6)("ngClass",e.VKq(15,c,o.formGroup.controls.maritime.touched&&(null==o.formGroup.controls.maritime.errors?null:o.formGroup.controls.maritime.errors.required)||o.formGroup.controls.maritime.value<=0&&null!=o.formGroup.controls.maritime.value)),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.maritime.touched&&(null==o.formGroup.controls.maritime.errors?null:o.formGroup.controls.maritime.errors.required)||o.formGroup.controls.maritime.value<=0&&null!=o.formGroup.controls.maritime.value),e.xp6(4),e.Q6J("ngClass",e.VKq(17,c,o.formGroup.controls.company.touched&&(null==o.formGroup.controls.company.errors?null:o.formGroup.controls.company.errors.required))),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.company.touched&&(null==o.formGroup.controls.company.errors?null:o.formGroup.controls.company.errors.required)))},directives:[i._Y,i.JL,i.sg,b.Rn,i.JJ,i.u,i.nD,u.mk,u.O5,i.Fj,C.o,i.Q7],styles:[""]}),a})();var I=r(135),G=r(7773),L=r(3833),R=r(5315),y=r(845);function D(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(),s=e.MAs(8);return l.hideDialog(),s.submit()}),e.qZA()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("disabled",!t.buttonIsEnabled)}}const J=function(){return{width:"450px"}},S=[{path:"",component:(()=>{class a{constructor(t,o,l,s){this.appConfig=t,this.tableManagmentService=o,this.rateManagementService=l,this.router=s,this.visibleDialog=!1,this.buttonIsEnabled=!1,this.rateList=[],this.page=this.appConfig.rateManagement,this.page=this.page.default,this.getRateList(),this.tableManagmentService.buttonEvent.subscribe(m=>{this.selectedButton(m)})}ngOnInit(){console.log("hola")}getRateList(){var t=this;return(0,F.Z)(function*(){t.rateList=yield t.rateManagementService.getRate(1).toPromise().then(o=>[o]),console.log(t.rateList)})()}buttonEnabled(t){this.buttonIsEnabled=t}selectedButton(t){1===(this.visibleDialog=!0,t.buttonId)&&this.child.updateForm(t.rowData)}hideDialog(){this.visibleDialog=!1}redirect(){this.router.navigate(["main"])}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(f._),e.Y36(I.l),e.Y36(h),e.Y36(p.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-rate-management"]],viewQuery:function(t,o){if(1&t&&e.Gf(M,5),2&t){let l;e.iGM(l=e.CRH())&&(o.child=l.first)}},decls:12,vars:9,consts:[[1,"row","p-5","m-0"],[1,"title"],[1,"pabiont-card"],[3,"headerList","customButtons","dataList","canCreate"],["header","Agregar Almacenes y localidades","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"buttonEnabled","updateList"],["child",""],["class","m-0","pTemplate","footer"],[1,"d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"disabled","click"]],template:function(t,o){if(1&t){const l=e.EpF();e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"span",1),e._uU(3,"Gesti\xf3n de Tarifas"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-basic-table",3),e.qZA()(),e.TgZ(6,"p-dialog",4),e.NdJ("visibleChange",function(m){return o.visibleDialog=m})("onHide",function(){return e.CHM(l),e.MAs(8).resetForm()}),e.TgZ(7,"app-create-form",5,6),e.NdJ("buttonEnabled",function(m){return o.buttonEnabled(m)})("updateList",function(){return o.getRateList()}),e.qZA(),e.YNc(9,D,2,1,"ng-template",7),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return o.redirect()}),e.qZA()()}2&t&&(e.xp6(5),e.Q6J("headerList",o.page.tableConfiguration.headerList)("customButtons",o.page.tableConfiguration.customButtons)("dataList",o.rateList)("canCreate",!0),e.xp6(1),e.Akn(e.DdM(8,J)),e.Q6J("visible",o.visibleDialog)("modal",!0))},directives:[G.FN,L.N,R.V,M,v.jx,y.Hq],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),a})()}];let N=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.Bz.forChild(S)],p.Bz]}),a})();var U=r(732),B=r(4036);let Q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[u.ez,N,U.T,y.hJ,C.j,b.L$,R.S,i.UX,B.kW,G.EV]]}),a})()}}]);