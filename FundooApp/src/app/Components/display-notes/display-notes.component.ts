import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';



@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  @Input() notelist:any;
  @Output() updateEvent=new EventEmitter<string>()
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  editnote(notes:any){
    const dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'35%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe((result)=>{
      console.log('after update',result)
      this.updateEvent.emit('heelo')
    })
  }
}
