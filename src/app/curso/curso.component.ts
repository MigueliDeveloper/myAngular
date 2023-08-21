import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {

  public nombre: string
  public listado: string
  public descripcion: string
  public progreso: number = 0

  constructor(){
    this.nombre= "Programación"
    this.listado= "Listado de Curso"
    this.descripcion = "Aprende a programar desde cero"

  }

  eligirCurso(){
    this.listado= "ElegirCurso"
  }

  cambiarTitulo(){
    this.nombre= "Programacion en Angular"
  }

  iniciarCurso(){
    // Realizar tareas de inicio del curso

  }

  calcularProgreso(){
    // Calcular el progreso en función de las lecciones completadas
    const leccionesCompletadas = 3; // Supongamos que se han completado 3 lecciones
    const totalLecciones = this.lecciones.length;

  }

  /**
   * Progreso curso
   */

}
