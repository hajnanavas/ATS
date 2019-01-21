import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StructureCreateComponent } from '../structure-create/structure-create.component';
import { StructureService } from 'src/app/shared/services/structure.service';
import { Structure } from 'src/app/shared/services/structure';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements OnInit {

  structures: Structure[];

  constructor(public dialog: MatDialog, private structureService: StructureService) {
  }

  ngOnInit() {
    this.structureService.getStructureList().subscribe(structures => this.structures = structures);
  }

  goToAddStructure() {
    const dialogRef = this.dialog.open(StructureCreateComponent, {
      width: '1000px',
    });
  }
  onChange(value) {
    if (value.checked === false)
      this.structures = this.structures.filter(item => item.hidden == false)
    else
      this.structureService.getStructureList().subscribe(structures => this.structures = structures);
  }
}