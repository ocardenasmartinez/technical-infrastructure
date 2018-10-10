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

      const BorradorIC1MacrozonacentronorteWom  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteWill  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteVtRBandaAncha  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteTelefonicaChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteMovistar  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteEntelPhone  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteEntelPCS  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteClaroComunicaciones  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonacentronorteClaroChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteWom  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteWill  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteVtrBandaAncha  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteTelefonicaChile  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteMovistar  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteEntelPhone  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteEntelPCS  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteClaroComunicaciones  = new FeatureLayer({
        url: "http://copahue.subtel.gob.cl:6080/arcgis/rest/services/INFRAESTRUCTURA_CRITICA/INFRAESTRUCTURA_CRITICA/MapServer/0"
      });

      const BorradorIC1MacrozonanorteClaroChile  = new FeatureLayer({
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
      mapView.map.add(BorradorIC1MacrozonacentronorteWom);
      mapView.map.add(BorradorIC1MacrozonacentronorteWill);
      mapView.map.add(BorradorIC1MacrozonacentronorteVtRBandaAncha);
      mapView.map.add(BorradorIC1MacrozonacentronorteTelefonicaChile);
      mapView.map.add(BorradorIC1MacrozonacentronorteMovistar);
      mapView.map.add(BorradorIC1MacrozonacentronorteEntelPhone);
      mapView.map.add(BorradorIC1MacrozonacentronorteEntelPCS);
      mapView.map.add(BorradorIC1MacrozonacentronorteClaroComunicaciones);
      mapView.map.add(BorradorIC1MacrozonacentronorteClaroChile);
      mapView.map.add(BorradorIC1MacrozonanorteWom);
      mapView.map.add(BorradorIC1MacrozonanorteWill);
      mapView.map.add(BorradorIC1MacrozonanorteVtrBandaAncha);
      mapView.map.add(BorradorIC1MacrozonanorteTelefonicaChile);
      mapView.map.add(BorradorIC1MacrozonanorteMovistar);
      mapView.map.add(BorradorIC1MacrozonanorteEntelPhone);
      mapView.map.add(BorradorIC1MacrozonanorteEntelPCS);
      mapView.map.add(BorradorIC1MacrozonanorteClaroComunicaciones);
      mapView.map.add(BorradorIC1MacrozonanorteClaroChile);
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
