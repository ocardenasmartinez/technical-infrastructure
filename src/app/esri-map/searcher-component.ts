import { Injectable, Inject } from '@angular/core';
import { loadModules } from 'esri-loader';
import urlConstants from './layers-url-constants';
import esri = __esri;

@Injectable()
export class Searcher {
  public getSearcher(mapView, FeatureLayer, Search, parent): esri.Search {
    const searcher = new Search({
      view: mapView,
        sources: [{
        featureLayer: new FeatureLayer({
          url: urlConstants.ANALISIS_DE_FO_PUNTOS,
          outFields: ["*"]
        }),
        searchFields: ["Name"],
        displayField: "Name",
        exactMatch: false,
        name: "Analisis De Fo Puntos",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0,
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.ANALISIS_DE_FO_LINEAS,
          outFields: ["*"]
        }),
        searchFields: ["Name"],
        displayField: "Name",
        exactMatch: false,
        name: "Analisis De Fo Lineas",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_WOM,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Wom",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_WILL,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Will",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_VTR_BANDA_ANCHA,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte VTR Banda Ancha",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_TELEFONICA_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Teléfonica Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_MOVISTAR,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Movistar",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_ENTEL_PHONE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Entel Phone",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_ENTEL_PCS,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Entel PCS",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_CLARO_COMUNICACIONES,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Claro Comunicaciones",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.CENTRO_NORTE_CLARO_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Centro Norte Claro Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_WOM,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Wom",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_WILL,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Will",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_VTR_BANDA_ANCHA,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte VTR Banda Ancha",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_TELEFONICA_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Teléfonica Chile",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_MOVISTAR,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Movistar",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_ENTEL_PHONE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Entel Phone",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_ENTEL_PCS,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Entel PCS",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_CLARO_COMUNICACIONES,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Claro Comunicaciones",
        placeholder: "Nombre",
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      },{
        featureLayer: new FeatureLayer({
          url: urlConstants.NORTE_CLARO_CHILE,
          outFields: ["*"]
        }),
        searchFields: ["NOMBRE_INSTALACIÓN"],
        displayField: "NOMBRE_INSTALACIÓN",
        exactMatch: false,
        name: "Zona Norte Claro Chile",
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
    searcher.on('search-focus', function(event) {
      parent.setGroupLayer(this.activeSourceIndex);
    });
    return searcher;
  }
}
