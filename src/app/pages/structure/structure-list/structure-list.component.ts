import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StructureCreateComponent } from '../structure-create/structure-create.component';
import { StructureService } from 'src/app/shared/services/structure-service';
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
    this.structures = this.structureService.getStructureList();
  }

  goToAddStructure() {
    const dialogRef = this.dialog.open(StructureCreateComponent, {
      width: '1000px',
    });
  }
  onChange(value){
    this.structures = (value.checked === false) ?this.structureService.getStructureList():this.structureService.filteredStructureList();
  }
}