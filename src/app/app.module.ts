import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Angular Material
import { MatCardModule}from '@angular/material/card';
import { CardWitchMultiSectionsComponent } from './extrasAngularMaterial/cardWithMultiSections/cardWithMultiSections.component';
//
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreacursoComponent } from './creacurso/creacurso.component';
import { TareasComponent } from './tareas/tareas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({ 
  declarations: [	
    AppComponent,
    CursoComponent,
    AlumnoComponent,
    ProfesorComponent,
    FormularioAccesoComponent,
    FormularioRegistroComponent,
    FormularioConsultaComponent,
    HeaderComponent,
    FooterComponent,
    CreacursoComponent,
    AlumnosComponent,
    CardWitchMultiSectionsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    TareasComponent, 
    BrowserAnimationsModule,
    ProfesoresComponent,
    CursosComponent,
    MatCardModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
