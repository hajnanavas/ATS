import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  requestData: any;
  structureCreateSubscription: any;

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>,
    private structureService: StructureService,
    private mapService: MapService,
    private formBuilder: FormBuilder,
    private http: HttpClient) {
    this.structureCreateSubscription = this.structureService.structureCreate.subscribe(
      value => {
      })
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
    this.http.post("http://localhost:3000/structures/addStructure", {
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
      "note": note
    }, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe((res) => {
      this.structureService.announceStructureListUpdate(res);
    },
      err => console.log(err)
    );
    this.dialogRef.close();
  }
}