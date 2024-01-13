import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-draw-element',
  templateUrl: './draw-element.component.html',
  styleUrl: './draw-element.component.scss'
})
export class DrawElementComponent {
  @Input() elementName: string = '';
}
