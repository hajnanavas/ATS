import { Injectable } from '@angular/core';

import { Structure } from './structure.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class StructureService {
  structureContent: Structure[] = [{
    structureName: 'ATS State College Parking Lot',
    structureType: 'Lot',
    totalSpace: 38,
    occupiedSpace: 33,
    color: 'blue',
    status: 'active',
    latitude: -33.890542,
    longitude: 151.274856,
    hidden: false,
    low: 16,
    medium: 25,
    full: 34
  },
  {
    structureName: 'Space 4',
    structureType: 'Space',
    totalSpace: 50,
    occupiedSpace: 16,
    color: 'green',
    status: 'active',
    latitude: -33.923036,
    longitude: 151.259052,
    hidden: true,
    low: 20,
    medium: 30,
    full: 34
  },
  {
    structureName: 'Space 5',
    structureType: 'Space',
    totalSpace: 38,
    occupiedSpace: 38,
    color: 'green',
    status: 'inactive',
    latitude: -34.028249,
    longitude: 151.157507,
    hidden: false,
    low: 26,
    medium: 30,
    full: 34
  },
  {
    structureName: 'Space 3',
    structureType: 'Space',
    totalSpace: 38,
    occupiedSpace: 33,
    color: 'green',
    status: 'active',
    latitude: -33.80010128657071,
    longitude: 151.28747820854187,
    hidden: false,
    low: 26,
    medium: 30,
    full: 34
  },
  {
    structureName: 'Space 2',
    structureType: 'Space',
    totalSpace: 38,
    occupiedSpace: 33,
    color: 'green',
    status: 'inactive',
    latitude: -33.950198,
    longitude: 151.259302,
    hidden: false,
    low: 26,
    medium: 30,
    full: 34
  }];
  _form: BehaviorSubject<Structure[]>;


  constructor() {
    this._form = new BehaviorSubject<Structure[]>(this.structureContent);
  }

  getStructureList(): Observable<Structure[]> {
    return this._form;
  };

  updateStructureList(nextState: any) {
    this._form.next([...this._form.getValue(), ...nextState]);
  }
}