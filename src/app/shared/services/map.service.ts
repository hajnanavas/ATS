import { Injectable } from '@angular/core';

export interface Map {
  lat: any,
  lng: any
}
declare let google: any;

@Injectable({
  providedIn: 'root'
})

export class MapService {

  mapContent: Map[];
  place: any;

  constructor() { }

  plotLocation(structureArray) {
    console.log('}}}}}}}}}}}}}}}',structureArray)
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    structureArray.forEach(item => {
      var structureContent = `<div>
      <h3 id="firstHeading" class="firstHeading">${item.structureName} ${item.structureType} - Est</h3><br>
      <h4>${item.structureType}. ${item.totalSpace - item.occupiedSpace} of ${item.totalSpace} available</h4><br>
      <div class='progress-bar'>
      <p class='percntg'>${(item.occupiedSpace / item.totalSpace * 100).toFixed(2)} %</p>
      </div>
      <p>${item.occupiedSpace} of ${item.totalSpace} Spots Occupied</p>
      <div class='linkGrp'><a>View Structure</a><br>
      <a>Make Adjustment</a><br>
      <a>View Occupany Report</a></div>
      </div>`

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(item.latitude, item.longitude),
        map: map
      });

      google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
        return function () {

          infowindow.close(map, marker);
          infowindow = new google.maps.InfoWindow({
            content: structureContent
          });
          infowindow.open(map, marker);
        }
      })(marker, i));
    });
  }

  setLocation(lat, lng) {
    this.mapContent = [];
    this.mapContent.push({ lat: lat, lng: lng });
  }

  getLocation() {
    return this.mapContent;
  }

  searchLocation(input) {
    var maps = new google.maps.Map(document.getElementById('mapCase'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      mapTypeId: 'satellite'
    });

    const autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
    autocomplete.addListener("place_changed", () => {
      this.place = autocomplete.getPlace();
      this.setLocation(this.place.geometry.location.lat(), this.place.geometry.location.lng());
      maps.setCenter({ lat: this.place.geometry.location.lat(), lng: this.place.geometry.location.lng() });
      var markers = new google.maps.Marker({
        center: { lat: this.place.geometry.location.lat(), lng: this.place.geometry.location.lng() },
        position: { lat: this.place.geometry.location.lat(), lng: this.place.geometry.location.lng() },
        map: maps
      });
    });
  }
}
