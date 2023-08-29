import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { profesoresBD } from '../Models/profesores';
import { cursosBD } from '../Models/cursos';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})

export class CursosComponent implements OnInit{

  public cursosAll: Array<cursosBD>;
  public alumnosAll: Array<alumnosBD>
  public profesoresAll: Array<profesoresBD>;
  public nombreCursos: string // Manuel
  public nombreProfesor: string
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

  constructor(private  _cursosServices: CursosService){
    this.cursosAll = new Array<cursosBD>()
    this.alumnosAll = new Array<alumnosBD>()
    this.profesoresAll = new Array<profesoresBD>()
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor = profesorBase.foto
    this.nombreCursos="Cursos Programación"
    this.descripcion= "Aprende a programar desde cero"
    this.duracionCursos= 0;
    this.listado= "Listado de Cursos"
    this.temario= ["Introducción a la programación", "Variables y tipos de datos", "Estructuras de control"]
    this.progreso= 0
    this.imagen= "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page"

    this.posicion=this.alumnosAll.length
    this.registrado= false

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
    this.cursosAll.forEach((nombreProfesor) =>{
      this.nombreProfesor.push(nombreProfesor.nombreProfesor)
    })
  }

  getNombreAlumnos(){
    


  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.cursosAll = this._cursosServices.getCursos();
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
