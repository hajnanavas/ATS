import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { StructureService } from 'src/app/shared/services/structure.service';
import { MapService } from 'src/app/shared/services/map.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  private createForm: FormGroup;
  latLong: any = [];
  requestData: any;
  structureCreateSubscription: any;
  title: string;

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private structureService: StructureService,
    private mapService: MapService,
    private formBuilder: FormBuilder,
    private apiService: ApiService) {
    this.structureCreateSubscription = this.structureService.structureCreate.subscribe(
      value => {
      })
    this.title = this.data.id ? 'Add Sub Structure' : 'Add Structure'
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
    const { structureName, structureType, totalSpace, occupiedSpace, color, status, hidden, low, medium, full, abbreviatedName, description, note } = this.createForm.value;
    const reqData = {
      "structureName": structureName,
      "structureType": structureType,
      "totalSpace": totalSpace,
      "occupiedSpace": occupiedSpace,
      "color": color,
      "status": status,
      "hidden": hidden ? 'true' : 'false',
      "latitude": this.latLong[0].lat,
      "longitude": this.latLong[0].lng,
      "low": low,
      "medium": medium,
      "full": full,
      "abbreviatedName": abbreviatedName,
      "description": description,
      "note": note,
      "structureId": this.data.id ? this.data.id : ''
    }
    this.apiService.addStructure(reqData).subscribe((res) => {
      this.structureService.announceStructureListUpdate(res);
    },
      err => console.log(err)
    );
    this.dialogRef.close();
  }
}