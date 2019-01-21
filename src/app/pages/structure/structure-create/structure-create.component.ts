import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  constructor(
    public dialogRef: MatDialogRef<StructureCreateComponent>,
    private structureService: StructureService,
    private mapService: MapService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.createForm = this.formBuilder.group({
      structureName: ['', Validators.required],
      structureType: ['Lot', Validators.required],
      color: ['green', Validators.required],
      abbreviatedName: [],
      description: [],
      status: ['active', Validators.required],
      hidden: [false, Validators.required],
      note: [],
      totalSpace: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      occupiedSpace: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      medium: ['', Validators.pattern('^[0-9]+$')],
      low: ['', Validators.pattern('^[0-9]+$')],
      full: ['', Validators.pattern('^[0-9]+$')]
    });

  }

  saveStructure() {
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