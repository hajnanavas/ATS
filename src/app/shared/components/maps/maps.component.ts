import { Component, Input, AfterViewInit } from '@angular/core';

import { MapService } from '../../services/map.service';
import { StructureService } from '../../services/structure.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {

  @Input() mapPage: string;

  structureArray: any[];
  structureListSubscription: any;

  constructor(private mapService: MapService, private structureService: StructureService, private apiService: ApiService) {
    this.structureListSubscription = this.structureService.structureList.subscribe(
      value => {
        this.getStructureList();
      })
  }

  ngAfterViewInit() {
    this.getStructureList();
  }

  getStructureList() {
    this.apiService.getStructures().subscribe(data => { this.structureArray = data; this.getMap() })
  }

  getMap() {
    if (this.mapPage == 'list')
      this.mapService.plotLocation(this.structureArray);
    else
      this.mapService.searchLocation(document.getElementById('pac-input'));
  }

  onChange(value) {
    if (!value.checked) {
      this.structureArray = this.structureArray.filter(item => item.hidden == "false");
      this.mapService.plotLocation(this.structureArray);
    }
    else
      this.getStructureList();
  }

  closeSearch() {
    (<HTMLInputElement>document.getElementById('pac-input')).value = '';
    this.mapService.deleteMarkers();
  }
}