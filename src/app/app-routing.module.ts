import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'profesores', component: ProfesoresComponent},
  { path: 'formularioAcceso', component: FormularioAccesoComponent},
  { path: 'formularioConsulta', component: FormularioConsultaComponent},
  { path: 'FormularioRegistro', component: FormularioRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
