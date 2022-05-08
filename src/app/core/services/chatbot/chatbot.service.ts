import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { ChatModule, Message, User, Action, ExecuteActionEvent, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  httpOptions:any = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})

  constructor(protected http: HttpClient) {}

  public readonly responses: Subject<string> = new Subject<string>();

  public submit(question: string): void {
    const length = question.length;
    const answer = `"${question}" contains exactly ${length} symbols.`;

    setTimeout(
      () => this.responses.next(answer),
      1000
    );
  }


  public requestAPI(message: string, session: number){
  
    return this.http.post('https://pabiont-lex.us-e1.cloudhub.io/api/webchat',
      {
        message: message,
        session: session
      },
      this.httpOptions);
  }

}
