import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../Models/alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit{

  public alumnosAll: Array<alumnosBD>
  public nombresAlumnos: string
  public apellidosAlumnos: string
  public notasAlumnos: number

  constructor(){
    this.nombresAlumnos=""
    this.apellidosAlumnos=""
    this.alumnosAll=[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "1234567", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Javier", "Diaz", 19, "javier@gmail.com", "456789", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Chris", "Diaz", 24, "chris@gmail.com", "8975643", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Ana", "Quesada", 25, "ana@gmail.com", "8975643", "./assets/media/fotommp.jpg", false)
    ]
    this.notasAlumnos= 5
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
  
  }
  
}

