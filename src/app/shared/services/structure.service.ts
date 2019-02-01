import { Injectable } from '@angular/core';

import { Structure } from './structure.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class StructureService {
 
  structureListSource: BehaviorSubject<Structure[]>;
  structureList: Observable<Structure[]>;
  structureCreateSource: BehaviorSubject<string>;
  structureCreate: Observable<string>;

  constructor() {

    this.structureListSource = new BehaviorSubject<Structure[]>([]);
    this.structureList = this.structureListSource.asObservable();
    this.structureCreateSource = new BehaviorSubject<string>('');
    this.structureCreate = this.structureCreateSource.asObservable();
  }

  announceStructureCreate(value: string) {
    this.structureCreateSource.next(value);
  }
  
  announceStructureListUpdate(value: any) {
    this.structureListSource.next(value);
  }
}