import { Injectable } from '@angular/core';

@Injectable()
export class TemplateConstants {
    readonly analisisFoPuntos = {
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
    readonly analisisFoLineas = {
      title: "Análisis FO Lineas",
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
    readonly infraestructuraCritica1 = {
        title: "Zona Centro Norte",
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
    readonly infraestructuraCritica2 = {
        title: "Zona Norte",
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
            label: "Nombre Instalación",
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
            label: "Comubustubles De Respaldo",
            visible: true
          },{
            fieldName: "CAPACIDAD",
            label: "Capacidad",
            visible: true
          },{
            fieldName: "UNIDAD1",
            label: "Unidad",
            visible: true
          },{
            fieldName: "AUTONOMÍA_EN_HORAS",
            label: "Autonomía En Horas",
            visible: true
          },{
            fieldName: "Latitud",
            label: "Latitud",
            visible: true
          },{
            fieldName: "Longitud",
            label: "Longitud",
            visible: true
          },{
            fieldName: "DATUM",
            label: "Datum",
            visible: true
          }]
      }]
    };
    readonly infraestructuraCritica3 = {
        title: "IC1 IC2 2016",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "N°_Correl",
            label: "N° Correl",
            visible: true
          },{
          	fieldName: "N°_Sitio_",
            label: "N° Sitio",
            visible: true
          },{
          	fieldName: "Empresa",
            label: "Empresa",
            visible: true
          },{
          	fieldName: "IC_Nivel",
            label: "IC Nivel",
            visible: true
          },{
          	fieldName: "Código_de",
            label: "Código",
            visible: true
          },{
          	fieldName: "Servicios_",
            label: "Servicios",
            visible: true
          },{
          	fieldName: "Tipo_de_Se",
            label: "Tipo De Se",
            visible: true
          },{
          	fieldName: "Tipo_de_Eq",
            label: "Tipo De Eq",
            visible: true
          },{
          	fieldName: "Región",
            label: "Región",
            visible: true
          },{
          	fieldName: "Comuna",
            label: "Comuna",
            visible: true
          },{
          	fieldName: "Dirección",
            label: "Dirección",
            visible: true
          },{
          	fieldName: "Latitud_Su",
            label: "Latitud_Su",
            visible: true
          },{
          	fieldName: "Tecnologí",
            label: "Tecnología",
            visible: true
          },{
          	fieldName: "Latitud",
            label: "Latitud",
            visible: true
          },{
          	fieldName: "Longitud",
            label: "Longitud",
            visible: true
      	}]
      }]
    };
    readonly infraestructuraCritica4 = {
        title: "IC1 PLAN FISCA",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "N°_Correl",
            label: "N° Correl",
            visible: true
          },{
          	fieldName: "N°_Sitio_",
            label: "N° Sitio",
            visible: true
          },{
          	fieldName: "Empresa",
            label: "Empresa",
            visible: true
          },{
          	fieldName: "IC_Nivel",
            label: "IC Nivel",
            visible: true
          },{
          	fieldName: "Código_de",
            label: "Código",
            visible: true
          },{
          	fieldName: "Servicios_",
            label: "Servicios",
            visible: true
          },{
          	fieldName: "Tipo_de_Se",
            label: "Tipo De Se",
            visible: true
          },{
          	fieldName: "Tipo_de_Eq",
            label: "Tipo De Eq",
            visible: true
          },{
          	fieldName: "Código_Em",
            label: "Código Em",
            visible: true
          },{
          	fieldName: "Región",
            label: "Región",
            visible: true
          },{
          	fieldName: "Comuna",
            label: "Comuna",
            visible: true
          },{
          	fieldName: "Dirección",
            label: "Dirección",
            visible: true
          },{
          	fieldName: "Decreto_Co",
            label: "Decreto",
            visible: true
          },{
          	fieldName: "Tecnologí",
            label: "Tecnología",
            visible: true
          },{
          	fieldName: "Macrozona",
            label: "Macrozona",
            visible: true
          },{
          	fieldName: "Empresa1",
            label: "Empresa1",
            visible: true
          },{
          	fieldName: "Resolució",
            label: "Resolució",
            visible: true
          },{
          	fieldName: "Fecha",
            label: "Fecha",
            visible: true
          },{
          	fieldName: "Informe",
            label: "Informe",
            visible: true
          },{
          	fieldName: "Fecha1",
            label: "Primera Fecha",
            visible: true
          },{
          	fieldName: "Fecha2",
            label: "Segunda Fecha",
            visible: true
          },{
          	fieldName: "Fecha3",
            label: "Tercera Fecha",
            visible: true
          },{
          	fieldName: "Fecha4",
            label: "Cuarta Fecha",
            visible: true
          },{
          	fieldName: "Fecha5",
            label: "Quinta Fecha",
            visible: true
          },{
          	fieldName: "Cumple__si",
            label: "Cumple",
            visible: true
          },{
          	fieldName: "Memo_a_DJ",
            label: "Memo a DJ",
            visible: true
          },{
          	fieldName: "Con_observ",
            label: "Con observ",
            visible: true
          },{
          	fieldName: "Oficio_Ins",
            label: "Oficio Ins",
            visible: true
          },{
          	fieldName: "Respuesta_",
            label: "Respuesta",
            visible: true
          },{
          	fieldName: "Oficio_Sub",
            label: "Oficio Sub",
            visible: true
          },{
          	fieldName: "Latitud",
            label: "Latitud",
            visible: true
          },{
          	fieldName: "Longitud",
            label: "Longitud",
            visible: true
          }]
      }]
    };
    readonly calidadRedMovilDdt1 = {
      title: "STI CRM",
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
    readonly calidadRedMovilDdt2 = {
      title: "STI CBS",
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
    readonly calidadRedMovilDdt3 = {
      title: "STI CRM",
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
