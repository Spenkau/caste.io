import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'caste';

  constructor(private location: Location) {
  }

  ngOnInit() {

  }

  back(): void {
    this.location.back();
  }
}
