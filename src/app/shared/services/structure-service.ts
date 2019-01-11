import { Injectable } from '@angular/core';
import { Structure } from './structure';

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
    low: 36,
    medium: 30,
    full: 34
  },
  {
    structureName: 'Space 4',
    structureType: 'Space',
    totalSpace: 38,
    occupiedSpace: 33,
    color: 'green',
    status: 'active',
    latitude:-33.923036,
    longitude: 151.259052,
    hidden: true,
    low: 36,
    medium: 30,
    full: 34
  },
  {
    structureName: 'Space 5',
    structureType: 'Space',
    totalSpace: 38,
    occupiedSpace: 33,
    color: 'green',
    status: 'inactive',
    latitude: -34.028249,
    longitude: 151.157507,
    hidden: false,
    low: 36,
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
    low: 36,
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
    low: 36,
    medium: 30,
    full: 34
  }];

  getStructureList(): Structure[] {
    return this.structureContent
  };
  updateStructureList(item) {
    this.structureContent.push(item);
  }
  filteredStructureList() {
    return this.structureContent.filter(item => item.hidden == false);
  }
}