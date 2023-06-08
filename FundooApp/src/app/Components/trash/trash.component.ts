import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

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
        return Object.trash==true
      })
    })
  }
}
