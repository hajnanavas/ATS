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
    if (this.mapPage == 'list')
      this.structureArray.forEach(item => {
        var myLatlng = new google.maps.LatLng(item.latitude, item.longitude);
        var mapOptions = {
          zoom: 14,
          center: myLatlng,
          //mapTypeId: 'satellite'
          mapTypeId: google.maps.MapTypeId.ROADMAP//for roadMap
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({ position: myLatlng, map: map });
      })
    else {
      var maps = new google.maps.Map(document.getElementById('mapCase'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapTypeId: 'satellite'
      });
      // var marker = new google.maps.Marker({ position: { lat: -34.397, lng: 150.644 }, map: maps });}
    }
  }
}