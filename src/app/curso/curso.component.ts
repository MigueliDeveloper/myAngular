import { Component, OnInit} from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [AlumnosService]
})

export class CursoComponent implements OnInit{

  public alumnosAll: Array<alumnosBD>
  public nombreCurso: string
  public nombreProfesor: string
  public fotoProfesor: string
  public listado: string
  public descripcion: string
  public temarioCurso: string[] // lecciones
  public progreso: number
  public duracion: number
  public notaAlumno: number


  constructor(){
    this.alumnosAll=[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "1234567", "./assets/media/fotommp.jpg", true),

      new alumnosBD("Javier", "Diaz", 19, "javier@gmail.com", "456789", "./assets/media/fotommp.jpg", false)
    ]


    this.nombreCurso= ""
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor= profesorBase.foto
    this.nombreCurso="Mi curso de Programación"
    this.listado= "Curso"
    this.descripcion = "Aprende a programar desde cero"
    this.progreso= 0
    this.duracion = 0
    this.temarioCurso= ["Introducción a la programación", "Variables y tipos de datos", "Estructuras de control"]
    this.notaAlumno= 0
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")

  }

  eligirCurso(){
    this.listado= "ElegirCurso"
  }

  cambiarTitulo(){
    this.nombreCurso= "Programacion en Angular"
  }

  setRegistrado(){


  }

  iniciarCurso(){
    // Realizar tareas de inicio del curso

  }

  // calcularProgreso(){
  //   // Calcular el progreso en función de las lecciones completadas
  //   const leccionesCompletadas = 3; // Supongamos que se han completado 3 lecciones
  //   const totalLecciones = this.lecciones.length;

  // }

  /**
   * Progreso curso
   */

}
