import { Component, OnInit } from '@angular/core';
import { UsersService } from './core/services/security/users.service';
import { SidebarService } from './core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pabiont-web-portal';

  displaySidebar = true;
  hasError = false;
  sidebarOpen = false;
  isLogged = false;

  constructor(
    private sidebarService: SidebarService,
    private usersService: UsersService
  ) {
  }

  ngOnInit(){
    this.sidebarService.displayEvent.subscribe(show => {
      this.displaySidebar = show;
    });
    this.sidebarService.openEvent.subscribe(open => {
      this.sidebarOpen = open;
    });
  }


  onActivate() {
    window.scroll(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if(Object.keys(this.usersService.getData('user')).length > 0){
      this.isLogged = window.location.pathname == "/" ? false : true
    }else{
      this.isLogged = false
    }
  }

  
}
