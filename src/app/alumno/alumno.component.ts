import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  public nombre: string
  public notaAlumno: number
  
  constructor(){

    this.nombre="nombreAlumno"
    this.notaAlumno= 0
  }

  calificacionalumno(){}

  
}
