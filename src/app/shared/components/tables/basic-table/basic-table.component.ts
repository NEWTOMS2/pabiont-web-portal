import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';

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
   //Inputs
   @Input() headerList: any[];
   @Input() dataList: any[] = [];
   @Input() customButtons: any = [];
   @Input() headerCustomButtons: any = [];
   @Input() searchField: any[];
   @Input() canCreate: boolean = true;

 constructor( 
    public tableManagmentService: TableManagmentService,
 ) { 
  
 } 

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  selectCustomButton(id: number, rowData?: any){
    this.tableManagmentService.selectedButton(id, rowData)
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
