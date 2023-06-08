import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  base=environment.baseurl
  token:any
  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token')
  }

  addnotes(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.token}`
      })
  }
  return this.httpservice.Postservice(this.base+"Notes/CreateNotes",data,true,header)
}

getnotes(){
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${this.token}`
    })
}
return this.httpservice.Getservice(this.base+'Notes/GetNotes',true,header)
}

updatenote(data:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${this.token}`
    })
}
return this.httpservice.Putservice(this.base+'Notes/UpdateNote',data,true,header)
}

  trashnote(NoteID:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.token}`
      })
  }
  return this.httpservice.Putservice(this.base+'Notes/Updatetrash?NoteID='+NoteID,{},true,header)
  }
}