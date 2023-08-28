import { Component, OnInit } from '@angular/core';
import { alumnosBD } from '../Models/alumnos';
import { AlumnosService} from '../servicios/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [AlumnosService]
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

    this.alumnosAll = new Array<alumnosBD>()
    this.nombreAlumnos="";
    this.apellidosAlumnos="";
    this.fotoAlumno= ""
    
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

