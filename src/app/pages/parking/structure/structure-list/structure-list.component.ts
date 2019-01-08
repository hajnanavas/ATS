import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { StructureCreateComponent } from '../structure-create/structure-create.component';

declare let google: any;

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements OnInit {

  structures: any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log('inside structure listing page');
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
    this.listStructure();
  }

  goToAddStructure() {
    console.log('create');
    const dialogRef = this.dialog.open(StructureCreateComponent, {
      width: '250px',
    });
  }

  listStructure() {
    console.log('structures', this.structures);
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
