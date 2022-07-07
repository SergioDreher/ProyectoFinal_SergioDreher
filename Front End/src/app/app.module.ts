import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionFormalComponent } from './components/educacion-formal/educacion-formal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { Header1Component } from './components/header1/header1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionFormalComponent,
    ProgresoComponent,
    ProyectoComponent,
    FooterComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
