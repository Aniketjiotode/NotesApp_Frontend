import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  istrash:any
  isarchive:any
  NoteID:any

  @Input() notedata:any

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.isarchive=this.notedata.archive
    this.istrash=this.notedata.trash
    this.NoteID=this.notedata.noteID
  }

    trash(){
      this.istrash=false
      this.note.trashnote(this.NoteID).subscribe((response:any)=>{
        console.log(response)
      })
    }

}
