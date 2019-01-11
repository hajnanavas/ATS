import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MapService, Map } from '../../services/map.service';
import { NgZone } from '@angular/core';
import { StructureService } from '../../services/structure-service';

declare let google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit {

  @Input() mapPage: string;

  structureArray: any[];
  latitude: any;
  longitude: any;
  place: any;

  constructor(private mapService: MapService, private ngZone: NgZone, private structureService: StructureService) { }

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
      var maps = new google.maps.Map(document.getElementById('mapCase'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapTypeId: 'satellite'
      });
      var input = document.getElementById('pac-input');
      const autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          this.place = autocomplete.getPlace();
          this.mapService.setLocation(this.place.geometry.location.lat(), this.place.geometry.location.lng());
        });
      });
    }

  }

  onChange(value) {
    this.structureArray = (value.checked === false) ? this.structureService.getStructureList() : this.structureService.filteredStructureList();
    this.mapService.plotLocation(this.structureArray);
  }
}