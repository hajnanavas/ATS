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
    latitude: 52.525595,
    longitude: 13.393085,
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
    latitude: 52.505590,
    longitude: 13.393080,
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
    latitude: 52.505595,
    longitude: 13.393078,
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
    latitude: 52.510067,
    longitude: 13.393085,
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
    latitude: 52.520067,
    longitude: 13.393080,
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