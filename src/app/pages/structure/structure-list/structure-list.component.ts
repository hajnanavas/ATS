import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { StructureCreateComponent } from '../structure-create/structure-create.component';
import { StructureService } from 'src/app/shared/services/structure.service';
import { Structure } from 'src/app/shared/services/structure.interface';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements OnInit {
  structures: any = [];
  userListSubscription: any;

  constructor(public dialog: MatDialog, private structureService: StructureService, private http: HttpClient) {
    this.userListSubscription = this.structureService.structureList.subscribe(
      value => {
        this.getStructureList();
      })
  }

  ngOnInit() {
    this.getStructureList();
  }

  getStructureList() {
    this.http.get<Structure[]>("http://localhost:3000/structures/getStructures").subscribe(data => this.structures = data);
  };

  goToAddStructure() {
    this.structureService.announceStructureCreate('Structure_Create');
    const dialogRef = this.dialog.open(StructureCreateComponent, {
      width: '1000px',
    });
  }
  onChange(value) {
    if (value.checked === false)
      this.structures = this.structures.filter(item => item.hidden == "false")
    else
      this.getStructureList();
  }
}