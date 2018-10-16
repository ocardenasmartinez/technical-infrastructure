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
  private mapView: esri.MapView;

  constructor() { }
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
      this.setLayers();

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

    this.mapView.ui.add(searchWidget, 'top-right');
  }

  async setLayers() {

    const [FeatureLayer] = await loadModules([
      'esri/layers/FeatureLayer'
    ]);

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

    this.mapView.map.add(nodosTelsur);
    this.mapView.map.add(trazadoTelsurProject);
    this.mapView.map.add(trazadoTelsur);
    this.mapView.map.add(borradorIC1MacrozonacentronorteWom);
    this.mapView.map.add(borradorIC1MacrozonacentronorteWill);
    this.mapView.map.add(borradorIC1MacrozonacentronorteVtRBandaAncha);
    this.mapView.map.add(borradorIC1MacrozonacentronorteTelefonicaChile);
    this.mapView.map.add(borradorIC1MacrozonacentronorteMovistar);
    this.mapView.map.add(borradorIC1MacrozonacentronorteEntelPhone);
    this.mapView.map.add(borradorIC1MacrozonacentronorteEntelPCS);
    this.mapView.map.add(borradorIC1MacrozonacentronorteClaroComunicaciones);
    this.mapView.map.add(borradorIC1MacrozonacentronorteClaroChile);
    this.mapView.map.add(borradorIC1MacrozonanorteWom);
    this.mapView.map.add(borradorIC1MacrozonanorteWill);
    this.mapView.map.add(borradorIC1MacrozonanorteVtrBandaAncha);
    this.mapView.map.add(borradorIC1MacrozonanorteTelefonicaChile);
    this.mapView.map.add(borradorIC1MacrozonanorteMovistar);
    this.mapView.map.add(borradorIC1MacrozonanorteEntelPhone);
    this.mapView.map.add(borradorIC1MacrozonanorteEntelPCS);
    this.mapView.map.add(borradorIC1MacrozonanorteClaroComunicaciones);
    this.mapView.map.add(borradorIC1MacrozonanorteClaroChile);
    this.mapView.map.add(IC1_IC2_2016_2020);
    this.mapView.map.add(IC1_PLANFISCA_N5MAYO);

  }

}
