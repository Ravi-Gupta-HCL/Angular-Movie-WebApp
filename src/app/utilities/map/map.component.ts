import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {  
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>()

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 5,
    center: latLng(22.985198527325206, -282.74414062500006)
  };
   
  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent)  {
    const latitude = event.latlng.lat;
    const longitude= event.latlng.lng;
    console.log(latitude,longitude);
    this.layers = [];
    this.layers.push(marker([latitude,longitude]));
    this.onSelectedLocation.emit({latitude,longitude});
  }
}

function outputAst(): (target: MapComponent, propertyKey: "options") => void {
  throw new Error('Function not implemented.');
}

