import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DrawElementComponent} from "../../components/draw-element/draw-element.component";



@NgModule({
  declarations: [
    DashboardComponent,
    DrawElementComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
