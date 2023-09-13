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
import { TareasComponent } from './tareas/tareas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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
  { path: 'crearCurso', component: CreacursoComponent},
  { path: 'tareas', component: TareasComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
