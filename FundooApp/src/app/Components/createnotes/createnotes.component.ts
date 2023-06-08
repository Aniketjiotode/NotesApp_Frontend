import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  constructor(private noteservice:NotesService) { }
  @Output() messageEvent = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  noteform=new FormGroup({
    title:new FormControl('',Validators.required),
    takenote: new FormControl('',Validators.required)
    
  });
   show:any=true;
    showblk(){
      this.show=false;
    }
    close(){
      this.show=true;
    }

    notesubmit(){
      if(this.noteform.valid){
        let data={
          Title:this.noteform.value.title,
          Description:this.noteform.value.takenote
        }
        this.noteservice.addnotes(data).subscribe((response:any)=>{
          console.log(response)
          this.messageEvent.emit("success")
        })
      }
      this.show=true;
    }
}
