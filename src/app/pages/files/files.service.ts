import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileInterface} from "../../interfaces/file.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  getUserFiles(): Observable<FileInterface[]> {
    return this.http.get<FileInterface[]>('../../mock/files.json')
  }
}
