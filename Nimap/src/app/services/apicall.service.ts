import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url="http://localhost:3000"
  
  
  
  constructor(private httpClient: HttpClient) { }

  postApiCall(endPoint: any, formData: any) {
    let url = this.url + '/' + endPoint;
    return this.httpClient.post(url, formData)
  }
}
