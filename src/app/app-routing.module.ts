import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
// Impotar Componentes
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AppComponent } from './app.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioConsultaComponent } from './formulario-consulta/formulario-consulta.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { CreacursoComponent } from './creacurso/creacurso.component';


const routes: Routes = [
// Solamente se van a usar los plurales
  // { path: '', component: AppComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'formularioAcceso', component: FormularioAccesoComponent },
  { path: 'formularioConsulta', component: FormularioConsultaComponent },
  { path: 'FormularioRegistro', component: FormularioRegistroComponent },
  { path: 'crearCurso', component: CreacursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
