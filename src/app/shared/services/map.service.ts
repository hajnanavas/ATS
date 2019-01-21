import { Injectable } from '@angular/core';

export interface Map {
  lat: any,
  lng: any
}
declare let google: any;

export interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'map', src: 'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false&key=AIzaSyAeWGJ5mJmTeYmLOhRu6TQ88p7nS5czlw4' },
];

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public loadAPI: Promise<any>;
  private scripts: any = {};
  mapContent: Map[];
  place: any;
  statusColor: string;

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  plotLocation(structureArray) {
    this.load('map').then(res => {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infowindow = new google.maps.InfoWindow();
      var marker, i;

      structureArray.forEach(item => {
        var structureContent = `<div>
      <h3 id="firstHeading" class="firstHeading">${item.structureName} ${item.structureType} - Est</h3><br>
      <h4>${item.structureType}. ${item.totalSpace - item.occupiedSpace} of ${item.totalSpace} available</h4><br>
      <div class='progress-bar'>
      <p class='percntg'>${(item.occupiedSpace / item.totalSpace * 100).toFixed(2)} %</p>
      </div>
      <p>${item.occupiedSpace} of ${item.totalSpace} Spots Occupied</p>
      <div class='linkGrp'><a>View Structure</a><br>
      <a>Make Adjustment</a><br>
      <a>View Occupany Report</a></div>
      </div>`
        this.statusColor = item.occupiedSpace > item.low ? (item.occupiedSpace > item.medium ? (item.occupiedSpace > item.full ? 'ff0000' : '009900') : "009900") : "e7ea13";
        var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/" + this.statusColor + "/");
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: map,
          icon: pinImage,
        });

        google.maps.event.addListener(marker, 'mouseover', ((marker, i) => {
          return function () {

            infowindow.close(map, marker);
            infowindow = new google.maps.InfoWindow({
              content: structureContent
            });
            infowindow.open(map, marker);
          }
        })(marker, i));
      });
    }).catch(err => {

    })
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => reject({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

  setLocation(lat, lng) {
    this.mapContent = [];
    this.mapContent.push({ lat: lat, lng: lng });
  }

  getLocation() {
    return this.mapContent;
  }

  searchLocation(input) {
    var markers;
    this.load('map').then(res => {
      var maps = new google.maps.Map(document.getElementById('mapCase'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapTypeId: 'satellite'
      });

      const autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
      autocomplete.addListener("place_changed", () => {
        this.place = autocomplete.getPlace();
        const lat = this.place.geometry.location.lat();
        const lng = this.place.geometry.location.lng();
        this.setLocation(lat, lng);
        maps.setCenter({ lat: lat, lng: lng });
        if (markers != null) {
          markers.setMap(null);
          markers = null;
        }
        markers = new google.maps.Marker({
          center: { lat: lat, lng: lng },
          position: { lat: lat, lng: lng },
          map: maps
        });
      });
      var geocoder = new google.maps.Geocoder();
      google.maps.event.addListener(maps, 'click', (event) => {
        if (markers != null) {
          markers.setMap(null);
          markers = null;
        }
        this.setLocation(event.latLng.lat(), event.latLng.lng());
        geocoder.geocode({
          'latLng': event.latLng
        }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              input.value = results[0].formatted_address;
            }
          }
        });
        markers = new google.maps.Marker({
          position: event.latLng,
          map: maps
        });
      });
    }).catch(err => {

    })
  }
}
