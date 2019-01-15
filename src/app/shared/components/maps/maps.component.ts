import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { StructureService } from '../../services/structure-service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit {

  @Input() mapPage: string;

  structureArray: any[];

  constructor(private mapService: MapService, private structureService: StructureService) { }

  ngOnInit() {
    this.structureArray = this.structureService.getStructureList()
  }

  ngAfterViewInit() {
    this.getMap();
  }

  getMap() {

    if (this.mapPage == 'list') {
      this.mapService.plotLocation(this.structureArray);
    }
    else {
      var input = document.getElementById('pac-input');
      this.mapService.searchLocation(input);
    }

  }

  onChange(value) {
    this.structureArray = (value.checked === false) ? this.structureService.getStructureList() : this.structureService.filteredStructureList();
    this.mapService.plotLocation(this.structureArray);
  }
}