import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StructureService } from 'src/app/shared/services/structure-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  structuresArray: any = [{}];
  structureCreateSubscription: any;
  private createForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>, private structureService: StructureService) {
  }

  ngOnInit() {
    console.log('inside creation page');
    this.createForm = new FormGroup({
      structureName: new FormControl('', []),
      structureType: new FormControl('', []),
      color: new FormControl('', []),
      abbreviatedName: new FormControl(),
      description:new FormControl(),
      status: new FormControl('', []),
      hidden: new FormControl(),
      note:new FormControl(),
      totalSpace:new FormControl(),
      occupiedSpace: new FormControl('', []),
    });
  }
  onNoClick(): void {
    this.structureService.updateStructureList({
      structureName:  this.createForm.controls.structureName.value,
      structureType: this.createForm.controls.structureType.value,
      totalSpace: 38,
      occupiedSpace: 33,
      color: this.createForm.controls.color.value,
      status: false,
      latitude: 52.525595,
      longitude: 13.393085
    });
    this.dialogRef.close();
  }

}