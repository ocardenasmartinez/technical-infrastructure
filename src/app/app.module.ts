import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { OnlyMapComponent } from './only-map/only-map.component';
import { TemplateConstants } from './esri-map/template-constants';
import { LayerCriticalInf } from './esri-map/layers-component';
import { Searcher } from './esri-map/searcher-component';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    OnlyMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: TemplateConstants, useClass: TemplateConstants},
              {provide: LayerCriticalInf, useClass: LayerCriticalInf},
              {provide: Searcher, useClass: Searcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
