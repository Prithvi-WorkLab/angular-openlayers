import { DocsModule } from './../../projects/docs/src/lib/docs.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { CustomControlModule } from './../../projects/custom-control/src/lib/custom-control.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, Router } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSliderModule} from '@angular/material';
import { OlProjSetupModule } from './../../projects/ol-proj-setup/src/public_api';
import { BasicSetupModule } from './../../projects/basic-setup/src/public_api';
import { CustomMarkersModule } from './../../projects/custom-markers/src/public_api';
import { SimplePopupModule } from './../../projects/simple-popup/src/public_api';
import { ClarityModule } from '@clr/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClusteredFeaturesModule } from './../../projects/clustered-features/src/public-api';
import { GeojsonRenderingModule } from './../../projects/geojson-rendering/src/public-api';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    BasicSetupModule,
    BrowserAnimationsModule,
    MatButtonModule,
    OlProjSetupModule,
    CustomMarkersModule,
    SimplePopupModule,
    CustomControlModule,
    HttpClientModule,
    ClarityModule,
    DocsModule,
    ClusteredFeaturesModule,
    MatSliderModule,
    GeojsonRenderingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(router: Router) {}
 }
