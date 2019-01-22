import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss']
})
export class InfoWindowComponent implements OnInit {
  param: any;
  strokeColor: string;

  constructor() {
  }
  
  ngOnInit() {
    this.strokeColor = (this.param.occupiedSpace > this.param.low ? (this.param.occupiedSpace > this.param.medium ? (this.param.occupiedSpace > this.param.full ?  '#ff0000' : '#009900') : '#009900') : '#e7ea13');
  }
}
