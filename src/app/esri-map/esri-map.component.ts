/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _zoom: number = 3;
  private _center: Array<number> = [-70.6514212, -33.440616];
  private _basemap: string = 'streets-relief-vector';
  private zoom;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  async initializeMap() {
    try {

      const [EsriMap, EsriMapView, Zoom, Search, BasemapGallery, Expand] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/widgets/Zoom',
        'esri/widgets/Search',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Expand'
      ]);

      const mapProperties: esri.MapProperties = {
        basemap: this._basemap
      };

      const map: esri.Map = new EsriMap(mapProperties);
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      };

      let mapView: esri.MapView = new EsriMapView(mapViewProperties);
      mapView.ui.remove('zoom');
      mapView.when(() => {
        this.mapLoaded.emit(true);
      });

      this.zoom = new Zoom({
        viewModel: {
          view: mapView
        }
      });

      const searchWidget = new Search({
        view: mapView
      });

      const basemapGallery = new BasemapGallery({
        view: mapView,
        container: document.createElement("div")
      });

      const bgExpand = new Expand({
        view: mapView,
        content: basemapGallery
      });

      mapView.ui.add(searchWidget, 'top-right');
      mapView.ui.add(bgExpand, 'top-left');

    } catch (error) {
      alert('se produjo un error');
      console.log('error : ' + error);
    }

  }

  async setZoomIn() {
    this.zoom.zoomIn();
  }

  async setZoomOut() {
    this.zoom.zoomOut();
  }

}
