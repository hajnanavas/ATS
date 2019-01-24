import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { StructureService } from 'src/app/shared/services/structure.service';
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
    console.log(this.createForm.value);
    this.latLong = this.mapService.getLocation();
    const { structureName, structureType, totalSpace, occupiedSpace, color, status, hidden, low, medium, full } =this.createForm.value;
    this.structureService.updateStructureList({structureName, structureType,totalSpace, occupiedSpace, color, status, hidden,latitude: this.latLong[0].lat, longitude: this.latLong[0].lng,low, medium, full});
    this.dialogRef.close();
  }
}