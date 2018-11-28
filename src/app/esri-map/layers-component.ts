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
    const analisisFoDo1 = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_1,
      title: 'Analisis Fo Lineas',
      popupTemplate: this.templateConstants.templateAnalisisFoDo
    });
    const analisisFoDo2 = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_2,
      title: 'Analisis Fo Puntos',
      popupTemplate: this.templateConstants.templateAnalisisFoDo
    });
    const centronorteWom  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_WOM,
      title: 'Macro Zona Centro Norte Wom',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteWill  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_WILL,
      title: 'Macro Zona Centro Norte Will',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteVtRBandaAncha  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Centro Norte VTR Banda Ancha',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Centro Norte Teléfonica Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteMovistar  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_MOVISTAR,
      title: 'Macro Zona Centro Norte Movistar',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteEntelPhone  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Centro Norte Entel Phone',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteEntelPCS  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_ENTEL_PCS,
      title: 'Macro Zona Centro Norte Entel PCS',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Centro Norte Claro Comunicaciones',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const centronorteClaroChile  = new FeatureLayer({
      url: urlConstants.CENTRO_NORTE_CLARO_CHILE,
      title: 'Zona Centro Norte Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const zonanorteWom  = new FeatureLayer({
      url: urlConstants.NORTE_WOM,
      title: 'Zona Centro Norte Claro Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const zonanorteWill  = new FeatureLayer({
      url: urlConstants.ZONA_NORTE_WILL,
      title: 'Zona Norte Entel Will',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const zonanorteVtrBandaAncha  = new FeatureLayer({
      url: urlConstants.NORTE_VTR_BANDA_ANCHA,
      title: 'Zona Norte VTR Banda Ancha',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const norteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.NORTE_TELEFONICA_CHILE,
      title: 'Zona Norte Teléfonica',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const norteMovistar  = new FeatureLayer({
      url: urlConstants.NORTE_MOVISTAR,
      title: 'Zona Norte Movistar',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const norteEntelPhone  = new FeatureLayer({
      url: urlConstants.NORTE_ENTEL_PHONE,
      title: 'Zona Norte Entel Phone',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const norteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PCS,
      title: 'Zona Norte Entel PCS',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const norteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_COMUNICACIONES,
      title: 'Zona Norte Claro Comunicaciones',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const norteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_CHILE,
      title: 'Zona Norte Claro Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const IC1_IC2_2016_2020  = new FeatureLayer({
      url: urlConstants.IC1_IC2_2016_2020,
      title: 'IC1 IC2 2016 2020',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const IC1_PLANFISCA_N5MAYO  = new FeatureLayer({
      url: urlConstants.IC1_PLANFISCA_N5MAYO,
      title: 'IC1 PLAN FISCA N5 MAYO',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const STI_CRM_ESTACIONES  = new FeatureLayer({
      url: urlConstants.STI_CRM_ESTACIONES,
      title: 'STI CRM ESTACIONES',
      popupTemplate: this.templateConstants.templateCalidadRedMovilDdt0
    });
    const STI_CBS_SAE  = new FeatureLayer({
      url: urlConstants.STI_CBS_SAE,
      title: 'STI CBS SAE',
      popupTemplate: this.templateConstants.templateCalidadRedMovilDdt1
    });
    const STI_CRM_MEDICIONES  = new FeatureLayer({
      url: urlConstants.STI_CRM_MEDICIONES,
      title: 'STI CRM MEDICIONES',
      popupTemplate: this.templateConstants.templateCalidadRedMovilDdt2
    });
    const groupLayer = new GroupLayer({
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
          centronorteWill, centronorteWom, analisisFoDo2, analisisFoDo1
        ]
    });
    return groupLayer;
  }

}
