"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[152],{9643:(J,x,r)=>{r.d(x,{D:()=>s});var p=r(4004),m=r(5e3),c=r(3447),e=r(6456);let s=(()=>{class g{constructor(d,h){this.httpService=d,this.appConfig=h}saveUser(d,h){return h?this.httpService.patch(`${this.appConfig.config.url.saveUser}`,d).pipe((0,p.U)(u=>u.data)):this.httpService.post(`${this.appConfig.config.url.saveUser}`,d).pipe((0,p.U)(u=>u.data))}getUserClient(){return this.httpService.get(`${this.appConfig.config.url.getUserClient}`).pipe((0,p.U)(d=>d.data))}getUserAdmin(){return this.httpService.get(`${this.appConfig.config.url.getUserAdmin}`).pipe((0,p.U)(d=>d.data))}}return g.\u0275fac=function(d){return new(d||g)(m.LFG(c.O),m.LFG(e._))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},4152:(J,x,r)=>{r.r(x),r.d(x,{BillingModule:()=>Ve});var p=r(9808),m=r(7330),c=r(5861),e=r(5e3),s=r(3075);class g{constructor(o,t,i,l,a,_,v,T,q,$e,He,We,Ge,Ke,Xe,et){this.description=o,this.date=i,this.due_date=l,this.subtotal=a,this.total=_,this.shipper=v,this.consignee=T,this.agent=q,this.bill_to=$e,this.company=He,this.status=We,this.invoice_number=t,this.package_information=Ge,this.payment_type=Ke,this.origin=Xe,this.destination=et}}var f=r(6456),d=r(9643),h=r(8253),u=r(6399),U=r(7729),b=r(3833),w=r(5652),y=r(1424),M=r(4036),Z=r(9783);function k(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedShipper.first_name," ",t.selectedShipper.last_name," ")}}function P(n,o){if(1&n&&e.YNc(0,k,3,2,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedShipper)}}function S(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function F(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedBillTo.first_name," ",t.selectedBillTo.last_name," ")}}function Y(n,o){if(1&n&&e.YNc(0,F,3,2,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedBillTo)}}function Q(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function j(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedConsignee.first_name," ",t.selectedConsignee.last_name," ")}}function D(n,o){if(1&n&&e.YNc(0,j,3,2,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedConsignee)}}function z(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function E(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedAgent.first_name," ",t.selectedAgent.last_name," ")}}function O(n,o){if(1&n&&e.YNc(0,E,3,2,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedAgent)}}function R(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function V(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedBranch.description," ")}}function $(n,o){if(1&n&&e.YNc(0,V,3,1,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedBranch)}}function H(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}function W(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedOrigin.description," ")}}function G(n,o){if(1&n&&e.YNc(0,W,3,1,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedOrigin)}}function K(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}function X(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedDestination.description," ")}}function ee(n,o){if(1&n&&e.YNc(0,X,3,1,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedDestination)}}function te(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}function ne(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedLocation.description," ")}}function ie(n,o){if(1&n&&e.YNc(0,ne,3,1,"div",23),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedLocation)}}function oe(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",24),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}const I=function(n){return{"ng-dirty ng-invalid":n}};let L=(()=>{class n{constructor(t,i,l,a,_,v,T,q){this.appConfig=t,this.usersManagementService=i,this.invoiceManagementService=l,this.warehouseManagementService=a,this.datepipe=_,this.formBuilder=v,this.alertService=T,this.router=q,this.today=new Date,this.packageRequest=[],this.finalizeStep=new e.vpe,this.isValid=new e.vpe,this.page=this.appConfig.invoiceCreation,this.page=this.page.default,this.resetForm(),this.getClientList(),this.getUserList(),this.getLastInvoice(),this.getWarehouseList()}ngOnInit(){}resetForm(){this.billingsForm=this.formBuilder.group({date:[this.today,[s.kI.required]],invoice:[""],shipper:["",[s.kI.required]],consignee:["",[s.kI.required]],agent:["",[s.kI.required]],bill_to:["",[s.kI.required]],tracking:[""],branch:["",[s.kI.required]],origin_destination:["",[s.kI.required]],final_destination:["",[s.kI.required]],location:["",[s.kI.required]]}),this.billingsForm.controls.invoice.disable(),this.billingsForm.statusChanges.subscribe(t=>{this.isValid.emit(!("VALID"==t))})}getClientList(){var t=this;return(0,c.Z)(function*(){t.clientList=yield t.usersManagementService.getUserClient().toPromise().then(i=>i)})()}getUserList(){var t=this;return(0,c.Z)(function*(){t.userList=yield t.usersManagementService.getUserAdmin().toPromise().then(i=>i)})()}getLastInvoice(){var t=this;return(0,c.Z)(function*(){let i=yield t.invoiceManagementService.getLastInvoice().toPromise().then(a=>a.last_invoice),l=yield t.invoiceManagementService.getPrefix().toPromise().then(a=>a.prefix);i++,t.billingsForm.controls.invoice.setValue(`${l}-${i}-${t.datepipe.transform(t.today,"yy")}`)})()}getWarehouseList(){var t=this;return(0,c.Z)(function*(){t.warehouseList=yield t.warehouseManagementService.getWarehouses().toPromise().then(i=>i),t.warehouseList=t.warehouseList.filter(i=>"Localidad"==i.type)})()}setInvoiceInformation(t){this.packageList.forEach(i=>{this.packageRequest.push(i.package_information)}),this.billingInformation=new g(t,this.billingsForm.controls.invoice.value,this.datepipe.transform(this.today,"yyyy-MM-dd"),this.datepipe.transform(this.today,"yyyy-MM-dd"),this.totalPayment,this.totalPayment,this.selectedShipper.code,this.selectedConsignee.code,this.selectedAgent.code,this.selectedBillTo.code,1,11,this.packageRequest,"Cash",this.billingsForm.controls.origin_destination.value.id,this.billingsForm.controls.final_destination.value.id),this.invoiceManagementService.createInvoice(this.billingInformation).subscribe(i=>{this.alertService.showToast({severity:"success",summary:"Factura y Paquetes creados correctamente.",detail:""}),this.router.navigate(["main"])},i=>{this.alertService.showToast({severity:"error",summary:"Ha ocurrido un error al generar la Factura y los Paquetes.",detail:""}),console.log(i)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f._),e.Y36(d.D),e.Y36(h.d),e.Y36(u.F),e.Y36(p.uU),e.Y36(s.qu),e.Y36(U.c),e.Y36(m.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-billing-information"]],inputs:{packageList:"packageList",totalPayment:"totalPayment"},outputs:{finalizeStep:"finalizeStep",isValid:"isValid"},decls:70,vars:50,consts:[[1,"row","m-0","p-4"],[1,"pabiont-card"],[3,"headerList","dataList","canCreate"],[1,"row","m-0","text-end","payment"],[1,"col-12","px-5"],[3,"formGroup"],[1,"col-6"],[1,"pabiont-card","row","m-0","p-3"],[1,"subtitle","mb-4"],[1,"col-6","px-3"],["inputId","basic","formControlName","date","dateFormat","dd/mm/yy","appendTo","body","styleClass","w-100","placeholder","fecha",3,"showIcon","disabled","ngClass"],["type","text","pInputText","","formControlName","invoice","required","",1,"w-100",3,"ngClass","disabled"],[1,"col-6","px-3","mt-3"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","shipper","placeholder","Remitente",3,"options","ngModel","filter","showClear","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","item"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","bill_to","placeholder","Facturador",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","consignee","placeholder","Destinatario",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","agent","placeholder","Agente",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","branch","placeholder","Sucursal",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","origin_destination","placeholder","Lugar de Origen",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","final_destination","placeholder","Lugar de Destino",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","location","placeholder","Locaci\xf3n",3,"options","ngModel","filter","showClear","ngModelChange"],[4,"ngIf"],[1,"filterSubtitle"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-basic-table",2),e.TgZ(3,"div",3)(4,"div",4)(5,"span")(6,"strong"),e._uU(7,"Costo Total: "),e.qZA(),e._uU(8),e.qZA()()()()(),e.TgZ(9,"form",5)(10,"div",0)(11,"div",6)(12,"div",7)(13,"div",8)(14,"span"),e._uU(15,"Detalle de factura"),e.qZA()(),e.TgZ(16,"div",9)(17,"div"),e._UZ(18,"p-calendar",10),e.qZA()(),e.TgZ(19,"div",9)(20,"div"),e._UZ(21,"input",11),e.qZA()(),e.TgZ(22,"div",12)(23,"div")(24,"p-dropdown",13),e.NdJ("ngModelChange",function(a){return i.selectedShipper=a}),e.YNc(25,P,1,1,"ng-template",14),e.YNc(26,S,5,3,"ng-template",15),e.qZA()()(),e.TgZ(27,"div",12)(28,"div")(29,"p-dropdown",16),e.NdJ("ngModelChange",function(a){return i.selectedBillTo=a}),e.YNc(30,Y,1,1,"ng-template",14),e.YNc(31,Q,5,3,"ng-template",15),e.qZA()()(),e.TgZ(32,"div",12)(33,"div")(34,"p-dropdown",17),e.NdJ("ngModelChange",function(a){return i.selectedConsignee=a}),e.YNc(35,D,1,1,"ng-template",14),e.YNc(36,z,5,3,"ng-template",15),e.qZA()()(),e.TgZ(37,"div",12)(38,"div")(39,"p-dropdown",18),e.NdJ("ngModelChange",function(a){return i.selectedAgent=a}),e.YNc(40,O,1,1,"ng-template",14),e.YNc(41,R,5,3,"ng-template",15),e.qZA()()()()(),e.TgZ(42,"div",6)(43,"div",7)(44,"div",8)(45,"span"),e._uU(46,"Detalle de Localizaci\xf3n"),e.qZA()(),e.TgZ(47,"div",9)(48,"div"),e._UZ(49,"input",11),e.qZA()(),e.TgZ(50,"div",9)(51,"div")(52,"p-dropdown",19),e.NdJ("ngModelChange",function(a){return i.selectedBranch=a}),e.YNc(53,$,1,1,"ng-template",14),e.YNc(54,H,5,2,"ng-template",15),e.qZA()()(),e.TgZ(55,"div",12)(56,"div")(57,"p-dropdown",20),e.NdJ("ngModelChange",function(a){return i.selectedOrigin=a}),e.YNc(58,G,1,1,"ng-template",14),e.YNc(59,K,5,2,"ng-template",15),e.qZA()()(),e.TgZ(60,"div",12)(61,"div")(62,"p-dropdown",21),e.NdJ("ngModelChange",function(a){return i.selectedDestination=a}),e.YNc(63,ee,1,1,"ng-template",14),e.YNc(64,te,5,2,"ng-template",15),e.qZA()()(),e.TgZ(65,"div",12)(66,"div")(67,"p-dropdown",22),e.NdJ("ngModelChange",function(a){return i.selectedLocation=a}),e.YNc(68,ie,1,1,"ng-template",14),e.YNc(69,oe,5,2,"ng-template",15),e.qZA()()()()()()()),2&t&&(e.xp6(2),e.Q6J("headerList",i.page.tableConfiguration.headerList)("dataList",i.packageList)("canCreate",!0),e.xp6(6),e.Oqu(i.totalPayment),e.xp6(1),e.Q6J("formGroup",i.billingsForm),e.xp6(9),e.Q6J("showIcon",!0)("disabled",!0)("ngClass",e.VKq(44,I,i.billingsForm.controls.date.touched&&(null==i.billingsForm.controls.date.errors?null:i.billingsForm.controls.date.errors.required))),e.xp6(3),e.Q6J("ngClass",e.VKq(46,I,i.billingsForm.controls.invoice.touched&&(null==i.billingsForm.controls.invoice.errors?null:i.billingsForm.controls.invoice.errors.required)))("disabled",!0),e.xp6(3),e.Q6J("options",i.clientList)("ngModel",i.selectedShipper)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.clientList)("ngModel",i.selectedBillTo)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.clientList)("ngModel",i.selectedConsignee)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.userList)("ngModel",i.selectedAgent)("filter",!0)("showClear",!0),e.xp6(10),e.Q6J("ngClass",e.VKq(48,I,i.billingsForm.controls.invoice.touched&&(null==i.billingsForm.controls.invoice.errors?null:i.billingsForm.controls.invoice.errors.required)))("disabled",!0),e.xp6(3),e.Q6J("options",i.warehouseList)("ngModel",i.selectedBranch)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.warehouseList)("ngModel",i.selectedOrigin)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.warehouseList)("ngModel",i.selectedDestination)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.warehouseList)("ngModel",i.selectedLocation)("filter",!0)("showClear",!0))},directives:[b.N,s._Y,s.JL,s.sg,w.f,s.JJ,s.u,p.mk,s.Fj,y.o,s.Q7,M.Lt,Z.jx,p.O5],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.subtitle[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:27px;letter-spacing:.04em;color:#000}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}.pabiont-card[_ngcontent-%COMP%]   .filterSubtitle[_ngcontent-%COMP%]{font-size:14;color:#00000040}.pabiont-card[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]{border-top:1px solid #e4e4e4;font-size:18px;font-weight:600;padding:24px}  .p-dropdown{width:100%}"]}),n})();class ae{constructor(o,t,i,l,a,_,v,T){this.weight=o,this.high=t,this.width=i,this.long=l,this.description=a,this.bill=_,this.shipping_type=T,this.company=v}}var le=r(135),se=r(5522),A=r(5315);let N=(()=>{class n{constructor(t,i,l,a){this.el=t,this.ngModel=i,this.control=l,this.cd=a,this.onResize=new e.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(t){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(t){this.autoResize&&this.resize(t)}onBlur(t){this.autoResize&&this.resize(t)}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(s.On,8),e.Y36(s.a5,8),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(t,i){1&t&&e.NdJ("input",function(a){return i.onInput(a)})("focus",function(a){return i.onFocus(a)})("blur",function(a){return i.onBlur(a)}),2&t&&e.ekj("p-filled",i.filled)("p-inputtextarea-resizable",i.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),n})(),re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez]]}),n})();var C=r(845);function pe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().displayDescription=!1}),e.qZA(),e.TgZ(1,"p-button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(),a=e.MAs(2);return l.displayDescription=!1,l.addToList(),a.clearPackageInformation()}),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.modalIsValid)}}const de=function(){return{width:"50vw"}};let ce=(()=>{class n{constructor(t,i){this.appConfig=t,this.tableManagmentService=i,this.packageList=[],this.displayDescription=!1,this.description="",this.modalIsValid=!0,this.FinalizeStep=new e.vpe,this.page=this.appConfig.invoiceCreation,this.page=this.page.default}ngOnInit(){}addToList(){this.packageRequest=new ae(this.packageInformation.weight,this.packageInformation.high,this.packageInformation.width,this.packageInformation.long,this.description,0,1,this.packageInformation.type);let t=Number(this.packageInformation.high*this.packageInformation.width*this.packageInformation.long).toFixed(0);this.packageList.push({size:`${this.packageInformation.high}x${this.packageInformation.width}x${this.packageInformation.long}`,weight:this.packageInformation.weight,volume:`${t}m3`,description:this.description,price:this.packageInformation.price.toFixed(2),type:this.packageInformation.type,package_information:this.packageRequest}),this.description="",this.modalIsValid=!0,this.FinalizeStep.emit(this.packageList)}prueba(){console.log(this.packageInformation)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f._),e.Y36(le.l))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-quote-package"]],outputs:{FinalizeStep:"FinalizeStep"},decls:10,vars:10,consts:[[1,"row"],[3,"isSelectable","isClicked"],["child",""],[1,"row","m-0","p-4"],[1,"pabiont-card"],[3,"headerList","customButtons","dataList","canCreate"],["header","Descripcion del paquete",3,"visible","visibleChange"],[1,"row","justify-content-center"],["rows","5","cols","30","pInputTextarea","",3,"ngModel","ngModelChange"],["pTemplate","footer"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["icon","pi pi-check","label","Aceptar","styleClass","p-button-text",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"app-quotes",1,2),e.NdJ("isClicked",function(a){return i.packageInformation=a,i.displayDescription=!0}),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4),e._UZ(5,"app-basic-table",5),e.qZA()(),e.TgZ(6,"p-dialog",6),e.NdJ("visibleChange",function(a){return i.displayDescription=a}),e.TgZ(7,"div",7)(8,"textarea",8),e.NdJ("ngModelChange",function(a){return i.description=a})("ngModelChange",function(){return i.modalIsValid=!1}),e.qZA()(),e.YNc(9,pe,2,1,"ng-template",9),e.qZA()),2&t&&(e.xp6(1),e.Q6J("isSelectable",!0),e.xp6(4),e.Q6J("headerList",i.page.tableConfiguration.headerList)("customButtons",i.page.tableConfiguration.customButtons)("dataList",i.packageList)("canCreate",!0),e.xp6(1),e.Akn(e.DdM(9,de)),e.Q6J("visible",i.displayDescription),e.xp6(2),e.Q6J("ngModel",i.description))},directives:[se.z,b.N,A.V,s.Fj,N,s.JJ,s.On,Z.jx,C.Hq,C.zx],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),n})();function ge(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedShipper.first_name," ",t.selectedShipper.last_name," ")}}function me(n,o){if(1&n&&e.YNc(0,ge,3,2,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedShipper)}}function _e(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function ue(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedBillTo.first_name," ",t.selectedBillTo.last_name," ")}}function fe(n,o){if(1&n&&e.YNc(0,ue,3,2,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedBillTo)}}function he(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function Ce(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedConsignee.first_name," ",t.selectedConsignee.last_name," ")}}function ve(n,o){if(1&n&&e.YNc(0,Ce,3,2,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedConsignee)}}function Te(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function xe(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.AsE(" ",t.selectedAgent.first_name," ",t.selectedAgent.last_name," ")}}function Ze(n,o){if(1&n&&e.YNc(0,xe,3,2,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedAgent)}}function be(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.AsE(" ",t.first_name," ",t.last_name," "),e.xp6(2),e.hij(" ",t.code," ")}}function we(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedBranch.description," ")}}function ye(n,o){if(1&n&&e.YNc(0,we,3,1,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedBranch)}}function Me(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}function Ie(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedOrigin.description," ")}}function Ae(n,o){if(1&n&&e.YNc(0,Ie,3,1,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedOrigin)}}function Be(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}function qe(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedDestination.description," ")}}function Le(n,o){if(1&n&&e.YNc(0,qe,3,1,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedDestination)}}function Ne(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}function Je(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.hij(" ",t.selectedLocation.description," ")}}function Ue(n,o){if(1&n&&e.YNc(0,Je,3,1,"div",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.selectedLocation)}}function ke(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e._uU(4),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.description," "),e.xp6(2),e.hij(" ",t.code," ")}}const B=function(n){return{"ng-dirty ng-invalid":n}};let Pe=(()=>{class n{constructor(t,i,l,a,_){this.appConfig=t,this.formBuilder=i,this.usersManagementService=l,this.warehouseManagementService=a,this.datepipe=_,this.packageList=[],console.log("test:",this.paymentInformation),this.page=this.appConfig.invoiceCreation,this.page=this.page.default,this.resetForm(),this.getClientList(),this.getUserList(),this.getWarehouseList()}ngOnInit(){}resetForm(){this.billingsForm=this.formBuilder.group({date:["",[s.kI.required]],invoice:["",[s.kI.required]],shipper:["",[s.kI.required]],consignee:["",[s.kI.required]],agent:["",[s.kI.required]],bill_to:["",[s.kI.required]],tracking:["",[s.kI.required]],branch:["",[s.kI.required]],origin_destination:["",[s.kI.required]],final_destination:["",[s.kI.required]],location:["",[s.kI.required]]}),this.billingsForm.controls.invoice.disable()}getClientList(){var t=this;return(0,c.Z)(function*(){t.clientList=yield t.usersManagementService.getUserClient().toPromise().then(i=>i)})()}getUserList(){var t=this;return(0,c.Z)(function*(){t.userList=yield t.usersManagementService.getUserAdmin().toPromise().then(i=>i)})()}getWarehouseList(){var t=this;return(0,c.Z)(function*(){t.warehouseList=yield t.warehouseManagementService.getWarehouses().toPromise().then(i=>i),t.warehouseList=t.warehouseList.filter(i=>"Localidad"==i.type)})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f._),e.Y36(s.qu),e.Y36(d.D),e.Y36(u.F),e.Y36(p.uU))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-payment-confirmation"]],inputs:{paymentInformation:"paymentInformation"},decls:58,vars:50,consts:[[3,"formGroup"],[1,"row","m-0","p-4"],[1,"col-6"],[1,"pabiont-card","row","m-0","p-3"],[1,"col-6","px-3"],["inputId","basic","formControlName","date","dateFormat","dd/mm/yy","appendTo","body","styleClass","w-100","placeholder","fecha",3,"showIcon","disabled","ngClass"],["type","text","pInputText","","formControlName","invoice","required","",1,"w-100",3,"ngClass","disabled"],[1,"col-6","px-3","mt-3"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","shipper","placeholder","Remitente",3,"options","ngModel","filter","showClear","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","item"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","bill_to","placeholder","Facturador",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","consignee","placeholder","Destinatario",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","first_name","filterBy","first_name,last_name,code","stleClass","w-100","formControlName","agent","placeholder","Agente",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","branch","placeholder","Sucursal",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","origin_destination","placeholder","Lugar de Origen",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","final_destination","placeholder","Lugar de Destino",3,"options","ngModel","filter","showClear","ngModelChange"],["optionLabel","description","filterBy","description,code","stleClass","w-100","formControlName","location","placeholder","Locaci\xf3n",3,"options","ngModel","filter","showClear","ngModelChange"],[1,"pabiont-card"],[3,"headerList","customButtons","dataList","canCreate"],[4,"ngIf"],[1,"filterSubtitle"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div"),e._UZ(6,"p-calendar",5),e.qZA()(),e.TgZ(7,"div",4)(8,"div"),e._UZ(9,"input",6),e.qZA()(),e.TgZ(10,"div",7)(11,"div")(12,"p-dropdown",8),e.NdJ("ngModelChange",function(a){return i.selectedShipper=a}),e.YNc(13,me,1,1,"ng-template",9),e.YNc(14,_e,5,3,"ng-template",10),e.qZA()()(),e.TgZ(15,"div",7)(16,"div")(17,"p-dropdown",11),e.NdJ("ngModelChange",function(a){return i.selectedBillTo=a}),e.YNc(18,fe,1,1,"ng-template",9),e.YNc(19,he,5,3,"ng-template",10),e.qZA()()(),e.TgZ(20,"div",7)(21,"div")(22,"p-dropdown",12),e.NdJ("ngModelChange",function(a){return i.selectedConsignee=a}),e.YNc(23,ve,1,1,"ng-template",9),e.YNc(24,Te,5,3,"ng-template",10),e.qZA()()(),e.TgZ(25,"div",7)(26,"div")(27,"p-dropdown",13),e.NdJ("ngModelChange",function(a){return i.selectedAgent=a}),e.YNc(28,Ze,1,1,"ng-template",9),e.YNc(29,be,5,3,"ng-template",10),e.qZA()()()()(),e.TgZ(30,"div",2)(31,"div",3)(32,"div",4)(33,"div"),e._UZ(34,"input",6),e.qZA()(),e.TgZ(35,"div",4)(36,"div")(37,"p-dropdown",14),e.NdJ("ngModelChange",function(a){return i.selectedBranch=a}),e.YNc(38,ye,1,1,"ng-template",9),e.YNc(39,Me,5,2,"ng-template",10),e.qZA()()(),e.TgZ(40,"div",7)(41,"div")(42,"p-dropdown",15),e.NdJ("ngModelChange",function(a){return i.selectedOrigin=a}),e.YNc(43,Ae,1,1,"ng-template",9),e.YNc(44,Be,5,2,"ng-template",10),e.qZA()()(),e.TgZ(45,"div",7)(46,"div")(47,"p-dropdown",16),e.NdJ("ngModelChange",function(a){return i.selectedDestination=a}),e.YNc(48,Le,1,1,"ng-template",9),e.YNc(49,Ne,5,2,"ng-template",10),e.qZA()()(),e.TgZ(50,"div",7)(51,"div")(52,"p-dropdown",17),e.NdJ("ngModelChange",function(a){return i.selectedLocation=a}),e.YNc(53,Ue,1,1,"ng-template",9),e.YNc(54,ke,5,2,"ng-template",10),e.qZA()()()()()()(),e.TgZ(55,"div",1)(56,"div",18),e._UZ(57,"app-basic-table",19),e.qZA()()),2&t&&(e.Q6J("formGroup",i.billingsForm),e.xp6(6),e.Q6J("showIcon",!0)("disabled",!0)("ngClass",e.VKq(44,B,i.billingsForm.controls.date.touched&&(null==i.billingsForm.controls.date.errors?null:i.billingsForm.controls.date.errors.required))),e.xp6(3),e.Q6J("ngClass",e.VKq(46,B,i.billingsForm.controls.invoice.touched&&(null==i.billingsForm.controls.invoice.errors?null:i.billingsForm.controls.invoice.errors.required)))("disabled",!0),e.xp6(3),e.Q6J("options",i.clientList)("ngModel",i.selectedShipper)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.clientList)("ngModel",i.selectedBillTo)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.clientList)("ngModel",i.selectedConsignee)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.userList)("ngModel",i.selectedAgent)("filter",!0)("showClear",!0),e.xp6(7),e.Q6J("ngClass",e.VKq(48,B,i.billingsForm.controls.invoice.touched&&(null==i.billingsForm.controls.invoice.errors?null:i.billingsForm.controls.invoice.errors.required)))("disabled",!0),e.xp6(3),e.Q6J("options",i.warehouseList)("ngModel",i.selectedBranch)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.warehouseList)("ngModel",i.selectedOrigin)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.warehouseList)("ngModel",i.selectedDestination)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("options",i.warehouseList)("ngModel",i.selectedLocation)("filter",!0)("showClear",!0),e.xp6(5),e.Q6J("headerList",i.page.tableConfiguration.headerList)("customButtons",i.page.tableConfiguration.customButtons)("dataList",i.packageList)("canCreate",!0))},directives:[s._Y,s.JL,s.sg,w.f,s.JJ,s.u,p.mk,s.Fj,y.o,s.Q7,M.Lt,Z.jx,p.O5,b.N],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),n})();function Se(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-quote-package",10),e.NdJ("FinalizeStep",function(l){e.CHM(t);const a=e.oxw();return a.packageList=l,a.isValid=!1})("packageRequest",function(l){return e.CHM(t),e.oxw().packageRequest=l}),e.qZA()()}}function Fe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"app-billing-information",11,12),e.NdJ("finalizeStep",function(){return e.CHM(t),e.oxw().isValid=!1})("isValid",function(l){return e.CHM(t),e.oxw().isValid=l}),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("packageList",t.packageList)("totalPayment",t.totalPayment)}}function Ye(n,o){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-payment-confirmation",13),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("paymentInformation",t.billingInformation)}}function Qe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){return e.CHM(t),e.oxw().displayDescription=!1}),e.qZA(),e.TgZ(1,"p-button",15),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return l.displayDescription=!1,l.nextStep(!0)}),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.modalIsValid)}}const je=function(){return{width:"50vw"}},De=[{path:"",component:(()=>{class n{constructor(){this.currentStep=1,this.displayDescription=!1,this.description="",this.isValid=!0,this.modalIsValid=!1}ngOnInit(){}nextStep(t=!1){if(t)this.billingInformationComponent.setInvoiceInformation(this.description);else switch(this.currentStep){case 1:this.totalPayment=0,this.packageList.forEach(i=>{this.totalPayment=Number(i.price)+this.totalPayment}),console.log(this.packageRequest),this.isValid=!0,this.currentStep=2;break;case 2:this.modalIsValid=!0,this.displayDescription=!0}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-billing"]],viewQuery:function(t,i){if(1&t&&e.Gf(L,5),2&t){let l;e.iGM(l=e.CRH())&&(i.billingInformationComponent=l.first)}},decls:13,vars:9,consts:[[4,"ngIf"],[1,"row","m-0","justify-content-between"],[1,"col","d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined"],[1,"col","d-flex","justify-content-end","px-5","mb-3"],["pButton","","pRipple","","label","Confirmar",1,"p-button-outlined",3,"disabled","click"],["header","Descripcion del paquete",3,"visible","visibleChange"],[1,"row","justify-content-center"],["rows","5","cols","30","pInputTextarea","",3,"ngModel","ngModelChange"],["pTemplate","footer"],[3,"FinalizeStep","packageRequest"],[3,"packageList","totalPayment","finalizeStep","isValid"],["child",""],[3,"paymentInformation"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["icon","pi pi-check","label","Aceptar","styleClass","p-button-text",3,"disabled","click"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,Se,2,0,"div",0),e.YNc(2,Fe,3,2,"div",0),e.YNc(3,Ye,2,1,"div",0),e.TgZ(4,"div",1)(5,"div",2),e._UZ(6,"button",3),e.qZA(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return i.nextStep()}),e.qZA()()()(),e.TgZ(9,"p-dialog",6),e.NdJ("visibleChange",function(a){return i.displayDescription=a}),e.TgZ(10,"div",7)(11,"textarea",8),e.NdJ("ngModelChange",function(a){return i.description=a})("ngModelChange",function(){return i.modalIsValid=!1}),e.qZA()(),e.YNc(12,Qe,2,1,"ng-template",9),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",1===i.currentStep),e.xp6(1),e.Q6J("ngIf",2===i.currentStep),e.xp6(1),e.Q6J("ngIf",3===i.currentStep),e.xp6(5),e.Q6J("disabled",i.isValid),e.xp6(1),e.Akn(e.DdM(8,je)),e.Q6J("visible",i.displayDescription),e.xp6(2),e.Q6J("ngModel",i.description))},directives:[p.O5,ce,L,Pe,C.Hq,A.V,s.Fj,N,s.JJ,s.On,Z.jx,C.zx],styles:[""]}),n})()}];let ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.Bz.forChild(De)],m.Bz]}),n})();var Ee=r(8641),Oe=r(732),Re=r(4851);let Ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,ze,Ee.R,Oe.T,C.hJ,y.j,A.S,s.UX,M.kW,Re.U$,s.u5,re,w._8]]}),n})()}}]);