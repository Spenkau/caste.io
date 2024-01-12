import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef;

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      this.#drawRectangle(context);
    }
  }

  #drawRectangle(context: CanvasRenderingContext2D) {
    context.fillRect(20, 20, 100, 100);
    context.clearRect(40, 40, 30, 30);
    context.strokeRect(50, 50, 10, 10);
  }
}
