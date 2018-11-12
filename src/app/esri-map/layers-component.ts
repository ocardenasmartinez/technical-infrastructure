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
      title: 'Analisis Fo Do',
      popupTemplate: this.templateConstants.templateAnalisisFoDo
    });
    const analisisFoDo2 = new FeatureLayer({
      url: urlConstants.ANALISIS_DE_FO_2,
      title: 'Analisis Fo Do',
      popupTemplate: this.templateConstants.templateAnalisisFoDo
    });
    const borradorIC1MacrozonacentronorteWom  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WOM,
      title: 'Macro Zona Centro Norte Wom',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteWill  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_WILL,
      title: 'Macro Zona Centro Norte Will',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteVtRBandaAncha  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Centro Norte VTR Banda Ancha',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Centro Norte Teléfonica Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteMovistar  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_MOVISTAR,
      title: 'Macro Zona Centro Norte Movistar',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteEntelPhone  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Centro Norte Entel Phone',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_ENTEL_PCS,
      title: 'Macro Zona Centro Norte Entel PCS',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Centro Norte Claro Comunicaciones',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonacentronorteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_CENTRO_NORTE_CLARO_CHILE,
      title: 'Macro Zona Centro Norte Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteWom  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WOM,
      title: 'Macro Zona Centro Norte Claro Chile',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteWill  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_WILL,
      title: 'Macro Zona Norte Will',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteVtrBandaAncha  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_VTR_BANDA_ANCHA,
      title: 'Macro Zona Norte VTR Banda Ancha',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteTelefonicaChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_TELEFONICA_CHILE,
      title: 'Macro Zona Norte Teléfonica',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteMovistar  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_MOVISTAR,
      title: 'Macro Zona Norte Movistar',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteEntelPhone  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PHONE,
      title: 'Macro Zona Norte Entel Phone',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteEntelPCS  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_ENTEL_PCS,
      title: 'Macro Zona Norte Entel PCS',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteClaroComunicaciones  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_COMUNICACIONES,
      title: 'Macro Zona Norte Claro Comunicaciones',
      popupTemplate: this.templateConstants.templateInfraestructuraCritica
    });
    const borradorIC1MacrozonanorteClaroChile  = new FeatureLayer({
      url: urlConstants.BORRADOR_IC1MACRO_ZONA_NORTE_CLARO_CHILE,
      title: 'Macro Zona Norte Claro Chile',
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
        layers: [STI_CRM_ESTACIONES, STI_CBS_SAE, STI_CRM_MEDICIONES, IC1_PLANFISCA_N5MAYO, IC1_IC2_2016_2020, borradorIC1MacrozonanorteClaroChile, borradorIC1MacrozonanorteClaroComunicaciones,
          borradorIC1MacrozonanorteEntelPCS, borradorIC1MacrozonanorteEntelPhone, borradorIC1MacrozonanorteMovistar, borradorIC1MacrozonanorteTelefonicaChile,
          borradorIC1MacrozonanorteVtrBandaAncha, borradorIC1MacrozonanorteWill, borradorIC1MacrozonanorteWom, borradorIC1MacrozonacentronorteClaroChile,
          borradorIC1MacrozonacentronorteClaroComunicaciones, borradorIC1MacrozonacentronorteEntelPCS, borradorIC1MacrozonacentronorteEntelPhone,
          borradorIC1MacrozonacentronorteMovistar, borradorIC1MacrozonacentronorteTelefonicaChile, borradorIC1MacrozonacentronorteVtRBandaAncha,
          borradorIC1MacrozonacentronorteWill, borradorIC1MacrozonacentronorteWom, analisisFoDo2, analisisFoDo1]
    });
    return groupLayer;
  }

}
