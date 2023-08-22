import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {

  public nombreCurso: string
  public listado: string
  public descripcion: string
  public progreso: number
  public duracion: number
  public temario: string

  constructor(){
    this.nombreCurso= "Programación"
    this.listado= "Listado de Curso"
    this.descripcion = "Aprende a programar desde cero"
    this.progreso= 0
    this.duracion = 0
    this.temario= ""
  }

  eligirCurso(){
    this.listado= "ElegirCurso"
  }

  cambiarTitulo(){
    this.nombreCurso= "Programacion en Angular"
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
