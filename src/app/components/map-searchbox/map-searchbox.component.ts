import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-map-searchbox',
  templateUrl: './map-searchbox.component.html',
  styleUrls: ['./map-searchbox.component.scss']
})
export class MapSearchboxComponent implements OnInit {
  searchResult = [
    {
      name: 'Toledo City',
      lat: 10.3794,
      lng: 123.6418
    },
    {
      name: 'Cebu City',
      lat: 10.3157,
      lng: 123.8854
    },
    {
      name: 'Mandaue City',
      lat: 10.3237,
      lng: 123.9227
    },
    {
      name: 'Lapu-Lapu City',
      lat: 10.3103,
      lng: 123.9493
    },
    {
      name: 'Talisay City',
      lat: 10.2448,
      lng: 123.8494
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
