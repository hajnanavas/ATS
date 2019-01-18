import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StructureService } from 'src/app/shared/services/structure-service';
import { MapService } from 'src/app/shared/services/map.service';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  private createForm: FormGroup;
  latLong: any = [];

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>, private structureService: StructureService, private mapService: MapService) {
  }

  ngOnInit() {

    this.createForm = new FormGroup({
      structureName: new FormControl('', Validators.required),
      structureType: new FormControl('Lot', Validators.required),
      color: new FormControl('green',  Validators.required),
      abbreviatedName: new FormControl(),
      description: new FormControl(),
      status: new FormControl('active',  Validators.required),
      hidden: new FormControl(false, Validators.required),
      note: new FormControl(),
      totalSpace: new FormControl('',Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])),
      occupiedSpace: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])),
      medium: new FormControl('',Validators.pattern('^[0-9]+$')),
      low: new FormControl('',Validators.pattern('^[0-9]+$')),
      full: new FormControl('',Validators.pattern('^[0-9]+$'))
    });

  }

  saveStructure(): void {
    this.latLong = this.mapService.getLocation();
    this.structureService.updateStructureList({
      structureName: this.createForm.controls.structureName.value,
      structureType: this.createForm.controls.structureType.value,
      totalSpace: this.createForm.controls.totalSpace.value,
      occupiedSpace: this.createForm.controls.occupiedSpace.value,
      color: this.createForm.controls.color.value,
      status: this.createForm.controls.status.value,
      hidden: this.createForm.controls.hidden.value,
      latitude: this.latLong[0].lat,
      longitude: this.latLong[0].lng,
      low: this.createForm.controls.low.value,
      medium: this.createForm.controls.medium.value,
      full: this.createForm.controls.full.value
    });
    this.dialogRef.close();
  }
}