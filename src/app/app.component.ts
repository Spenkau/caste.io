import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'caste';
  isPanelRequired = false;

  constructor(private location: Location) {
  }

  ngOnInit() {

  }

  back(): void {
    this.location.back();
  }
}
