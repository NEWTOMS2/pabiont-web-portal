import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbChatModule, NbLayoutModule } from '@nebular/theme';
import { ChatbotComponent } from './chatbot/chatbot.component';
/*
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParticlesModule } from 'angular-particle';
import { CarouselModule } from 'ngx-bootstrap/carousel';*/

@NgModule({
  declarations: [ChatbotComponent],
  imports: [
    CommonModule,
    NbChatModule,
    NbLayoutModule,
    
  ],
  exports:[
    ChatbotComponent
  ],
})
export class ChatbotModule { }
