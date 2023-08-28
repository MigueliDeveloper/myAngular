import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../Models/alumnos';
import { alumnosBD } from '../Models/alumnos';
import { CursosService } from '../servicios/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
  providers
})

export class AlumnosComponent implements OnInit{

  public alumnosAll: alumnosBD[];
  public nombresAlumnos: string;
  public apellidosAlumnos: string;
  public correoElectronico: string;
  public notasAlumnos: number;

  constructor(private _cursosService: CusosService){
    this.nombresAlumnos="";
    this.apellidosAlumnos="";
    this.correoElectronico="";
    this.notasAlumnos= 5;
    this.alumnosAll=[];
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    this.inicializarAlumnos();
  }

  private inicializarAlumnos(){
    this.alumnosAll =[
      new alumnosBD("Miguel", "Ramírez", 39, "miguel@gmail.com", "1234567", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Javier", "Diaz", 19, "javier@gmail.com", "456789", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Chris", "Diaz", 24, "chris@gmail.com", "8975643", "./assets/media/fotommp.jpg", true),
      new alumnosBD("Ana", "Quesada", 25, "ana@gmail.com", "8975643", "./assets/media/fotommp.jpg", false)
    ];

  }

}

