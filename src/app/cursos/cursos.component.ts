import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { profesoresBD } from '../Models/profesores';
import { cursosBD } from '../Models/cursos';



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
  public notaAlumno: number
  public registrado: boolean
  public nota: number
  public posicion: number

  constructor(){
    this.nota= 0
    this.notaAlumno= 5
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
      new alumnosBD("Javier", "Diaz", 19, "javier@gmail.com", "456789", "./assets/media/fotommp.jpg", false)
    ]

    this.posicion=this.alumnosAll.length


    this.registrado= false

  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.alumnosAll)
    console.log(this.posicion)
  }

  cambiarTitulo(){
    this.nombre= "Programacion Angular"

  }

  setRegistrado(){
    this.registrado= true

  }

  unsetRegistrado(){
    this.registrado= false
  }

  Registrado(){


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
