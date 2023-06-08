import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseurl
  constructor(private httpservice:HttpService) { }
  login(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
      return this.httpservice.Postservice(this.base+`User/Login`,data,false,header)
  }

  register(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
      return this.httpservice.Postservice(this.base+`User/Register`,data,false,header)
  }

  forgotpassword(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
      return this.httpservice.Postservice(this.base+`User/ForgetPassword/${data.email}`,{},false,header)
  }

  resetpassword(data:any,token:any){
    console.log(token)
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      })
    }
    console.log("hello")
      return this.httpservice.Putservice(this.base+`User/ResetPassword`,data,true,header)
      
  }

}
