import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes-management',
  templateUrl: './quotes-management.component.html',
  styleUrls: ['./quotes-management.component.scss']
})
export class QuotesManagementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate([`main`]);
  }
}
