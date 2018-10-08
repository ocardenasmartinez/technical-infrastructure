import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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

  async ngOnInit() {this.initializeMap();}

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
      const mapProperties: esri.MapProperties = {basemap: this._basemap};
      const map: esri.Map = new EsriMap(mapProperties);
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      };
      let mapView: esri.MapView = new EsriMapView(mapViewProperties);
      mapView.ui.remove('zoom');
      mapView.when(() => {this.mapLoaded.emit(true);});
      this.zoom = new Zoom({viewModel: {view: mapView}});
      const searchWidget = new Search({view: mapView});
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

  async setZoomIn() {this.zoom.zoomIn();}
  async setZoomOut() {this.zoom.zoomOut();}

}
