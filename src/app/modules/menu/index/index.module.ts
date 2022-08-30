import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './pages/index.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ToastModule } from 'primeng/toast';
import { NbChatModule } from '@nebular/theme';
import { ChatbotModule } from 'src/app/shared/components/chatbot/chatbot.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    ToastModule,
    ConsultModule,
    ChatbotModule,
    NbChatModule,
    NgbModule
  ]
})
export class IndexModule { }
