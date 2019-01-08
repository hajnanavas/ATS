import { Component, OnInit } from '@angular/core';

declare let google:any;

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss']
})
export class StructureListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('inside structure listing page');
    var uluru = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }

  // addStructure(){
  //   console.log("add structure");
  // }
}
