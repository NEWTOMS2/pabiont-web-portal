"use strict";(self.webpackChunkpabiont_web_portal=self.webpackChunkpabiont_web_portal||[]).push([[592],{8253:(v,p,n)=>{n.d(p,{d:()=>g});var i=n(4004),r=n(5e3),c=n(3447),o=n(178);let g=(()=>{class a{constructor(e,t){this.httpService=e,this.appConfig=t}changeInvoice(e){return this.httpService.patch(`${this.appConfig.config.url.changeInvoice}`,e).pipe((0,i.U)(t=>t.data))}getInvoices(){return this.httpService.get(`${this.appConfig.config.url.getInvoiceAll}`).pipe((0,i.U)(e=>e.data))}getPackages(e){return this.httpService.get(`${this.appConfig.config.url.getPackageByInvoice}${e}`).pipe((0,i.U)(t=>t.data))}getHistoricalPackages(e){return this.httpService.get(`${this.appConfig.config.url.getPackageHistoricalByInvoice}${e}`).pipe((0,i.U)(t=>t.data))}changePackage(e){return this.httpService.patch(`${this.appConfig.config.url.changeStatusPackage}`,e).pipe((0,i.U)(t=>t.data))}createPackage(e){return this.httpService.post(`${this.appConfig.config.url.changeStatusPackage}`,e).pipe((0,i.U)(t=>t.data))}createInvoice(e){return this.httpService.post(`${this.appConfig.config.url.postInvoice}`,e).pipe((0,i.U)(t=>t.data))}getLastInvoice(){return this.httpService.get(`${this.appConfig.config.url.getLastInvoice}`).pipe((0,i.U)(e=>e.data))}getPrefix(){return this.httpService.get(`${this.appConfig.config.url.getPrefixCompany}`).pipe((0,i.U)(e=>e.data))}getSingleInvoice(e){return this.httpService.get(`${this.appConfig.config.url.getSingleInvoice}${e}`).pipe((0,i.U)(t=>t.data))}}return a.\u0275fac=function(e){return new(e||a)(r.LFG(c.O),r.LFG(o._))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},6399:(v,p,n)=>{n.d(p,{F:()=>g});var i=n(4004),r=n(5e3),c=n(3447),o=n(178);let g=(()=>{class a{constructor(e,t){this.httpService=e,this.appConfig=t}saveWarehouse(e,t){return t?this.httpService.patch(`${this.appConfig.config.url.saveWarehouse}`,e).pipe((0,i.U)(h=>h.data)):this.httpService.post(`${this.appConfig.config.url.saveWarehouse}`,e).pipe((0,i.U)(h=>h.data))}getWarehouses(){return this.httpService.get(`${this.appConfig.config.url.getWarehouse}`).pipe((0,i.U)(e=>e.data))}}return a.\u0275fac=function(e){return new(e||a)(r.LFG(c.O),r.LFG(o._))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);