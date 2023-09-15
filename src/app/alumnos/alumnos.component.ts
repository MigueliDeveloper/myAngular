import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../Models/alumnos';
import { AlumnosService} from '../servicios/alumnos.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [AlumnosService],
  standalone: true,
  imports:[MatCardModule],
})

export class AlumnosComponent implements OnInit{

  public alumnosAll: Array<alumnosBD>;
  public nombreAlumnos: string;
  public apellidosAlumnos: string;
  public correoElectronico: string[]= [];
  public notasAlumnos: number= 5;
  public registrado: boolean = false;
  public fotoAlumno: string;

  constructor(private _alumnosService: AlumnosService){

    this.alumnosAll = this._alumnosService.getAlumnos();
    this.nombreAlumnos= this.alumnosAll[0].nombreA;
    this.apellidosAlumnos=this.alumnosAll[0].apellidoA;
    this.fotoAlumno= this.alumnosAll[0].fotoA;

  }

  ngOnInit(){
    this.alumnosAll = this._alumnosService.getAlumnos();
    this.getcorreosEle();
  }

  getcorreosEle() {
    this.alumnosAll.forEach((alumno) =>{
      this.correoElectronico.push(alumno.correoA);
    });
    console.log(this.correoElectronico)
  }

  setRegistrado() {
    this.registrado = true;
  }

  unsetRegistrado() {
    this.registrado = false;
  }

}

