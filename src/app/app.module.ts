import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoProgramaComponent } from './components/logo-programa/logo-programa.component';
import { RedessocComponent } from './components/redessoc/redessoc.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionFormalComponent } from './components/educacion-formal/educacion-formal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoProgramaComponent,
    RedessocComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionFormalComponent,
    ProgresoComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
