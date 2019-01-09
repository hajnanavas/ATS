import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>) { }

  ngOnInit() {
    console.log('inside creation page');
   // this.createStructure();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}