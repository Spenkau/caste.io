import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {ChatItemComponent} from "../../components/chat-item/chat-item.component";

@NgModule({
  declarations: [MessagesComponent, ChatItemComponent],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
