import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/security/users.service';
import sizeof from 'object-sizeof';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private router:Router,
    private usersService: UsersService
  ) {
   }

  ngOnInit(): void {
  }

  gotoPage(page: number) {
    switch(page){
      case 0: 
        this.router.navigate([`/facturacion-de-envios`]);
        break;
      case 1: 
        this.router.navigate([`/gestion-de-usuarios`]);
        break;
      case 2: 
        this.router.navigate([`/gestion-de-almacenes`]);
        break;
      case 3: 
        this.router.navigate([`/cotizaciones`]);
        break;
      case 4: 
        this.router.navigate([`/gestion-de-facturas`]);
        break;
      case 5: 
        this.router.navigate([`/reportes`]);
        break;
    }
    
  }

  logOut(){
    this.isLogged = false
    this.usersService.logOut()
  }

}
