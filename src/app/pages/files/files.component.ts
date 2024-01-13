import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {FilesService} from "./files.service";
import {FileInterface} from "../../interfaces/file.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent implements OnInit {
  files!: Observable<FileInterface[]>;

  constructor(private filesService: FilesService) {
  }

  ngOnInit(): void {
    this.files = this.filesService.getUserFiles();
    console.log(this.files)
  }
}
