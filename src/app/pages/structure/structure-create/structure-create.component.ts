import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StructureService } from 'src/app/shared/services/structure-service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  structuresArray: any = [];
  structureCreateSubscription: any;

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>, private structureService: StructureService) {
  }

  ngOnInit() {
    console.log('inside creation page');
  }
  onNoClick(): void {
    this.structureService.updateStructureList({
      structureName: 'ATS State College Parking Lot',
      structureType: 'Lot',
      totalSpace: 38,
      occupiedSpace: 33,
      color: 'blue',
      status: 'not hidden',
      latitude: 52.525595,
      longitude: 13.393085
    });
    this.dialogRef.close();
  }
  
}