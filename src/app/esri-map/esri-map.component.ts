import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import urlConstants from './layers-url-constants';
import { TemplateConstants } from './template-constants';
import { CriticalInfrastructure } from './layers-component';
import { Searcher } from './searcher-component';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _zoom = 8;
  private _center: Array<number> = [-70.6514212, -33.440616];
  private _basemap = 'streets';
  private zoom: number;
  private mapView: esri.MapView;
  private groupLayer: esri.GroupLayer;
  private layers;
  private searchWidget;

  constructor(@Inject(CriticalInfrastructure) private critical, @Inject(Searcher) private searcher) {}
  async ngOnInit() { this.initializeMap(); }
  async initializeMap() {
    try {
      const [EsriMap, EsriMapView, BasemapGallery, Expand, LayerList, FeatureLayer, GroupLayer, Search] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Expand',
        'esri/widgets/LayerList',
        'esri/layers/FeatureLayer',
        'esri/layers/GroupLayer',
        'esri/widgets/Search'
      ]);
      const mapProperties: esri.MapProperties = { basemap: this._basemap };
      const map: esri.Map = new EsriMap(mapProperties);
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      };
      this.mapView = new EsriMapView(mapViewProperties);
      const basemapGallery = new BasemapGallery({
        view: this.mapView,
        container: document.createElement('div')
      });
      const expand = new Expand({ view: this.mapView, content: basemapGallery });
      const layerList = new LayerList({ view: this.mapView });
      this.mapView.when(() => { this.mapLoaded.emit(true); });
      this.searchWidget = this.searcher.getSearcher(FeatureLayer, Search, this);
      this.groupLayer = this.critical.getLayers(FeatureLayer, GroupLayer, this);
      this.mapView.ui.add(expand, 'top-left');
      this.layers = this.groupLayer.layers;
      this.mapView.ui.add(layerList, 'top-left');
      this.mapView.ui.add(this.searchWidget, 'top-right');
      this.mapView.map.add(this.groupLayer);
    } catch(error) {
      alert('se produjo un error');
      console.log('error: ' + error);
    }
  }

  private setGroupLayer(index: number): void {
    console.log('valor: ' + index);
    if(index <= 0) return;
    const indexes = [];
    let value = 24;
    for(let i = 1; i <= 24; i++) indexes[i] = value--;
    this.layers._items[indexes[index]].visible = true;
  }

}
