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

  private _zoom: number = 8;
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

  async setLayers() {

    const [FeatureLayer, GroupLayer] = await loadModules([
      'esri/layers/FeatureLayer',
      'esri/layers/GroupLayer'
    ]);

    const nodosTelsur = new FeatureLayer({
      url: urlConstants.NODOS_TELSUR,
      title: 'Nodos Telesur'
    });
    const trazadoTelsurProject = new FeatureLayer({
      url: urlConstants.TRAZADO_TELSUR_PROJECT,
      title: 'Trazado Telesur Project'
    });
    const trazadoTelsur  = new FeatureLayer({
      url: urlConstants.TRAZADO_TELSUR,
      title: 'Trazado Telesur'
    });
    const borradorIC1MacrozonacentronorteWom  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WOM,
      title: 'Trazado Telesur'
    });
    const borradorIC1MacrozonacentronorteWill  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WILL,
      title: 'Macro Zona Centro Norte Will'
    });
    const borradorIC1MacrozonacentronorteVtRBandaAncha  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Centro Norte VTR Banda Ancha'
    });
    const borradorIC1MacrozonacentronorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Centro Norte Teléfonica Chile'
    });
    const borradorIC1MacrozonacentronorteMovistar  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_MOVISTAR,
      title: 'Macro Zona Centro Norte Movistar'
    });
    const borradorIC1MacrozonacentronorteEntelPhone  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Centro Norte Entel Phone'
    });
    const borradorIC1MacrozonacentronorteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PCS,
      title: 'Macro Zona Centro Norte Entel PCS'
    });
    const borradorIC1MacrozonacentronorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Centro Norte Claro Comunicaciones'
    });
    const borradorIC1MacrozonacentronorteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_CHILE,
      title: 'Macro Zona Centro Norte Chile'
    });
    const borradorIC1MacrozonanorteWom  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WOM,
      title: 'Macro Zona Centro Norte Claro Chile'
    });
    const borradorIC1MacrozonanorteWill  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WILL,
      title: 'Macro Zona Norte Will'
    });
    const borradorIC1MacrozonanorteVtrBandaAncha  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Norte VTR Banda Ancha'
    });
    const borradorIC1MacrozonanorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Norte Teléfonica'
    });
    const borradorIC1MacrozonanorteMovistar  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_MOVISTAR,
      title: 'Macro Zona Norte Movistar'
    });
    const borradorIC1MacrozonanorteEntelPhone  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Norte Entel Phone'
    });
    const borradorIC1MacrozonanorteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PCS,
      title: 'Macro Zona Norte Entel PCS'
    });
    const borradorIC1MacrozonanorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Norte Claro Comunicaciones'
    });
    const borradorIC1MacrozonanorteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_CHILE,
      title: 'Macro Zona Norte Claro Chile'
    });
    const IC1_IC2_2016_2020  = new FeatureLayer({
      url: urlConstants.IC1_IC2_2016_2020,
      title: 'IC1 IC2 2016 2020'
    });
    const IC1_PLANFISCA_N5MAYO  = new FeatureLayer({
      url: urlConstants.IC1_PLANFISCA_N5MAYO,
      title: 'IC1 PLAN FISCA N5 MAYO'
    });

    const groupLayer = new GroupLayer({
        title: "US Demographics",
        visible: true,
        visibilityMode: "exclusive",
        layers: [nodosTelsur, trazadoTelsurProject, trazadoTelsur, borradorIC1MacrozonacentronorteWom, borradorIC1MacrozonacentronorteWill,
           borradorIC1MacrozonacentronorteVtRBandaAncha, borradorIC1MacrozonacentronorteTelefonicaChile, borradorIC1MacrozonacentronorteMovistar,
           borradorIC1MacrozonacentronorteEntelPhone, borradorIC1MacrozonacentronorteEntelPCS, borradorIC1MacrozonacentronorteClaroComunicaciones,
           borradorIC1MacrozonacentronorteClaroChile, borradorIC1MacrozonanorteWom, borradorIC1MacrozonanorteWill, borradorIC1MacrozonanorteVtrBandaAncha,
           borradorIC1MacrozonanorteTelefonicaChile, borradorIC1MacrozonanorteMovistar, borradorIC1MacrozonanorteEntelPhone, borradorIC1MacrozonanorteEntelPCS,
           borradorIC1MacrozonanorteClaroComunicaciones, borradorIC1MacrozonanorteClaroChile, IC1_IC2_2016_2020, IC1_PLANFISCA_N5MAYO]
    });

    this.mapView.map.add(groupLayer);

    /*this.mapView.map.add(IC1_IC2_2016_2020);
    this.mapView.map.add(IC1_PLANFISCA_N5MAYO);
    this.mapView.map.add(borradorIC1MacrozonanorteClaroChile);
    this.mapView.map.add(borradorIC1MacrozonanorteClaroComunicaciones);
    this.mapView.map.add(borradorIC1MacrozonanorteEntelPCS);
    this.mapView.map.add(borradorIC1MacrozonanorteEntelPhone);
    this.mapView.map.add(borradorIC1MacrozonanorteMovistar);
    this.mapView.map.add(borradorIC1MacrozonanorteTelefonicaChile);
    this.mapView.map.add(borradorIC1MacrozonanorteVtrBandaAncha);
    this.mapView.map.add(borradorIC1MacrozonanorteWill);
    this.mapView.map.add(borradorIC1MacrozonanorteWom);
    this.mapView.map.add(borradorIC1MacrozonacentronorteClaroChile);
    this.mapView.map.add(borradorIC1MacrozonacentronorteClaroComunicaciones);
    this.mapView.map.add(borradorIC1MacrozonacentronorteEntelPCS);
    this.mapView.map.add(borradorIC1MacrozonacentronorteEntelPhone);
    this.mapView.map.add(borradorIC1MacrozonacentronorteMovistar);
    this.mapView.map.add(borradorIC1MacrozonacentronorteTelefonicaChile);
    this.mapView.map.add(borradorIC1MacrozonacentronorteVtRBandaAncha);
    this.mapView.map.add(borradorIC1MacrozonacentronorteWill);
    this.mapView.map.add(borradorIC1MacrozonacentronorteWom);
    this.mapView.map.add(trazadoTelsur);
    this.mapView.map.add(trazadoTelsurProject);
    this.mapView.map.add(nodosTelsur);*/

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
          url: urlConstants.TRAZADO_TELSUR_PROJECT,
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
          url: urlConstants.TRAZADO_TELSUR,
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
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WOM,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Wom",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WILL,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Will",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_VTR_BANDA_ANCHA,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte VTR Banda Ancha",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_TELEFONICA_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Teléfonica Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_MOVISTAR,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Movistar",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PHONE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Entel Phone",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PCS,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Entel PCS",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_COMUNICACIONES,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Claro Comunicaciones",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Centro Norte Claro Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WOM,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Wom",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WILL,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Will",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_VTR_BANDA_ANCHA,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte VTR Banda Ancha",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_TELEFONICA_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Teléfonica Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_MOVISTAR,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Movistar",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PHONE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Entel Phone",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PCS,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Entel PCS",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_COMUNICACIONES,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Claro Comunicaciones",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Macro Zona Norte Claro Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.IC1_IC2_2016_2020,
          outFields: ["*"]
        }),
        searchFields: ["Empresa"],
        displayField: "Empresa",
        exactMatch: false,
        name: "IC1 IC2 2016 2020",
        placeholder: "Empresa ",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.IC1_PLANFISCA_N5MAYO,
          outFields: ["*"]
        }),
        searchFields: ["Empresa"],
        displayField: "Empresa",
        exactMatch: false,
        name: "IC1 PLAN FISCA N5 MAYO",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      }]
    });

    this.mapView.ui.add(searchWidget, 'top-right');
  }

}
