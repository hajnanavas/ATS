import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('inside creation page');
  }

}
