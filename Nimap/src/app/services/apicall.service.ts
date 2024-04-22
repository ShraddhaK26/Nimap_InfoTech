import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  editId:any
  url='http://localhost:3000/user'
  
  
  


  constructor(public http:HttpClient) { }
  postApiCAll(data:any){
   return this.http.post(this.url,data)
  }


  getApiCall(){
    return this.http.get(this.url)
  }

patchApi(id:any,body:any){
 let url=this.url+'/'+id
  return this.http.patch(url,body)
}

}
