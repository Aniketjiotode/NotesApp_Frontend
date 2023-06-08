import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  notearray:any
  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.notesubmit()
  }
  notesubmit(){
    this.noteservice.getnotes().subscribe((response:any)=>{
      console.log(response);
      this.notearray= response.data
      this.notearray=this.notearray.filter((Object:any)=>{
        return Object.trash==false  && Object.archive==false
      })
    })
  }
  displayMessage($event:any){
    this.notesubmit()
  }
  Event($event:any){
    this.notesubmit()
  }
}
