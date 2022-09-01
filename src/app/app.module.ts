import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { QuotesComponent } from './shared/components/quotes/quotes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AlertService } from './core/services/alert/alert.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    ButtonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NgbModule,
    ToastModule
  ],
  providers: [DatePipe,
    AlertService,
    MessageService,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
