import { Component, OnInit} from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { profesoresBD } from '../Models/profesores';
import { cursosBD } from '../Models/cursos';
import { CursosService } from '../servicios/cursos.service';
import { AlumnosService } from '../servicios/alumnos.service';
import { ProfesoresService } from '../servicios/profesores';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [CursosService, AlumnosService, ProfesoresService]
})

export class CursoComponent implements OnInit{

  public cursosAll: Array<cursosBD>;
  public alumnosAll: Array<alumnosBD>
  public profesoresAll: Array<profesoresBD>;
  public nombreCurso: string
  public nombreProfesor: string
  public fotoProfesor: string
  public listado: string
  public descripcion: string
  public temarioCurso: string[] // lecciones
  public progreso: number
  public duracion: number
  public notaAlumno: number


  constructor(private  _cursosServices: CursosService,
              private  _alumnosServices: AlumnosService,
              private  _profesoresServices: ProfesoresService){


    this.cursosAll = this._cursosServices.getCursos();
    this.alumnosAll = this._alumnosServices.getAlumnos();
    this.profesoresAll = this._profesoresServices.getProfesores();

    this.nombreCurso= this.cursosAll[0].nombreC
    this.nombreProfesor = this.profesoresAll[0].nombreP;
    this.fotoProfesor= profesorBase.foto
    this.nombreCurso=this.cursosAll[0].nombreC
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
