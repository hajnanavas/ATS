import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MapService } from '../../services/map.service';
import { StructureService } from '../../services/structure-service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() mapPage: string;

  structureArray: any[];

  constructor(private mapService: MapService, private structureService: StructureService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.structureService.getStructureList().subscribe(structures => {console.log('lllllllll', structures); this.structureArray = structures; this.getMap()});
  }

  ngOnDestroy() {
    console.log('i am dead')
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
      this.structureService.getStructureList().subscribe(structures => {console.log('gggggggggggg', structures); this.structureArray = structures});
    this.mapService.plotLocation(this.structureArray);
  }
}