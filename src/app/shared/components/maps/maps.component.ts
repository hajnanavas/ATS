import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { Structure } from '../../services/structure';
import { StructureService } from '../../services/structure-service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit {

  @Input() structureArray: any[];
  @Input() mapPage: string;

  constructor(private mapService: MapService, private structureService:StructureService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getMap();
  }

  getMap() {

    if (this.mapPage == 'list') {
      this.mapService.plotLocation(this.structureArray);
    }

  }
  onChange(value) {
    this.structureArray = (value.checked === false) ? this.structureService.getStructureList() : this.structureService.filteredStructureList();
    this.mapService.plotLocation(this.structureArray);
  }
}