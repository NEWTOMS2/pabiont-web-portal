import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

 //Table Configuration
 first = 0;
 rows = 10;
 productDialog: boolean;

 //Variables
 innerWidth: number;
 messageLabel: any;
 textLabel: string;
 isValid: boolean;

 //Inputs
 @Input() headerList: any[];
 @Input() dataList: any[] = [];
 @Input() searchField: any[];
 @Input() containerViewTemplateRef: TemplateRef<any>;
 @Input() titleLabel: string;
 @Input() headerLabel: string;
 @Input() canEdit:boolean;
 @Input() canCreate:boolean;

 constructor( 
  
 ) { 
  
 } 

 ngOnInit(): void {
   this.innerWidth = window.innerWidth;
 }

 openNew() {
   
   this.productDialog = true;
   this.textLabel = "Agregar "
 }

 openEdit(data: any){
   
   this.productDialog = true;
   this.textLabel = "Editar "
 }

 hideDialog() {
   this.productDialog = false;
 }

 submitDialog() {
   
   this.productDialog = false;
 }

 titleCaseWord(word: string) {
   if (!word) return word;
   return word[0].toUpperCase() + word.substr(1).toLowerCase();
 }

 @HostListener('window:resize', ['$event'])
 onResize() {
   this.innerWidth = window.innerWidth;
 }

}
