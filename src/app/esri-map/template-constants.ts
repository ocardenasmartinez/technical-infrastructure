import { Injectable } from '@angular/core';

@Injectable()
export class TemplateConstants {
    readonly templateAnalisisFoDo = {
      title: "Análisis FO Puntos",
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
    readonly templateInfraestructuraCritica = {
        title: "Análisis FO Lineas",
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
    readonly templateCalidadRedMovilDdt0 = {
      title: "Calidad Red Móvil DDT",
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
    }
    readonly templateCalidadRedMovilDdt1 = {
      title: "Calidad Red Móvil DDT",
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
    }
    readonly templateCalidadRedMovilDdt2 = {
      title: "Calidad Red Móvil DDT",
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

}
