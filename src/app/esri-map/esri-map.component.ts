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
  private _basemap: string = 'streets';
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

    const templateAnalisisFoDo = {
      title: "Infraestructura Crítica",
      content: [{
        type: "fields",
        fieldInfos: [{
          fieldName: "Name",
          label: "Nombre",
          visible: true
        },{
          fieldName: "FolderPath",
          label: "Ruta",
          visible: true
        },{
          fieldName: "PopupInfo",
          label: "Info",
          visible: true
        }]
      }]
    };

    const templateInfraestructuraCritica = {
        title: "Infraestructura Crítica",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "SERVICIO",
            label: "Servicio",
            visible: true
          },{
            fieldName: "OPERADOR",
            label: "Operador",
            visible: true
          },{
            fieldName: "NOMBRE_INSTALACIÓN",
            label: "Nombre Instación",
            visible: true
          },{
            fieldName: "CALLE",
            label: "Calle",
            visible: true
          },{
            fieldName: "N°",
            label: "N°",
            visible: true
          },{
            fieldName: "ADICIONALES",
            label: "Adicionales",
            visible: true
          },{
            fieldName: "REGIÓN",
            label: "Región",
            visible: true
          },{
            fieldName: "COMUNA",
            label: "Comuna",
            visible: true
          },{
            fieldName: "CIUDAD",
            label: "Ciudad",
            visible: true
          },{
            fieldName: "DATUM",
            label: "Datum",
            visible: true
          },{
            fieldName: "HUSO",
            label: "Huso",
            visible: true
          },{
            fieldName: "Nemonico_Empresa",
            label: "Nemonico Empresa",
            visible: true
          },{
            fieldName: "Nemonico_Subtel",
            label: "Nemonico Subtel",
            visible: true
          },{
            fieldName: "TIPO",
            label: "Tipo",
            visible: true
          },{
            fieldName: "SUMINISTRADOR",
            label: "Suministrador",
            visible: true
          },{
            fieldName: "UNIDAD",
            label: "Unidad",
            visible: true
          },{
            fieldName: "NORMAL",
            label: "Normal",
            visible: true
          },{
            fieldName: "TIPO_DE_RESPALDO",
            label: "Tipo De Respaldo",
            visible: true
          },{
            fieldName: "COMBUSTIBLE_DEL_RESPALDO",
            label: "Combustible Del Respaldo",
            visible: true
          },{
            fieldName: "CAPACIDAD",
            label: "Capacidad",
            visible: true
          },{
            fieldName: "UNIDAD1",
            label: "Unidad1",
            visible: true
          },{
            fieldName: "AUTONOMÍA_EN_HORAS",
            label: "Autonomía En Horas",
            visible: true
          },{
            fieldName: "LONGITUD",
            label: "Longitud",
            visible: true
          },{
            fieldName: "LATITUD",
            label: "Latitud",
            visible: true
          }]
      }]
    };

    const templateCalidadRedMovilDdt0 = {
      title: "Infraestructura Crítica",
      content: [{
        type: "fields",
        fieldInfos: [{
          fieldName: "COD_EMPRESA",
          label: "Empresa",
          visible: true
        },{
          fieldName: "CAES_PERIODO",
          label: "Caes Periodo",
          visible: true
        },{
          fieldName: "CAES_ESTACION_BASE",
          label: "Caes Estación Base",
          visible: true
        },{
          fieldName: "TITE_DESCRIPCION",
          label: "Tite Descripción",
          visible: true
        },{
          fieldName: "TIEM_DESCRIPCION",
          label: "Tiem Descripción",
          visible: true
        },{
          fieldName: "REGION",
          label: "Región",
          visible: true
        },{
          fieldName: "COMUNA",
          label: "Comuna",
          visible: true
        },{
          fieldName: "CAES_DIRECCION",
          label: "Caes Direccion",
          visible: true
        },{
          fieldName: "LATITUD",
          label: "Latitud",
          visible: true
        },{
          fieldName: "LONGITUD",
          label: "Longitud",
          visible: true
        }]
      }]
    };

    const templateCalidadRedMovilDdt1 = {
      title: "Infraestructura Crítica",
      content: [{
        type: "fields",
        fieldInfos: [{
          fieldName: "NOMBRE_EMPRESA",
          label: "Nombre Empresa",
          visible: true
        },{
          fieldName: "CBSA_PERIODO",
          label: "Cbsa Periodo",
          visible: true
        },{
          fieldName: "CBSA_CELL_ID",
          label: "Cbsa Cell Id",
          visible: true
        },{
          fieldName: "TITE_COD",
          label: "Tite Cod",
          visible: true
        },{
          fieldName: "TITE_DESCRIPCION",
          label: "Tite Descripcion",
          visible: true
        },{
          fieldName: "CBSA_LATITUD",
          label: "Cbsa Latitud",
          visible: true
        },{
          fieldName: "CBSA_LONGITUD",
          label: "Cbsa Longitud",
          visible: true
        }]
      }]
    };

    const templateCalidadRedMovilDdt2 = {
      title: "Infraestructura Crítica",
      content: [{
        type: "fields",
        fieldInfos: [{
          fieldName: "NOMBRE_EMPRESA",
          label: "Nombre Empresa",
          visible: true
        },{
          fieldName: "CAME_PERIODO",
          label: "Came Periodo",
          visible: true
        },{
          fieldName: "CAES_ESTACION_BASE",
          label: "Caes Estacion Base",
          visible: true
        },{
          fieldName: "RAHO_COD",
          label: "Raho Cod",
          visible: true
        },{
          fieldName: "PEE",
          label: "PEE",
          visible: true
        },{
          fieldName: "PFE",
          label: "PFE",
          visible: true
        },{
          fieldName: "CAME_LLAMADAS_EXITO",
          label: "Came Llamadas Exito",
          visible: true
        },{
          fieldName: "CAME_INTENTOS_LLAMADA",
          label: "Came Intentos Llamada",
          visible: true
        },{
          fieldName: "CAME_LLAMADAS_INTERR",
          label: "Came Intentos Llamada",
          visible: true
        },{
          fieldName: "CAME_TIEMPO_INTERR",
          label: "Came Tiempo Interr",
          visible: true
        },{
          fieldName: "LATITUD_ESTACION",
          label: "Latitud Estacion",
          visible: true
        },{
          fieldName: "LONGITUD_ESTACION",
          label: "Longitud Estacion",
          visible: true
        }]
      }]
    };

    const analisisFoDo1 = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_1,
      title: 'Analisis Fo Do',
      popupTemplate: templateAnalisisFoDo
    });
    const analisisFoDo2 = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_2,
      title: 'Analisis Fo Do',
      popupTemplate: templateAnalisisFoDo
    });
    const borradorIC1MacrozonacentronorteWom  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WOM,
      title: 'Macro Zona Centro Norte Wom',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteWill  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WILL,
      title: 'Macro Zona Centro Norte Will',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteVtRBandaAncha  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Centro Norte VTR Banda Ancha',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Centro Norte Teléfonica Chile',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteMovistar  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_MOVISTAR,
      title: 'Macro Zona Centro Norte Movistar',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteEntelPhone  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Centro Norte Entel Phone',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PCS,
      title: 'Macro Zona Centro Norte Entel PCS',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Centro Norte Claro Comunicaciones',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_CHILE,
      title: 'Macro Zona Centro Norte Chile',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteWom  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WOM,
      title: 'Macro Zona Centro Norte Claro Chile',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteWill  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WILL,
      title: 'Macro Zona Norte Will',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteVtrBandaAncha  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Norte VTR Banda Ancha',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Norte Teléfonica',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteMovistar  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_MOVISTAR,
      title: 'Macro Zona Norte Movistar',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteEntelPhone  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Norte Entel Phone',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PCS,
      title: 'Macro Zona Norte Entel PCS',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Norte Claro Comunicaciones',
      popupTemplate: templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_CHILE,
      title: 'Macro Zona Norte Claro Chile',
      popupTemplate: templateInfraestructuraCritica
    });
    const IC1_IC2_2016_2020  = new FeatureLayer({
      url: urlConstants.IC1_IC2_2016_2020,
      title: 'IC1 IC2 2016 2020',
      popupTemplate: templateInfraestructuraCritica
    });
    const IC1_PLANFISCA_N5MAYO  = new FeatureLayer({
      url: urlConstants.IC1_PLANFISCA_N5MAYO,
      title: 'IC1 PLAN FISCA N5 MAYO',
      popupTemplate: templateInfraestructuraCritica
    });
    const STI_CRM_ESTACIONES  = new FeatureLayer({
      url: urlConstants.STI_CRM_ESTACIONES,
      title: 'STI CRM ESTACIONES',
      popupTemplate: templateCalidadRedMovilDdt0
    });
    const STI_CBS_SAE  = new FeatureLayer({
      url: urlConstants.STI_CBS_SAE,
      title: 'STI CBS SAE',
      popupTemplate: templateCalidadRedMovilDdt1
    });
    const STI_CRM_MEDICIONES  = new FeatureLayer({
      url: urlConstants.STI_CRM_MEDICIONES,
      title: 'STI CRM MEDICIONES',
      popupTemplate: templateCalidadRedMovilDdt2
    });

    const groupLayer = new GroupLayer({
        title: "Infraestructura Crítica",
        visible: true,
        visibilityMode: "independent",
        layers: [STI_CRM_ESTACIONES, STI_CBS_SAE, STI_CRM_MEDICIONES, IC1_PLANFISCA_N5MAYO, IC1_IC2_2016_2020, borradorIC1MacrozonanorteClaroChile, borradorIC1MacrozonanorteClaroComunicaciones,
          borradorIC1MacrozonanorteEntelPCS, borradorIC1MacrozonanorteEntelPhone, borradorIC1MacrozonanorteMovistar, borradorIC1MacrozonanorteTelefonicaChile,
          borradorIC1MacrozonanorteVtrBandaAncha, borradorIC1MacrozonanorteWill, borradorIC1MacrozonanorteWom, borradorIC1MacrozonacentronorteClaroChile,
          borradorIC1MacrozonacentronorteClaroComunicaciones, borradorIC1MacrozonacentronorteEntelPCS, borradorIC1MacrozonacentronorteEntelPhone,
          borradorIC1MacrozonacentronorteMovistar, borradorIC1MacrozonacentronorteTelefonicaChile, borradorIC1MacrozonacentronorteVtRBandaAncha,
          borradorIC1MacrozonacentronorteWill, borradorIC1MacrozonacentronorteWom, analisisFoDo2, analisisFoDo1]
    });

    this.mapView.map.add(groupLayer);

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
          url: urlConstants.ANALISIS_DE_FO_1,
          outFields: ["*"]
        }),
        searchFields: ["Name"],
        displayField: "Name",
        exactMatch: false,
        name: "Analisis De Fo 1",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.ANALISIS_DE_FO_2,
          outFields: ["*"]
        }),
        searchFields: ["Name"],
        displayField: "Name",
        exactMatch: false,
        name: "Analisis De Fo 2",
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
      },{
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
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.STI_CBS_SAE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_EMPRESA"],
        displayField: "NOMBRE_EMPRESA",
        exactMatch: false,
        name: "STI CBS SAE",
        placeholder: "Nombre Empresa",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.STI_CRM_MEDICIONES,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_EMPRESA"],
        displayField: "NOMBRE_EMPRESA",
        exactMatch: false,
        name: "STI CRM MEDICIONES",
        placeholder: "Nombre Empresa",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      }]
    });

    this.mapView.ui.add(searchWidget, 'top-right');
  }

}
