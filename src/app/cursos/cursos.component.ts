import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit{

  public alumnosAll: Array<alumnosBD>
  public nombreProfesor: string
  public fotoProfesor: string
  public nombre: string // Manuel
  public descripcion: string
  public listado: string // Manuel
  public temario: string[] // lecciones
  public progreso: number
  public imagen: string // Manuel


  constructor(){
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor = profesorBase.foto
    this.nombre="Mi curso de Programación"
    this.descripcion= "Aprende a programar desde cero"
    this.listado= "Listado de Cursos"
    this.temario= ["Introducción a la programación", "Variables y tipos de datos", "Estructuras de control"]
    this.progreso= 0  
    this.imagen= "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page"
    this.alumnosAll=[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "1234567", "./assets/media/fotommp.jpg", true),
      
      new alumnosBD("Javier", "Ramírez", 19, "javier@gmail.com", "456789", "./assets/media/fotommp.jpg", true)
    ]

  
  }
  
  ngOnInit(){
    console.log("OnInit Ejecutado")

  }

  cambiarTitulo(){
    this.nombre= "Programacion Angular"

  }
  iniciarCurso(){
    // Realizar tareas de inicio del curso
    this.calcularProgreso()

  }

  calcularProgreso(){
    // Calcular el progreso en función de las lecciones completadas
    const leccionesCompletadas = 3; // Supongamos que se han completado 3 lecciones
    const totalLecciones = this.temario.length;
    this.progreso = (leccionesCompletadas / totalLecciones) * 100
  }

      
}
