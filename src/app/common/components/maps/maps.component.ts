import { Component, OnInit, Input } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {

  @Input() structureArray: any[];

  constructor() { }

  ngOnInit() {
    console.log('sructure passed is',this.structureArray);
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
  }

}
