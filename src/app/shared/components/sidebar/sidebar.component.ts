import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  openSidebar = false;
  
  constructor(
    private sidebarService: SidebarService
  ) {
      this.sidebarService.openEvent.subscribe((open) => {
          this.openSidebar = open;
      });
    }

  ngOnInit(): void {
  }

}
