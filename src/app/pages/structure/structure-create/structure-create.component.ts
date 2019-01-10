import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StructureService } from 'src/app/shared/services/structure-service';
import { FormGroup, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

declare let google: any;

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.scss']
})
export class StructureCreateComponent implements OnInit {

  structuresArray: any = [];
  structureCreateSubscription: any;
  private createForm: FormGroup;
  locations: any[];
  filteredLocations: any = [];
  latitude: any;
  longitude: any;

  constructor(public dialogRef: MatDialogRef<StructureCreateComponent>, private structureService: StructureService) {
  }

  ngOnInit() {

    var maps = new google.maps.Map(document.getElementById('mapCase'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    this.createForm = new FormGroup({
      structureName: new FormControl('', []),
      structureType: new FormControl('', []),
      color: new FormControl('', []),
      abbreviatedName: new FormControl(),
      description: new FormControl(),
      status: new FormControl('', []),
      hidden: new FormControl(),
      note: new FormControl(),
      totalSpace: new FormControl(),
      occupiedSpace: new FormControl('', []),
      location: new FormControl('', []),
      medium: new FormControl(),
      low: new FormControl(),
      full: new FormControl()
    });

    this.getLocation();
    this.changeLocation();

  }
  onNoClick(): void {
    this.structureService.updateStructureList({
      structureName: this.createForm.controls.structureName.value,
      structureType: this.createForm.controls.structureType.value,
      totalSpace: this.createForm.controls.totalSpace.value,
      occupiedSpace: this.createForm.controls.occupiedSpace.value,
      color: this.createForm.controls.color.value,
      status: this.createForm.controls.status.value,
      hidden: this.createForm.controls.hidden.value,
      latitude: this.latitude,
      longitude: this.longitude,
      low: this.createForm.controls.low.value,
      medium: this.createForm.controls.medium.value,
      full: this.createForm.controls.full.value
    });
    this.dialogRef.close();
  }

  getLocation() {
    this.locations = [
      {
        "geometry": {
          "location": {
            "lat": -33.867217,
            "lng": 151.195939
          }
        },
        "name": "Rhythmboat Cruises",
        "place_id": "ChIJIfBAsjeuEmsRdgu9Pl1Ps48",
        "scope": "GOOGLE",
        "vicinity": "48 Pirrama Rd, Pyrmont"
      },
      {
        "geometry": {
          "location": {
            "lat": -33.866786,
            "lng": 151.195633
          }
        },
        "name": "Private Charter Sydney Habour Cruise",
        "place_id": "ChIJ5xQ7szeuEmsRs6Kj7YFZE9k",
        "scope": "GOOGLE",
        "vicinity": "48 Pirrama Rd, Pyrmont"
      }]
  }
  changeLocation() {
    this.filteredLocations = this.createForm.controls.location.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterLocations(state) : this.locations.slice())
      );
  }
  _filterLocations(value: string) {
    const filterValue = value.toLowerCase();
    return this.locations.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
  }
  onLocationSelect(item) {
    this.latitude = item.geometry.location.lat;
    this.longitude = item.geometry.location.lng;
  }

}