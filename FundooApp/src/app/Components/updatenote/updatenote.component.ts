import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notes/notes.service';


@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  title:any
  description:any
  id:any
  constructor(
    @Inject( MAT_DIALOG_DATA) public data:any,
    public dialogbox : MatDialogRef<UpdatenoteComponent>,
    private notes:NotesService
  ) { 
    this.title=data.title,
    this.description=data.description,
    this.id=data.noteID

  }

  ngOnInit(): void {
  }

  closedialog(){
    let data ={
       title:this.title,
       description:this.description,
       noteID:this.id

    }
    this.notes.updatenote(data).subscribe((response:any)=>{
      console.log(response)
      this.dialogbox.close()
    })
  }
}
