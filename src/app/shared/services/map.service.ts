import { Injectable, ComponentRef, Injector, ComponentFactoryResolver, ApplicationRef, NgZone } from '@angular/core';

import { LoaderService } from './loader.service';
import { InfoWindowComponent } from '../components/info-window/info-window.component';
export interface Map {
  lat: any,
  lng: any
}
declare let google: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapContent: Map[];
  place: any;
  statusColor: string;
  map: any;
  compRef: ComponentRef<InfoWindowComponent>;
  infowindow: any;
  marker: any;
  maps: any;
  markers: any;
  constructor(private loaderService: LoaderService, private zone: NgZone, private resolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {
  }

  plotLocation(structureArray) {
    
    var i;
    this.loaderService.load('map').then(res => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      this.infowindow = new google.maps.InfoWindow();

      structureArray.forEach(item => {
        this.statusColor = item.occupiedSpace > item.low ? (item.occupiedSpace > item.medium ? (item.occupiedSpace > item.full ? 'ff0000' : '009900') : "009900") : "e7ea13";
        var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/" + this.statusColor + "/");
        this.marker = new google.maps.Marker({
          position: new google.maps.LatLng(item.latitude, item.longitude),
          map: this.map,
          icon: pinImage,
        });

        this.marker.addListener('click', ((marker, i) => {
          return () => {
            this.zone.run(() => {
              if (this.compRef) this.compRef.destroy();

              const compFactory = this.resolver.resolveComponentFactory(InfoWindowComponent);
              this.compRef = compFactory.create(this.injector);

              this.compRef.instance.param = item;

              let div = document.createElement('div');
              div.appendChild(this.compRef.location.nativeElement);

              this.infowindow.setContent(div);
              this.infowindow.open(this.map, marker);

              this.appRef.attachView(this.compRef.hostView);
              this.compRef.onDestroy(() => {
                this.appRef.detachView(this.compRef.hostView);
              });
            });
          }
        })(this.marker, i));

        this.infowindow.addListener('closeclick', _ => {
          this.compRef.destroy();
        });
      });
    }).catch(err => {

    })
  }

  setLocation(lat, lng) {
    this.mapContent = [];
    this.mapContent.push({ lat: lat, lng: lng });
  }

  getLocation() {
    return this.mapContent;
  }

  searchLocation(input) {
    
    this.loaderService.load('map').then(res => {
      this.maps = new google.maps.Map(document.getElementById('mapCase'), {
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
        this.maps.setCenter({ lat: lat, lng: lng });
        if (this.markers != null) {
          this.markers.setMap(null);
          this.markers = null;
        }
        this.markers = new google.maps.Marker({
          center: { lat: lat, lng: lng },
          position: { lat: lat, lng: lng },
          map: this.maps
        });
      });
      var geocoder = new google.maps.Geocoder();
      google.maps.event.addListener(this.maps, 'click', (event) => {
        if (this.markers != null) {
          this.markers.setMap(null);
          this.markers = null;
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
        this.markers = new google.maps.Marker({
          position: event.latLng,
          map: this.maps
        });
      });
    }).catch(err => {

    })
  }

  deleteMarkers(){
    if (this.markers != null) {
      this.markers.setMap(null);
      this.markers = null;
      this.mapContent = []
    }
  }
}