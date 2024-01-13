import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FilesComponent } from "./files.component";

@NgModule({
  declarations: [FilesComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ]
})
export class FilesModule { }
