import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../Models/alumnos';
import { AlumnosService} from '../servicios/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnosService]
})

export class AlumnoComponent implements OnInit{

  public alumnosAll: Array<alumnosBD>
  public cursosMatriculado: [][]
  public nombreAlumno: string
  public apellidoAlumno: string
  public edad: number
  public correoElectronico: string
  public notaAlumno: number


  constructor(private _alumnosService: AlumnosService){

    this.alumnosAll = this._alumnosService.getAlumnos();
    this.nombreAlumno= this.alumnosAll[0].nombreA;
    this.apellidoAlumno= this.alumnosAll[0].apellidoA;
    this.edad = this.alumnosAll[0].edadA
    this.correoElectronico= this.alumnosAll[0].correoA
    this.cursosMatriculado= [[], []]
    this.notaAlumno= 5

  }

  getNombreAlumno(){
    this.alumnosAll.forEach((alumno) =>{
        this.nombreAlumno.push(alumno.nombreA);
    });
    console.log(this.nombreAlumno)

  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
  }

  verCalificacionalumno(){}

}
