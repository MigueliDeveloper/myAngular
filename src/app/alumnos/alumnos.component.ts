import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  public nombreAlumno: string
  public apellidoAlumno: string

  constructor(){
    this.nombreAlumno=""
    this.apellidoAlumno=""
  }

  


}
