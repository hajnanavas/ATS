import { Injectable, NgZone } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material';

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

  constructor(private ngZone: NgZone) { }

  plotLocation(structureArray) {
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
      <mat-progress-spinner
      class="example-margin"
      color="primary"
      value=${(item.occupiedSpace / item.totalSpace) * 100}>
  </mat-progress-spinner><br>
  <p>${(item.occupiedSpace / item.totalSpace) * 100} %</p><br>
      <p>${item.occupiedSpace} of ${item.totalSpace} Spots Occupied</p>
      <div class='linkGrp'><a>View Structure</a><br>
      <a>Make Adjustment</a><br>
      <a>View Occupany Report</a></div>
      </div>`

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(item.latitude, item.longitude),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function (marker, i) {
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
    console.log(this.mapContent);
  }

  getLocation(){
    return this.mapContent;
  }
}
