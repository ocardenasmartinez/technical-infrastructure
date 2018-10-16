import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import urlConstants from './layers-url-constants';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _zoom: number = 5;
  private _center: Array<number> = [-70.6514212, -33.440616];
  private _basemap: string = 'streets-relief-vector';
  private zoom;

  constructor() { }
  async ngOnInit() {this.initializeMap();}
  async initializeMap() {
    try {
      const [EsriMap, EsriMapView, Zoom, Search, BasemapGallery, Expand, FeatureLayer, LayerList] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/widgets/Zoom',
        'esri/widgets/Search',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Expand',
        'esri/layers/FeatureLayer',
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
      let mapView: esri.MapView = new EsriMapView(mapViewProperties);
      //mapView.ui.remove('zoom');
      mapView.when(() => {this.mapLoaded.emit(true);});
      this.zoom = new Zoom({viewModel: {view: mapView}});
      const searchWidget = new Search({
        view: mapView,
        sources: [{
          featureLayer: new FeatureLayer({
            url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/0",
            outFields: ["*"]
          }),
          searchFields: ["NAME"],
          displayField: "NAME ",
          exactMatch: false,
          name: "Nodos Telsur",
          placeholder: "Nombre",
          maxResults: 6,
          maxSuggestions: 6,
          suggestionsEnabled: true,
          minSuggestCharacters: 0
        },{
          featureLayer: new FeatureLayer({
            url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/1",
            outFields: ["*"]
          }),
          searchFields: ["Name"],
          displayField: "Name",
          exactMatch: false,
          name: "Trazado Telsur Project",
          placeholder: "Nombre",
          maxResults: 6,
          maxSuggestions: 6,
          suggestionsEnabled: true,
          minSuggestCharacters: 0
        },{
          featureLayer: new FeatureLayer({
            url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/2",
            outFields: ["*"]
          }),
          searchFields: ["NAME"],
          displayField: "NAME",
          exactMatch: false,
          name: "Trazado Telsur",
          placeholder: "Nombre",
          maxResults: 6,
          maxSuggestions: 6,
          suggestionsEnabled: true,
          minSuggestCharacters: 0
        },{
          featureLayer: new FeatureLayer({
            url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0",
            outFields: ["*"]
          }),
          searchFields: ["NOMBRE_INSTALACIÓN"],
          displayField: "NOMBRE_INSTALACIÓN",
          exactMatch: false,
          name: "Macro zona centro norte Wom",
          placeholder: "Nombre",
          maxResults: 6,
          maxSuggestions: 6,
          suggestionsEnabled: true,
          minSuggestCharacters: 0
        },{
          featureLayer: new FeatureLayer({
            url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/1",
            outFields: ["*"]
          }),
          searchFields: ["NOMBRE_INSTALACIÓN"],
          displayField: "NOMBRE_INSTALACIÓN",
          exactMatch: false,
          name: "Macro zona centro norte Will",
          placeholder: "Nombre",
          maxResults: 6,
          maxSuggestions: 6,
          suggestionsEnabled: true,
          minSuggestCharacters: 0
        }]
      });
      const basemapGallery = new BasemapGallery({
        view: mapView,
        container: document.createElement("div")
      });
      const expand = new Expand({view: mapView, content: basemapGallery});

      const nodosTelsur = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/0"
      });
      const trazadoTelsurProject = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/1"
      });
      const trazadoTelsur  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/2"
      });

      const borradorIC1MacrozonacentronorteWom  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const borradorIC1MacrozonacentronorteWill  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/1"
      });

      mapView.map.add(nodosTelsur);
      mapView.map.add(trazadoTelsurProject);
      mapView.map.add(trazadoTelsur);
      mapView.map.add(borradorIC1MacrozonacentronorteWom);
      mapView.map.add(borradorIC1MacrozonacentronorteWill);

      const layerList = new LayerList({
        view: mapView
      });

      mapView.ui.add(searchWidget, 'top-right');
      mapView.ui.add(expand, 'top-left');
      mapView.ui.add(layerList, 'top-left');

      console.log(urlConstants.NODOS_TELSUR);

    } catch (error) {
      alert('se produjo un error');
      console.log('error: ' + error);
    }
  }

  async setZoomIn() {this.zoom.zoomIn();}
  async setZoomOut() {this.zoom.zoomOut();}

}
