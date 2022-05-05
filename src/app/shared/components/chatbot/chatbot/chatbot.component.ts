import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/core/services/chatbot/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  private session: number;

  ngOnInit(): void {
    this.session = this.getRandomInt();
   
  }

  public getRandomInt() {
    var min = Math.ceil(1000);
    var max = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  messages: any[] = [
    {
      text: '¡Hola! Soy el asistente virtual de Pabiont. \n¿Cómo te puedo ayudar?',
      date: new Date(),
      reply: false,
      user: {
        name: 'Jean Carlos Labrador',
        avatar: '../../../assets/images/avatar-bot-1.png',
      },
    },
    {
      text: '1. Requisitos de envio \n2. Cotizar mi envio \n3. Localizar mi paquete \n4. Informacion de contacto',
      date: null,
      reply: false,
      user: {
        name: 'Jean Carlos Labrador',
        avatar: '../../../assets/images/avatar-bot-1.png',
      },
    },
  ];

  constructor(protected chatbotService: ChatbotService) {
    window.addEventListener("beforeunload", () => localStorage.removeItem('session'));
  }

  message: any

  sendMessage(event: any) {

    this.chatbotService.requestAPI(event.message, this.session)
    .subscribe(
      response => {
        this.message = response

        for( let index = 0; index < this.message.length; index++ ) {
          
          this.messages.push({
            text: this.message[index].message,
            date: new Date(),
            type: "text",
            reply: false,
            user: {
              name: 'Jean Carlos Labrador',
              avatar: '../../../assets/images/avatar-bot-1.png',
            },
          });  
        
        }

      }
    )


    this.messages.push({
      text: event.message,
      date: new Date(),
      type: 'text',
      reply: true,
      user: {
        name: 'Tú',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });

  }
}
