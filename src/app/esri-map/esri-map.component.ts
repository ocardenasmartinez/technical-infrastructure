import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import urlConstants from './layers-url-constants';
import { TemplateConstants } from './template-constants';
import { LayerCriticalInf } from './layers-component';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _zoom: number = 8;
  private _center: Array<number> = [-70.6514212, -33.440616];
  private _basemap: string = 'streets';
  private zoom;
  private mapView: esri.MapView;

  constructor(@Inject(LayerCriticalInf) private layerCriticalInf) {}
  async ngOnInit() {this.initializeMap();}
  async initializeMap() {
    try {
      const [EsriMap, EsriMapView, BasemapGallery, Expand, LayerList] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Expand',
        'esri/widgets/LayerList'
      ]);

      const mapProperties: esri.MapProperties = {basemap: this._basemap};

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
        container: document.createElement("div")
      });
      const expand = new Expand({view: this.mapView, content: basemapGallery});

      const layerList = new LayerList({
        view: this.mapView
      });

      this.mapView.when(() => {this.mapLoaded.emit(true);});

      this.mapView.ui.add(expand, 'top-left');
      this.mapView.ui.add(layerList, 'top-left');

      this.setSearcher();
      this.mapView.map.add(this.layerCriticalInf.getLayers());

    } catch (error) {
      alert('se produjo un error');
      console.log('error: ' + error);
    }
  }

  async setSearcher() {

    const [Search, FeatureLayer] = await loadModules([
      'esri/widgets/Search',
      'esri/layers/FeatureLayer'
    ]);

    const searchWidget = new Search({
      view: this.mapView,
        sources: [{
        featureLayer: new FeatureLayer({
          url: urlConstants.STI_CRM_ESTACIONES,
          outFields: ["*"]
        }),
        searchFields: ["COD_EMPRESA"],
        displayField: "COD_EMPRESA",
        exactMatch: false,
        name: "STI CRM ESTACIONES",
        placeholder: "Código Empresa",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      }]
    });
    this.mapView.ui.add(searchWidget, 'top-right');
  }

}
