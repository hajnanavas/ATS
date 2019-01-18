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
  }

  ngAfterViewInit() {
    this.structureService.getStructureList().subscribe(structures => { this.structureArray = structures; this.getMap() });
  }

  getMap() {

    if (this.mapPage == 'list')
      this.mapService.plotLocation(this.structureArray);
    else {
      this.mapService.searchLocation(document.getElementById('pac-input'));
    }

  }

  onChange(value) {
    if (value.checked === false)
      this.structureArray = this.structureArray.filter(item => item.hidden == false)
    else
      this.structureService.getStructureList().subscribe(structures => this.structureArray = structures);
    this.mapService.plotLocation(this.structureArray);
  }
  closeSearch() {
    (<HTMLInputElement>document.getElementById('pac-input')).value = '';
  }
}