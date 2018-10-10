import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _zoom: number = 3;
  private _center: Array<number> = [-70.6514212, -33.440616];
  private _basemap: string = 'streets-relief-vector';
  private zoom;

  constructor() { }
  async ngOnInit() {this.initializeMap();}
  async initializeMap() {
    try {
      const [EsriMap, EsriMapView, Zoom, Search, BasemapGallery, Expand, FeatureLayer] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/widgets/Zoom',
        'esri/widgets/Search',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Expand',
        'esri/layers/FeatureLayer'
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
      mapView.ui.remove('zoom');
      mapView.when(() => {this.mapLoaded.emit(true);});
      this.zoom = new Zoom({viewModel: {view: mapView}});
      const searchWidget = new Search({
        view: mapView
      });
      const basemapGallery = new BasemapGallery({
        view: mapView,
        container: document.createElement("div")
      });
      const expand = new Expand({view: mapView, content: basemapGallery});
      mapView.ui.add(searchWidget, 'top-right');
      mapView.ui.add(expand, 'top-left');
      const nodosTelsur = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/0"
      });
      const trazadoTelsurProject = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/1"
      });
      const trazadoTelsur  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/FO_Red_Critica/MapServer/3"
      });

      const BorradorIC1Macrozonacentronorte_Wom  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_Will  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_VTRBandaAncha  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_TelefonicaChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_Movistar  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_EntelPhone  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_EntelPCS  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_ClaroComunicaciones  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonacentronorte_ClaroChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_Wom  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_Will  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_VtrBandaAncha  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_TelefonicaChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_Movistar  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_EntelPhone  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_EntelPCS  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_ClaroComunicaciones  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1Macrozonanorte_ClaroChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const IC1_IC2_2016_2020  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const IC1_PLANFISCA_N5MAYO  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      mapView.map.add(nodosTelsur);
      mapView.map.add(trazadoTelsurProject);
      mapView.map.add(trazadoTelsur);
      mapView.map.add(BorradorIC1Macrozonacentronorte_Wom);
      mapView.map.add(BorradorIC1Macrozonacentronorte_Will);
      mapView.map.add(BorradorIC1Macrozonacentronorte_VTRBandaAncha);
      mapView.map.add(BorradorIC1Macrozonacentronorte_TelefonicaChile);
      mapView.map.add(BorradorIC1Macrozonacentronorte_Movistar);
      mapView.map.add(BorradorIC1Macrozonacentronorte_EntelPhone);
      mapView.map.add(BorradorIC1Macrozonacentronorte_EntelPCS);
      mapView.map.add(BorradorIC1Macrozonacentronorte_ClaroComunicaciones);
      mapView.map.add(BorradorIC1Macrozonacentronorte_ClaroChile);
      mapView.map.add(BorradorIC1Macrozonanorte_Wom);
      mapView.map.add(BorradorIC1Macrozonanorte_Will);
      mapView.map.add(BorradorIC1Macrozonanorte_VtrBandaAncha);
      mapView.map.add(BorradorIC1Macrozonanorte_TelefonicaChile);
      mapView.map.add(BorradorIC1Macrozonanorte_Movistar);
      mapView.map.add(BorradorIC1Macrozonanorte_EntelPhone);
      mapView.map.add(BorradorIC1Macrozonanorte_EntelPCS);
      mapView.map.add(BorradorIC1Macrozonanorte_ClaroComunicaciones);
      mapView.map.add(BorradorIC1Macrozonanorte_ClaroChile);
      mapView.map.add(IC1_IC2_2016_2020);
      mapView.map.add(IC1_PLANFISCA_N5MAYO);
    } catch (error) {
      alert('se produjo un error');
      console.log('error: ' + error);
    }
  }

  async setZoomIn() {this.zoom.zoomIn();}
  async setZoomOut() {this.zoom.zoomOut();}

}
