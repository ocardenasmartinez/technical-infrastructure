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

      const basemapGallery = new BasemapGallery({
        view: mapView,
        container: document.createElement("div")
      });
      const expand = new Expand({view: mapView, content: basemapGallery});

      const layerList = new LayerList({
        view: mapView
      });

      mapView.when(() => {this.mapLoaded.emit(true);});

      const searchWidget = new Search({
        view: mapView,
        sources: [{
          featureLayer: new FeatureLayer({
            url: urlConstants.NODOS_TELSUR,
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

      const nodosTelsur = new FeatureLayer({url: urlConstants.NODOS_TELSUR});
      const trazadoTelsurProject = new FeatureLayer({url: urlConstants.TRAZADO_TELSUR_PROJECT});
      const trazadoTelsur  = new FeatureLayer({url: urlConstants.TRAZADO_TELSUR});
      const borradorIC1MacrozonacentronorteWom  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WOM});
      const borradorIC1MacrozonacentronorteWill  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WILL});
      const borradorIC1MacrozonacentronorteVtRBandaAncha  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_VTR_BANDA_ANCHA});
      const borradorIC1MacrozonacentronorteTelefonicaChile  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_TELEFONICA_CHILE});
      const borradorIC1MacrozonacentronorteMovistar  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_MOVISTAR});
      const borradorIC1MacrozonacentronorteEntelPhone  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PHONE});
      const borradorIC1MacrozonacentronorteEntelPCS  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PCS});
      const borradorIC1MacrozonacentronorteClaroComunicaciones  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_COMUNICACIONES});
      const borradorIC1MacrozonacentronorteClaroChile  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_CHILE});
      const borradorIC1MacrozonanorteWom  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WOM});
      const borradorIC1MacrozonanorteWill  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WILL});
      const borradorIC1MacrozonanorteVtrBandaAncha  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_VTR_BANDA_ANCHA});
      const borradorIC1MacrozonanorteTelefonicaChile  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_TELEFONICA_CHILE});
      const borradorIC1MacrozonanorteMovistar  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_MOVISTAR});
      const borradorIC1MacrozonanorteEntelPhone  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PHONE});
      const borradorIC1MacrozonanorteEntelPCS  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PCS});
      const borradorIC1MacrozonanorteClaroComunicaciones  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_COMUNICACIONES});
      const borradorIC1MacrozonanorteClaroChile  = new FeatureLayer({url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_CHILE});
      const IC1_IC2_2016_2020  = new FeatureLayer({url: urlConstants.IC1_IC2_2016_2020});
      const IC1_PLANFISCA_N5MAYO  = new FeatureLayer({url: urlConstants.IC1_PLANFISCA_N5MAYO});

      mapView.map.add(nodosTelsur);
      mapView.map.add(trazadoTelsurProject);
      mapView.map.add(trazadoTelsur);
      mapView.map.add(borradorIC1MacrozonacentronorteWom);
      mapView.map.add(borradorIC1MacrozonacentronorteWill);
      mapView.map.add(borradorIC1MacrozonacentronorteVtRBandaAncha);
      mapView.map.add(borradorIC1MacrozonacentronorteTelefonicaChile);
      mapView.map.add(borradorIC1MacrozonacentronorteMovistar);
      mapView.map.add(borradorIC1MacrozonacentronorteEntelPhone);
      mapView.map.add(borradorIC1MacrozonacentronorteEntelPCS);
      mapView.map.add(borradorIC1MacrozonacentronorteClaroComunicaciones);
      mapView.map.add(borradorIC1MacrozonacentronorteClaroChile);
      mapView.map.add(borradorIC1MacrozonanorteWom);
      mapView.map.add(borradorIC1MacrozonanorteWill);
      mapView.map.add(borradorIC1MacrozonanorteVtrBandaAncha);
      mapView.map.add(borradorIC1MacrozonanorteTelefonicaChile);
      mapView.map.add(borradorIC1MacrozonanorteMovistar);
      mapView.map.add(borradorIC1MacrozonanorteEntelPhone);
      mapView.map.add(borradorIC1MacrozonanorteEntelPCS);
      mapView.map.add(borradorIC1MacrozonanorteClaroComunicaciones);
      mapView.map.add(borradorIC1MacrozonanorteClaroChile);
      mapView.map.add(IC1_IC2_2016_2020);
      mapView.map.add(IC1_PLANFISCA_N5MAYO);
      mapView.ui.add(searchWidget, 'top-right');
      mapView.ui.add(expand, 'top-left');
      mapView.ui.add(layerList, 'top-left');

    } catch (error) {
      alert('se produjo un error');
      console.log('error: ' + error);
    }
  }

  async setZoomIn() {this.zoom.zoomIn();}
  async setZoomOut() {this.zoom.zoomOut();}


}
