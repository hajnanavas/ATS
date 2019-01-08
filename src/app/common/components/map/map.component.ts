import { Component, OnInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }

}
