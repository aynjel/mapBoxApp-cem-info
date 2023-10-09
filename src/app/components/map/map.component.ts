import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  map!: mapboxgl.Map;

  // get current location
  currentLat: number = mapboxgl.LngLat.convert([environment.mapbox.center.lng, environment.mapbox.center.lat]).lat;
  currentLng: number = mapboxgl.LngLat.convert([environment.mapbox.center.lng, environment.mapbox.center.lat]).lng;

  constructor() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.map.flyTo({
        center: [this.currentLng, this.currentLat],
        zoom: environment.mapbox.zoom + 6,
      });

      // Add marker on current location
      new mapboxgl.Marker({
        color: '#FF0000',
        draggable: true
      })
      .setLngLat([this.currentLng, this.currentLat])
      .addTo(this.map);

      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        fitBoundsOptions: {
          maxZoom: 14
        },
        showAccuracyCircle: true,
        showUserLocation: true,
        showUserHeading: true
      });
    });
  }
  
  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      accessToken: environment.mapbox.accessToken,
      style: environment.mapbox.style,
      zoom: environment.mapbox.zoom,
      center: [this.currentLng, this.currentLat],
      pitch: environment.mapbox.pitch,
      bearing: environment.mapbox.bearing,
      antialias: environment.mapbox.antialias,
      attributionControl: environment.mapbox.attribution,
    });

    // Add map controls
    this.map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    }), 'top-right');

    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      fitBoundsOptions: {
        maxZoom: 14
      },
      showAccuracyCircle: true,
      showUserLocation: true,
      showUserHeading: true
    }));

    this.map.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    }));


    this.map.on('load', ()=> { });
    
  }

  markerClick(e: any){
    alert(e);
  }
}
