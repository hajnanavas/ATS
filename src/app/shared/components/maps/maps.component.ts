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
    this.structureService.getStructureList().subscribe(structures => this.structureArray = structures);
  }

  ngAfterViewInit() {
    this.getMap();
  }

  getMap() {

    if (this.mapPage == 'list')
      this.mapService.plotLocation(this.structureArray);
    else {
      var input = document.getElementById('pac-input');
      this.mapService.searchLocation(input);
    }

  }

  onChange(value) {
    if (value.checked === true)
      this.structureArray = this.structureArray.filter(item => item.hidden == false)
    else
      this.structureService.getStructureList().subscribe(structures => this.structureArray = structures);
    this.mapService.plotLocation(this.structureArray);
  }
}