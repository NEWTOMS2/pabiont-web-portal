"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[198],{6198:(bt,b,p)=>{p.r(b),p.d(b,{InvoiceManagementModule:()=>ft});var r=p(9808),_=p(7330),f=p(5861),t=p(5e3),c=p(3075);class I{constructor(i,e){this.invoice_number=i,this.status=e}}var m=p(8253),g=p(9783),h=p(1424),v=p(4036);function E(n,i){1&n&&(t.TgZ(0,"small",12),t._uU(1,"El estatus es obligatorio."),t.qZA())}const q=function(n){return{"ng-dirty ng-invalid":n}};let x=(()=>{class n{constructor(e,o,a){this.formBuilder=e,this.invoiceManagementService=o,this.messageService=a,this.statusList=[{label:"Pagada",value:12},{label:"Anulada",value:13}],this.updateList=new t.vpe,this.buttonEnabled=new t.vpe,this.resetForm()}ngOnInit(){}resetForm(){this.formGroup=this.formBuilder.group({invoice_number:["",c.kI.required],date:["",c.kI.required],status:["",c.kI.required],name:["",c.kI.required]}),this.formGroup.statusChanges.subscribe(e=>{this.buttonEnabled.emit("VALID"==e)})}submit(){this.invoiceRow=new I(this.formGroup.controls.invoice_number.value,this.formGroup.controls.status.value.value),this.invoiceManagementService.changeInvoice(this.invoiceRow).subscribe(e=>{this.messageService.add({severity:"success",summary:"Estatus de la Factura modificado correctamente.",detail:""}),this.updateList.emit()},e=>{this.messageService.add({severity:"error",summary:"Ha ocurrido un error al modificar el Estatus de la Factura.",detail:""}),console.log(e)})}updateForm(e){console.log(e),this.formGroup.controls.status.setValue(this.statusList.find(o=>e.status==o.label)),this.formGroup.controls.invoice_number.setValue(e.invoice_number),this.formGroup.controls.date.setValue(e.date),this.formGroup.controls.name.setValue(e.name),this.formGroup.controls.invoice_number.disable(),this.formGroup.controls.date.disable(),this.formGroup.controls.name.disable()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(m.d),t.Y36(g.ez))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-form"]],outputs:{updateList:"updateList",buttonEnabled:"buttonEnabled"},decls:20,vars:6,consts:[[3,"formGroup"],[1,"row","p-formgrid","p-grid","mt-3"],[1,"p-field","col-6"],["for","Invoice_number"],["type","text","id","Invoice_number","pInputText","","formControlName","invoice_number"],["for","Status"],["optionLabel","label","styleClass","w-100","appendTo","body","placeholder","Selecciona el Estatus","formControlName","status",3,"options","ngClass"],["class","p-error",4,"ngIf"],["for","Date"],["type","text","id","Fecha","pInputText","","formControlName","date"],["for","Name"],["type","text","id","Name","pInputText","","formControlName","name"],[1,"p-error"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4,"N\xfamero de Factura"),t.qZA(),t._UZ(5,"input",4),t.qZA(),t.TgZ(6,"div",2)(7,"label",5),t._uU(8,"Estatus"),t.qZA(),t._UZ(9,"p-dropdown",6),t.YNc(10,E,2,0,"small",7),t.qZA()(),t.TgZ(11,"div",1)(12,"div",2)(13,"label",8),t._uU(14,"Fecha"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"div",2)(17,"label",10),t._uU(18,"Remitente"),t.qZA(),t._UZ(19,"input",11),t.qZA()()()),2&e&&(t.Q6J("formGroup",o.formGroup),t.xp6(9),t.Q6J("options",o.statusList)("ngClass",t.VKq(4,q,o.formGroup.controls.status.touched&&(null==o.formGroup.controls.status.errors?null:o.formGroup.controls.status.errors.required))),t.xp6(1),t.Q6J("ngIf",o.formGroup.controls.status.touched&&(null==o.formGroup.controls.status.errors?null:o.formGroup.controls.status.errors.required)))},directives:[c._Y,c.JL,c.sg,c.Fj,h.o,c.JJ,c.u,v.Lt,r.mk,r.O5],styles:[""]}),n})();var k=p(813),U=p.n(k),y=p(4159),P=p.n(y),d=p(845);function N(n,i){if(1&n&&(t.TgZ(0,"div",4),t._UZ(1,"img",5),t.TgZ(2,"p",6),t._uU(3,"FACTURA"),t.qZA(),t.TgZ(4,"p",7),t._uU(5),t.qZA(),t.TgZ(6,"p",8)(7,"b"),t._uU(8,"Newtoms Cargo Radar"),t.qZA()(),t.TgZ(9,"p",9),t._uU(10,"Serviced Billed to :"),t.qZA(),t.TgZ(11,"p",10)(12,"b"),t._uU(13),t.qZA()(),t.TgZ(14,"p",11)(15,"b"),t._uU(16),t.qZA()(),t.TgZ(17,"p",12),t._uU(18,"Shipper:"),t.qZA(),t.TgZ(19,"p",13)(20,"b"),t._uU(21),t.qZA()(),t.TgZ(22,"p",14),t._uU(23,"Consignee:"),t.qZA(),t.TgZ(24,"p",15)(25,"b"),t._uU(26),t.qZA()(),t.TgZ(27,"p",16),t._uU(28,"Instruction:"),t.qZA(),t.TgZ(29,"p",17)(30,"b"),t._uU(31),t.qZA()(),t.TgZ(32,"p",18),t._uU(33),t.qZA(),t.TgZ(34,"p",19),t._uU(35),t.qZA(),t.TgZ(36,"p",20),t._uU(37),t.qZA(),t.TgZ(38,"p",21),t._uU(39),t.qZA(),t.TgZ(40,"p",22)(41,"b"),t._uU(42,"USD 0.00"),t.qZA()(),t.TgZ(43,"p",23),t._uU(44,"Date:"),t.qZA(),t.TgZ(45,"p",24),t._uU(46,"Payment Type:"),t.qZA(),t.TgZ(47,"p",25),t._uU(48,"Due Date:"),t.qZA(),t.TgZ(49,"p",26),t._uU(50,"Tracking Number:"),t.qZA(),t.TgZ(51,"p",27)(52,"b"),t._uU(53,"Balance Due:"),t.qZA()(),t.TgZ(54,"p",28),t._uU(55,"Items"),t.qZA(),t.TgZ(56,"p",29),t._uU(57,"Pieces"),t.qZA(),t.TgZ(58,"p",30),t._uU(59,"Price"),t.qZA(),t.TgZ(60,"p",31)(61,"b"),t._uU(62,"Paquetes enviados"),t.qZA()(),t.TgZ(63,"p",32),t._uU(64),t.qZA(),t.TgZ(65,"p",33),t._uU(66),t.qZA(),t.TgZ(67,"p",34),t._uU(68),t.qZA(),t.TgZ(69,"p",35),t._uU(70,"USD 0.00"),t.qZA(),t.TgZ(71,"p",36),t._uU(72),t.qZA(),t.TgZ(73,"p",37),t._uU(74),t.qZA(),t.TgZ(75,"p",38),t._uU(76,"Subtotal:"),t.qZA(),t.TgZ(77,"p",39),t._uU(78,"Tax (0%):"),t.qZA(),t.TgZ(79,"p",40),t._uU(80,"Total:"),t.qZA(),t.TgZ(81,"p",41),t._uU(82,"Amount paid:"),t.qZA(),t.TgZ(83,"p",42)(84,"b"),t._uU(85,"Location Info:"),t.qZA()(),t.TgZ(86,"p",43),t._uU(87),t._UZ(88,"br"),t._uU(89),t.qZA(),t.TgZ(90,"p",44)(91,"b"),t._uU(92,"Notes:"),t.qZA()(),t.TgZ(93,"p",45),t._uU(94),t.qZA(),t.TgZ(95,"p",46)(96,"b"),t._uU(97,"T\xe9rminos:"),t.qZA()(),t.TgZ(98,"p",47),t._uU(99,"Terminos y condiciones varios"),t.qZA()()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(5),t.hij("# ",o.invoiceInformation,""),t.xp6(8),t.Oqu(e.bill_to),t.xp6(3),t.hij("tel: ",e.phone_bill_to,""),t.xp6(5),t.Oqu(e.shipper),t.xp6(5),t.Oqu(e.consignee),t.xp6(5),t.Oqu(e.instruction),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.payment_type),t.xp6(2),t.Oqu(e.due_date),t.xp6(2),t.Oqu(o.invoiceInformation),t.xp6(25),t.Oqu(e.package_count),t.xp6(2),t.hij("USD ",e.total,""),t.xp6(2),t.hij("USD ",e.total,""),t.xp6(4),t.hij("USD ",e.total,""),t.xp6(2),t.hij("USD ",e.total,""),t.xp6(13),t.hij("Origin: ",e.origin,""),t.xp6(2),t.hij("Destination: ",e.destination,""),t.xp6(5),t.Oqu(e.description)}}function F(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",48)(1,"button",49),t.NdJ("click",function(){return t.CHM(e),t.oxw().downloadPDF()}),t.qZA()()}}let w=(()=>{class n{constructor(e){this.invoiceManagementService=e,this.packageList=[],this.isDownloaded=!1,console.log(this.invoiceInformation)}ngOnInit(){console.log(this.invoiceInformation)}getData(){var e=this;return(0,f.Z)(function*(){e.invoice=yield e.invoiceManagementService.getSingleInvoice(e.invoicedata).toPromise().then(o=>o),e.isDownloaded=!0,console.log(e.invoice)})()}setData(e){this.invoicedata=e,this.getData(),console.log(this.invoicedata)}downloadPDF(){this.DATA=document.getElementById("page1-div");const e=new(U())("p","pt","a4");P()(this.DATA,{background:"white",scale:3}).then(a=>{const s=a.toDataURL("image/PNG"),A=e.getImageProperties(s),M=e.internal.pageSize.getWidth()-30;return e.addImage(s,"PNG",15,15,M,A.height*M/A.width,void 0,"FAST"),e}).then(a=>{a.save(`${this.invoicedata}-${(new Date).toDateString()}.pdf`)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.d))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-confirmation"]],inputs:{invoiceInformation:"invoiceInformation"},decls:4,vars:2,consts:[[1,"row"],[1,"col-12","showInvoice"],["id","page1-div","style","position:relative;width:918px;height:1188px;",4,"ngFor","ngForOf"],["class","col d-flex justify-content-center px-5 mb-3",4,"ngIf"],["id","page1-div",2,"position","relative","width","918px","height","1188px"],["src","assets/img/ri_1.png","alt","background image",2,"position","absolute","top","22px","left","60px","white-space","nowrap"],[1,"ft10",2,"position","absolute","top","22px","left","706px","font-size","35px","white-space","nowrap"],[1,"ft11",2,"position","absolute","top","90px","left","696px","font-weight","bold","font-size","20px","color","red","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","129px","left","73px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","173px","left","73px","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","197px","left","73px","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","217px","left","73px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","273px","left","73px","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","297px","left","73px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","173px","left","295px","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","197px","left","295px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","273px","left","295px","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","297px","left","295px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","169px","left","762px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","203px","left","762px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","236px","left","762px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","270px","left","749px","white-space","nowrap"],[1,"ft15",2,"position","absolute","top","305px","left","776px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","169px","left","654px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","203px","left","588px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","236px","left","621px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","270px","left","570px","white-space","nowrap"],[1,"ft15",2,"position","absolute","top","305px","left","581px","white-space","nowrap"],[1,"ft16",2,"position","absolute","top","395px","left","67px","font-weight","bold","white-space","nowrap"],[1,"ft16",2,"position","absolute","top","395px","left","551px","font-weight","bold","white-space","nowrap"],[1,"ft16",2,"position","absolute","top","395px","left","816px","font-weight","bold","white-space","nowrap"],[1,"ft12",2,"position","absolute","top","434px","left","67px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","434px","left","565px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","434px","left","786px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","533px","left","786px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","567px","left","786px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","600px","left","786px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","634px","left","786px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","533px","left","629px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","567px","left","624px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","600px","left","651px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","634px","left","600px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","683px","left","73px","white-space","nowrap"],[1,"ft17",2,"position","absolute","top","708px","left","73px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","763px","left","73px","white-space","nowrap"],[1,"ft13",2,"position","absolute","top","783px","left","73px","white-space","wrap"],[1,"ft13",2,"position","absolute","top","826px","left","73px","white-space","nowrap"],[1,"ft14",2,"position","absolute","top","852px","left","73px","white-space","nowrap"],[1,"col","d-flex","justify-content-center","px-5","mb-3"],["pButton","","pRipple","","label","Descargar PDF",1,"p-button-info",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,N,100,18,"div",2),t.qZA()(),t.YNc(3,F,2,0,"div",3)),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.invoice),t.xp6(1),t.Q6J("ngIf",1==o.isDownloaded))},directives:[r.sg,r.O5,d.Hq],styles:["table[_ngcontent-%COMP%]{border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.showInvoice[_ngcontent-%COMP%]{display:block}"]}),n})();var D=p(2470),L=p(135),Z=p(7773),S=p(3833),T=p(5315);class J{constructor(i,e){this.package_code=i,this.status=e}}var l=p(4851);function R(n,i){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Factura"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Tama\xf1o"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Peso"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Volumen"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Tipo de Env\xedo"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Estatus"),t.qZA(),t._UZ(13,"th",3),t.qZA())}function Y(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw(2);t.hij(" ",e.invoice," ")}}function H(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw(2);t.hij(" ",e.invoice," ")}}function j(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.size," ")}}function G(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.size," ")}}function O(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.weight," ")}}function B(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.weight," ")}}function z(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.volume," ")}}function Q(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.volume," ")}}function V(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.type," ")}}function $(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.type," ")}}function X(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"p-dropdown",12),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().$implicit.status=a}),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw();t.Q6J("options",o.statusList)("ngModel",e.status)}}function W(n,i){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.status," ")}}function K(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onRowEditInit()}),t.qZA()}}function tt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().onRowEditSave(a)}),t.qZA()}}function et(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(),s=a.$implicit,u=a.rowIndex;return t.oxw().onRowEditCancel(s,u)}),t.qZA()}}function nt(n,i){if(1&n&&(t.TgZ(0,"tr",4)(1,"td",5)(2,"p-cellEditor"),t.YNc(3,Y,1,1,"ng-template",6),t.YNc(4,H,1,1,"ng-template",7),t.qZA()(),t.TgZ(5,"td",5)(6,"p-cellEditor"),t.YNc(7,j,1,1,"ng-template",6),t.YNc(8,G,1,1,"ng-template",7),t.qZA()(),t.TgZ(9,"td",5)(10,"p-cellEditor"),t.YNc(11,O,1,1,"ng-template",6),t.YNc(12,B,1,1,"ng-template",7),t.qZA()(),t.TgZ(13,"td",5)(14,"p-cellEditor"),t.YNc(15,z,1,1,"ng-template",6),t.YNc(16,Q,1,1,"ng-template",7),t.qZA()(),t.TgZ(17,"td",5)(18,"p-cellEditor"),t.YNc(19,V,1,1,"ng-template",6),t.YNc(20,$,1,1,"ng-template",7),t.qZA()(),t.TgZ(21,"td",5)(22,"p-cellEditor"),t.YNc(23,X,1,2,"ng-template",6),t.YNc(24,W,1,1,"ng-template",7),t.qZA()(),t.TgZ(25,"td",8),t.YNc(26,K,1,0,"button",9),t.YNc(27,tt,1,0,"button",10),t.YNc(28,et,1,0,"button",11),t.qZA()()),2&n){const o=i.editing;t.Q6J("pEditableRow",i.$implicit),t.xp6(26),t.Q6J("ngIf",!o),t.xp6(1),t.Q6J("ngIf",o),t.xp6(1),t.Q6J("ngIf",o)}}let ot=(()=>{class n{constructor(e,o){this.invoiceManagementService=e,this.messageService=o,this.canEdit=!1,this.updateList=new t.vpe,this.statusList=[{label:"En Tienda",value:"En Tienda"},{label:"En Almac\xe9n",value:"En Almac\xe9n"},{label:"En Cami\xf3n",value:"En Cami\xf3n"},{label:"En Avi\xf3n",value:"En Avi\xf3n"},{label:"En Embarcaci\xf3n",value:"En Embarcaci\xf3n"},{label:"En el Puerto en Venezuela",value:"En el Puerto en Venezuela"},{label:"En Aduana en Venezuela",value:"En Aduana en Venezuela"},{label:"En Ruta al Almac\xe9n en Venezuela",value:"En Ruta al Almac\xe9n en Venezuela"},{label:"Entregado a Tienda en Venezuela",value:"Entregado a Tienda en Venezuela"},{label:"Entregado a Cliente",value:"Entregado a Cliente"}]}ngOnInit(){}onRowEditInit(){this.canEdit=!0}onRowEditSave(e){this.packageRow=new J(parseInt(e.code),this.setStatusValue(e.status)),this.invoiceManagementService.changePackage(this.packageRow).subscribe(o=>{this.messageService.add({severity:"success",summary:"Estatus del paquete modificado correctamente.",detail:""}),this.updateList.emit()},o=>{this.messageService.add({severity:"error",summary:"Ha ocurrido un error al modificar el Estatus del paquete.",detail:""}),console.log(o)})}onRowEditCancel(e,o){window.location.reload()}setStatusValue(e){switch(e){case"En Tienda":return 1;case"En Almac\xe9n":return 2;case"En Cami\xf3n":return 3;case"En Avi\xf3n":return 4;case"En Embarcaci\xf3n":return 5;case"En el Puerto en Venezuela":return 6;case"En Aduana en Venezuela":return 7;case"En Ruta al Almac\xe9n en Venezuela":return 8;case"Entregado a Tienda en Venezuela":return 9;case"Entregado a Cliente":return 10;default:return 0}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.d),t.Y36(g.ez))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-package-management"]],inputs:{packageList:"packageList",invoice:"invoice"},outputs:{updateList:"updateList"},decls:4,vars:1,consts:[["dataKey","code","editMode","row",3,"value"],["pTemplate","header"],["pTemplate","body"],[2,"width","8rem"],[3,"pEditableRow"],["pEditableColumn",""],["pTemplate","input"],["pTemplate","output"],[2,"text-align","center"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","class","p-button-rounded p-button-text",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","class","p-button-rounded p-button-text p-button-success p-mr-2",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","class","p-button-rounded p-button-text p-button-danger",3,"click",4,"ngIf"],["styleClass","w-100","appendTo","body",3,"options","ngModel","ngModelChange"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check",1,"p-button-rounded","p-button-text","p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"p-table",0),t.YNc(2,R,14,0,"ng-template",1),t.YNc(3,nt,29,4,"ng-template",2),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("value",o.packageList))},directives:[l.iA,g.jx,l.D$,l.Wq,l.YL,v.Lt,c.JJ,c.On,r.O5,d.Hq,l.Pv,l.U1,l.wT],styles:[""]}),n})();function it(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).hideDialog()}),t.qZA(),t.TgZ(1,"button",12),t.NdJ("click",function(){t.CHM(e),t.oxw();const a=t.MAs(3);return t.oxw().hideDialog(),a.submit()}),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled",!e.buttonIsEnabled)}}const at=function(){return{width:"450px"}};function pt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"p-dialog",7),t.NdJ("visibleChange",function(a){return t.CHM(e),t.oxw().visibleDialog=a})("onHide",function(){return t.CHM(e),t.MAs(3).resetForm()}),t.TgZ(2,"app-create-form",8,9),t.NdJ("buttonEnabled",function(a){return t.CHM(e),t.oxw().buttonEnabled(a)})("updateList",function(){return t.CHM(e),t.oxw().getInvoiceList()}),t.qZA(),t.YNc(4,it,2,1,"ng-template",10),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Akn(t.DdM(4,at)),t.Q6J("visible",e.visibleDialog)("modal",!0)}}function st(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).hideDialog()}),t.qZA()}}const ct=function(){return{width:"1000px",margin:"20px"}};function lt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"p-dialog",13),t.NdJ("visibleChange",function(a){return t.CHM(e),t.oxw().visibleDialog=a})("onHide",function(){return t.CHM(e),t.oxw().hideDialog2()}),t.TgZ(2,"app-package-management",14),t.NdJ("updateList",function(){t.CHM(e);const a=t.oxw();return a.getPackagesList(a.invoiceCode)}),t.qZA(),t.YNc(3,st,1,0,"ng-template",10),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Akn(t.DdM(6,ct)),t.Q6J("visible",e.visibleDialog)("modal",!0),t.xp6(1),t.Q6J("packageList",e.packageList)("invoice",e.invoiceCode)}}const rt=function(){return{width:"100%",margin:"20px"}};function ut(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"p-dialog",16),t.NdJ("visibleChange",function(a){return t.CHM(e),t.oxw().visibleDialog=a})("onHide",function(){return t.CHM(e),t.oxw().hideDialog()}),t._UZ(2,"app-payment-confirmation",17,9),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Akn(t.DdM(5,rt)),t.Q6J("visible",e.visibleDialog)("modal",!0),t.xp6(1),t.Q6J("invoiceInformation",e.invoiceInformation)}}const mt=[{path:"",component:(()=>{class n{constructor(e,o,a,s){this.appConfig=e,this.tableManagmentService=o,this.invoiceManagementService=a,this.router=s,this.visibleDialog=!1,this.buttonIsEnabled=!1,this.invoiceList=[],this.currentStep=-1,this.modalTitle="",this.page=this.appConfig.invoiceManagement,this.page=this.page.default,this.getInvoiceList(),this.tableManagmentService.buttonEvent.subscribe(u=>{this.selectedButton(u)})}ngOnInit(){}getInvoiceList(){var e=this;return(0,f.Z)(function*(){e.invoiceList=yield e.invoiceManagementService.getInvoices().toPromise().then(o=>o)})()}getPackagesList(e){var o=this;return(0,f.Z)(function*(){o.packageList=yield o.invoiceManagementService.getPackages(e).toPromise().then(a=>a)})()}buttonEnabled(e){this.buttonIsEnabled=e}selectedButton(e){switch(this.visibleDialog=!0,this.currentStep=e.buttonId,e.buttonId){case 1:this.child.updateForm(e.rowData);break;case 2:this.invoiceCode=e.rowData.invoice_number,this.getPackagesList(e.rowData.invoice_number);break;case 3:this.invoiceInformation=e.rowData.invoice_number,this.childq.setData(this.invoiceInformation),console.log(this.invoiceInformation)}}hideDialog(){this.visibleDialog=!1}hideDialog2(){this.visibleDialog=!1,window.location.reload()}redirect(){this.router.navigate(["main"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(D._),t.Y36(L.l),t.Y36(m.d),t.Y36(_.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invoice-management"]],viewQuery:function(e,o){if(1&e&&(t.Gf(x,5),t.Gf(w,5)),2&e){let a;t.iGM(a=t.CRH())&&(o.child=a.first),t.iGM(a=t.CRH())&&(o.childq=a.first)}},decls:11,vars:8,consts:[[1,"row","p-5","m-0"],[1,"title"],[1,"pabiont-card"],[3,"headerList","customButtons","dataList","searchField","canCreate"],[4,"ngIf"],[1,"d-flex","justify-content-start","px-5","mb-3"],["pButton","","pRipple","","label","Volver",1,"p-button-outlined",3,"click"],["header","Modificar Estatus de Factura","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"buttonEnabled","updateList"],["child",""],["class","m-0","pTemplate","footer"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"disabled","click"],["header","Modificar Estatus de Paquetes","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"packageList","invoice","updateList"],["pButton","","pRipple","","label","Continuar","icon","pi pi-check",1,"p-button-text",3,"click"],["header","Imprimir Factura","styleClass","p-fluid",3,"visible","modal","visibleChange","onHide"],[3,"invoiceInformation"]],template:function(e,o){1&e&&(t._UZ(0,"p-toast"),t.TgZ(1,"div",0)(2,"span",1),t._uU(3,"Gesti\xf3n de Facturas y Paquetes"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-basic-table",3),t.qZA()(),t.YNc(6,pt,5,5,"div",4),t.YNc(7,lt,4,7,"div",4),t.YNc(8,ut,4,6,"div",4),t.TgZ(9,"div",5)(10,"button",6),t.NdJ("click",function(){return o.redirect()}),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("headerList",o.page.tableConfiguration.headerList)("customButtons",o.page.tableConfiguration.customButtons)("dataList",o.invoiceList)("searchField",o.page.tableConfiguration.searchField)("canCreate",!0),t.xp6(1),t.Q6J("ngIf",2!=o.currentStep&&3!=o.currentStep),t.xp6(1),t.Q6J("ngIf",1!=o.currentStep&&3!=o.currentStep),t.xp6(1),t.Q6J("ngIf",2!=o.currentStep&&1!=o.currentStep))},directives:[Z.FN,S.N,r.O5,T.V,x,g.jx,d.Hq,ot,w],styles:[".title[_ngcontent-%COMP%]{font-weight:600;font-size:32px;line-height:27px;color:#000;margin-bottom:48px}.pabiont-card[_ngcontent-%COMP%]{border-radius:20px;border:2px solid rgba(0,0,0,.05);box-shadow:0 4px 4px #00000040}"]}),n})()}];let gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.Bz.forChild(mt)],_.Bz]}),n})();var dt=p(732),_t=p(8641);let ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,gt,dt.T,d.hJ,h.j,T.S,c.UX,v.kW,l.U$,c.u5,_t.R,Z.EV]]}),n})()}}]);