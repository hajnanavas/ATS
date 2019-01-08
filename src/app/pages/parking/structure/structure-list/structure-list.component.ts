import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StructureCreateComponent } from '../structure-create/structure-create.component';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements OnInit {

  structures: any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.listStructure();
  }

  goToAddStructure() {

    const dialogRef = this.dialog.open(StructureCreateComponent, {
      width: '850px',
    });
  }

  listStructure() {

    this.structures = [{
      structureName: 'ATS State College Parking Lot',
      structureType: 'Lot',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'blue',
      status: 'not hidden'
    },
    {
      structureName: 'Space 4',
      structureType: 'Space',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'green',
      status: 'not hidden'
    },
    {
      structureName: 'Space 5',
      structureType: 'Space',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'green',
      status: 'not hidden'
    },
    {
      structureName: 'Space 3',
      structureType: 'Space',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'green',
      status: 'not hidden'
    },
    {
      structureName: 'Space 2',
      structureType: 'Space',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'green',
      status: 'not hidden'
    }]
  }
}
