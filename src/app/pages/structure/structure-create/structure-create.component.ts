import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  structuresArray: any = [];

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>) { }

  ngOnInit() {
    console.log('inside creation page');
    this.structuresArray = [{
      structureName: 'ATS State College Parking Lot',
      structureType: 'Lot',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'blue',
      status: 'not hidden',
      latitude: 52.525595,
      longitude: 13.393085
    }];
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}