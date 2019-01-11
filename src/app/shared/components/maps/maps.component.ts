import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit, AfterViewInit {

  @Input() structureArray: any[];
  @Input() mapPage: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getMap();
  }

  getMap() {

    if (this.mapPage == 'list') {

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var marker, i;

      this.structureArray.forEach(item => {
        var structureContent=`<div>
        <h3 id="firstHeading" class="firstHeading">${item.structureName} ${item.structureType} - Est</h3><br>
        <h4>${item.structureType}. ${item.totalSpace-item.occupiedSpace} of ${item.totalSpace} available<h4><br>
    
        <p>${item.occupiedSpace} of ${item.totalSpace} Spots Occupied</p>
        <div class='linkGrp'><a>View Structure</a><br>
        <a>Make Adjustment</a><br>
        <a>View Occupany Report</a></div>
        </div>`
        var infowindow = new google.maps.InfoWindow({
          content: structureContent
        });
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            //infowindow.setContent(item.structureName);
            infowindow.open(map, marker);
          }
        })(marker, i));
      });
    }

  }
}