import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})

export class ImageSerivceService {
  private baseUrl = 'https://localhost:44356';

  constructor(private httpClient: HttpClient) {
   }

   getImages() : Observable<Image[]>{
    return this.httpClient.get<Image[]>(this.baseUrl + '/Image')
   }
}
