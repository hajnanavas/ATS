import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StructureCreateComponent } from '../structure-create/structure-create.component';
import { StructureService } from 'src/app/shared/services/structure.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements OnInit {
  structures: any = [];
  userListSubscription: any;

  constructor(public dialog: MatDialog, private structureService: StructureService, private apiService:ApiService) {
    this.userListSubscription = this.structureService.structureList.subscribe(
      value => {
        this.getStructureList();
      })
  }

  ngOnInit() {
    this.getStructureList();
  }

  getStructureList() {
    this.apiService.getStructures().subscribe(data => this.structures = data);
  };

  goToAddStructure() {
    this.structureService.announceStructureCreate('Structure_Create');
    const dialogRef = this.dialog.open(StructureCreateComponent, {
      width: '1000px',
    });
  }
  onChange(value) {
    if (!value.checked)
      this.structures = this.structures.filter(item => item.hidden == "false")
    else
      this.getStructureList();
  }

  trackByFn(index, item) {
    return item.id;
  }
  
}