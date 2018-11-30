import { Injectable, Inject } from '@angular/core';
import { loadModules } from 'esri-loader';
import { TemplateConstants } from './template-constants';
import urlConstants from './layers-url-constants';

@Injectable()
export class LayerCriticalInf {
  constructor(@Inject(TemplateConstants) private templateConstants) {}
  async getLayers() {
    const [FeatureLayer, GroupLayer] = await loadModules([
      'esri/layers/FeatureLayer',
      'esri/layers/GroupLayer'
    ]);
    const analisisFoDoPuntos = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_1,
      title: 'Analisis Fo Puntos',
      popupTemplate: this.templateConstants.analisisFo
    });
    const analisisFoDoLineas = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_2,
      title: 'Analisis Fo Lineas',
      popupTemplate: this.templateConstants.analisisFo
    });
    const centronorteWom  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_WOM,
      title: 'Zona Centro Norte Wom',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteWill  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_WILL,
      title: 'Zona Centro Norte Enterl Will',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteVtRBandaAncha  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_VTR_BANDA_ANCHA,
      title: 'Zona Centro Norte VTR Banda Ancha',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_TELEFONICA_CHILE,
      title: 'Zona Centro Norte Teléfonica Chile',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteMovistar  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_MOVISTAR,
      title: 'Zona Centro Norte Movistar',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteEntelPhone  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_ENTEL_PHONE,
      title: 'Zona Centro Norte Entel Phone',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteEntelPCS  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_ENTEL_PCS,
      title: 'Zona Centro Norte Entel PCS',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_CLARO_COMUNICACIONES,
      title: ' Zona Centro Norte Claro Comunicaciones',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const centronorteClaroChile  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_CLARO_CHILE,
      title: 'Zona Centro Norte Claro Chile',
      popupTemplate: this.templateConstants.infraestructuraCritica1
    });
    const zonanorteWom  = new FeatureLayer({
      url: urlConstants.NORTE_WOM,
      title: 'Zona Norte Claro Chile',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const zonanorteWill  = new FeatureLayer({
      url: urlConstants.NORTE_WILL,
      title: 'Zona Norte Entel Will',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const zonanorteVtrBandaAncha  = new FeatureLayer({
      url: urlConstants.NORTE_VTR_BANDA_ANCHA,
      title: 'Zona Norte VTR Banda Ancha',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const norteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.NORTE_TELEFONICA_CHILE,
      title: 'Zona Norte Teléfonica',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const norteMovistar  = new FeatureLayer({
      url: urlConstants.NORTE_MOVISTAR,
      title: 'Zona Norte Movistar',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const norteEntelPhone  = new FeatureLayer({
      url: urlConstants.NORTE_ENTEL_PHONE,
      title: 'Zona Norte Entel Phone',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const norteEntelPCS  = new FeatureLayer({
      url: urlConstants.NORTE_ENTEL_PCS,
      title: 'Zona Norte Entel PCS',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const norteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.NORTE_CLARO_COMUNICACIONES,
      title: 'Zona Norte Claro Comunicaciones',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const norteClaroChile  = new FeatureLayer({
      url: urlConstants.NORTE_CLARO_CHILE,
      title: 'Zona Norte Claro Chile',
      popupTemplate: this.templateConstants.infraestructuraCritica2
    });
    const IC1_IC2_2016_2020  = new FeatureLayer({
      url: urlConstants.IC1_IC2_2016_2020,
      title: 'IC1 IC2 2016 2020',
      popupTemplate: this.templateConstants.infraestructuraCritica3
    });
    const IC1_PLANFISCA_N5MAYO  = new FeatureLayer({
      url: urlConstants.IC1_PLANFISCA_N5MAYO,
      title: 'IC1 PLAN FISCA N5 MAYO',
      popupTemplate: this.templateConstants.infraestructuraCritica4
    });
    const STI_CRM_ESTACIONES  = new FeatureLayer({
      url: urlConstants.STI_CRM_ESTACIONES,
      title: 'STI CRM ESTACIONES',
      popupTemplate: this.templateConstants.calidadRedMovilDdt1
    });
    const STI_CBS_SAE  = new FeatureLayer({
      url: urlConstants.STI_CBS_SAE,
      title: 'STI CBS SAE',
      popupTemplate: this.templateConstants.calidadRedMovilDdt2
    });
    const STI_CRM_MEDICIONES  = new FeatureLayer({
      url: urlConstants.STI_CRM_MEDICIONES,
      title: 'STI CRM MEDICIONES',
      popupTemplate: this.templateConstants.calidadRedMovilDdt3
    });
    return new GroupLayer({
        title: "Infraestructura Crítica",
        visible: true,
        visibilityMode: "independent",
        layers: [
          STI_CRM_ESTACIONES, STI_CBS_SAE, STI_CRM_MEDICIONES, IC1_PLANFISCA_N5MAYO,
          IC1_IC2_2016_2020, norteClaroChile, norteClaroComunicaciones,
          norteEntelPCS, norteEntelPhone, norteMovistar, norteTelefonicaChile,
          zonanorteVtrBandaAncha, zonanorteWill, zonanorteWom, centronorteClaroChile,
          centronorteClaroComunicaciones, centronorteEntelPCS, centronorteEntelPhone,
          centronorteMovistar, centronorteTelefonicaChile, centronorteVtRBandaAncha,
          centronorteWill, centronorteWom, analisisFoDoLineas, analisisFoDoPuntos
        ]
    });
  }

}
