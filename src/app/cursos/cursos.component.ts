import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { profesoresBD } from '../Models/profesores';
import { cursosBD } from '../Models/cursos';
import { CursosService } from '../servicios/cursos.service';
import { AlumnosService } from '../servicios/alumnos.service';
import { ProfesoresService } from '../servicios/profesores';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService, AlumnosService, ProfesoresService]
})

export class CursosComponent implements OnInit{

  public cursosAll: Array<cursosBD>;
  public alumnosAll: Array<alumnosBD>
  public profesoresAll: Array<profesoresBD>;
  public nombreCursos: string // Manuel
  public nombreProfesor: string
  public nombreAlumnos: string
  public fotoProfesor: string
  public duracionCursos: number
  public descripcion: string
  public listado: string // Manuel
  public temario: string[] // lecciones
  public progreso: number
  public imagen: string // Manuel
  // public notaAlumno: number //va en curso
  public registrado: boolean
  public notasAlumnos: number = 5
  public posicion: number

  constructor(private  _cursosServices: CursosService,
              private  _alumnosServices: AlumnosService,
              private  _profesoresServices: ProfesoresService){

    this.cursosAll = this._cursosServices.getCursos();
    this.alumnosAll = this._alumnosServices.getAlumnos();
    this.profesoresAll = this._profesoresServices.getProfesores();
    this.nombreProfesor = this.profesoresAll[0].nombreP;
    this.nombreAlumnos = this.alumnosAll[0].nombreA
    this.fotoProfesor = profesorBase.foto
    this.nombreCursos= this.cursosAll[0].nombreC
    this.descripcion= ""
    this.duracionCursos= this.cursosAll[0].duracionC;
    this.listado= "Listado de Cursos"
    this.temario= ["Introducción a la programación", "Variables y tipos de datos", "Estructuras de control"]
    this.progreso= 0
    this.imagen= "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page"

    this.posicion=this.alumnosAll.length
    this.registrado= false

  }


  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.cursosAll = this._cursosServices.getCursos();
    console.log(this.alumnosAll)
    console.log(this.posicion)
    this.getNombreCursos();
    this.getDuracionCursos();
    this.getNombreProfesores();
    this.getNombreAlumnos();
  }


  getNombreCursos(){
    this.cursosAll.forEach((curso) =>{
      this.nombreCursos.push(curso.nombreC);
    });

    console.log(this.nombreCursos);
  }

  getDuracionCursos(){

    this.cursosAll.forEach((curso) => {
      this.duracionCursos.push(curso.duracionC);
    });

    console.log(this.duracionCursos)
  }

  getNombreProfesores(){
    this.profesoresAll.forEach((nombreProfesor) =>{
      this.nombreProfesor.push(nombreProfesor.nombreP)
    })

    console.log(this.nombreProfesor)
  }

  getNombreAlumnos(){

    this.alumnosAll.forEach((alumno) =>{
      this.nombreAlumnos.push(alumno.nombreA);
    });
    console.log(this.nombreAlumnos)

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
