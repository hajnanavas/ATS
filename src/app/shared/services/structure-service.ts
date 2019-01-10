import { Injectable } from '@angular/core';
import { Structure } from './structure';

@Injectable()
export class StructureService {
    structureContent : Structure[]= [ {
            structureName: 'ATS State College Parking Lot',
            structureType: 'Lot',
            totalSpace: 38,
            occupiedSpace: 33,
            color: 'blue',
            status: false,
            latitude: 52.525595,
            longitude: 13.393085
          },
          {
            structureName: 'Space 4',
            structureType: 'Space',
            totalSpace: 38,
            occupiedSpace: 33,
            color: 'green',
            status: false,
            latitude: 52.505590,
            longitude: 13.393080
          },
          {
            structureName: 'Space 5',
            structureType: 'Space',
            totalSpace: 38,
            occupiedSpace: 33,
            color: 'green',
            status: false,
            latitude: 52.505595,
            longitude: 13.393078
          },
          {
            structureName: 'Space 3',
            structureType: 'Space',
            totalSpace: 38,
            occupiedSpace: 33,
            color: 'green',
            status: false,
            latitude: 52.510067,
            longitude: 13.393085
          },
          {
            structureName: 'Space 2',
            structureType: 'Space',
            totalSpace: 38,
            occupiedSpace: 33,
            color: 'green',
            status: false,
            latitude: 52.520067,
            longitude: 13.393080
          }];

    getStructureList(): Structure[] {
        return this.structureContent
    };
    updateStructureList(item){
        this.structureContent.push(item);
    }
}