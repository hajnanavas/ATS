import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss']
})
export class InfoWindowComponent implements OnInit {
  param: any;
  counter: number = 0;

  onCounterIncremented = new EventEmitter();
  constructor() { }
  color = 'primary';
  mode = 'determinate';
  value = 50;
  ngOnInit() {
 console.log('param',this.param);
  }

  increment() {
    this.onCounterIncremented.emit(++this.counter);
  }
}
