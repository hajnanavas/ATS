import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MapService, Map } from '../../services/map.service';
import { NgZone } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit {

  @Input() structureArray: any[];
  @Input() mapPage: string;
  latitude: any;
  longitude: any;

  constructor(private mapService: MapService, private ngZone: NgZone) { }

  ngOnInit() {
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
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.mapService.setLocation(place.geometry.location.lat(), place.geometry.location.lng());
        });
      });
    }

  }
}