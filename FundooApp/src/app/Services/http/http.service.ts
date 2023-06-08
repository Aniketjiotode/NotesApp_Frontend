import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpclient:HttpClient) { }
  Postservice(url:string,payload:any,token:boolean,httpOptions:any={}){
    return this.httpclient.post(url,payload,token && httpOptions)
  }
  
  Putservice(url:string,payload:any,token:boolean,httpOptions:any={}){
    return this.httpclient.put(url,payload,token && httpOptions)
  }

  Getservice(url:string,token:boolean,httpOptions:any={}){
    return this.httpclient.get(url,token && httpOptions)
  }

}
