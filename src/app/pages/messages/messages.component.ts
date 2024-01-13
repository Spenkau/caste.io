import {Component} from '@angular/core';
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  ws: WebSocketSubject<any> = new WebSocketSubject<any>({
    url: `example.com`,
    serializer: (value: string) => JSON.stringify(value),
    deserializer: (e: MessageEvent) => {
      try {
        return JSON.parse(e.data);
      } catch (error) {
        console.error(error)
      }
    }
  })
}
