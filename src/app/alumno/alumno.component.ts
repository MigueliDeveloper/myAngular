import { Component } from '@angular/core';
import { alumnosBD } from '../Models/alumnos';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  public alumnosAll: Array<alumnosBD>
  public nombreAlumno: string
  public apellidoAlumno: string
  public edad: number
  public correoElectronico: string
  public notaAlumno: number
 
  
  constructor(){

    this.nombreAlumno=""
    this.apellidoAlumno=""
    this.edad = 0
    this.correoElectronico= ""
    this.notaAlumno= 5
    this.alumnosAll=[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "1234567", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Javier", "Diaz", 19, "javier@gmail.com", "456789", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Chris", "Diaz", 24, "chris@gmail.com", "8975643", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Ana", "Quesada", 25, "ana@gmail.com", "8975643", "./assets/media/fotommp.jpg", false)
    ]
  }

  verCalificacionalumno(){}

  
}
