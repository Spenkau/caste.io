import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('canvas', {static: false}) canvas!: ElementRef;
  context!: CanvasRenderingContext2D;
  selectedObject: string = '';

  objects = ['circle', 'square', 'triangle'];

  ngAfterViewInit(): void {
    // const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = this.canvas.nativeElement.getContext('2d');

      this.#drawRectangle(this.context);
  }

  #drawRectangle(context: CanvasRenderingContext2D) {
    context.fillRect(20, 20, 100, 100);
    context.clearRect(40, 40, 30, 30);
    context.strokeRect(50, 50, 10, 10);
  }
}
