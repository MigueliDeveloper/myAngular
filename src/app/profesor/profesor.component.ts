import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../Models/profesores';
import { ProfesoresService} from '../servicios/profesores';
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  providers: [ProfesoresService],
})

export class ProfesorComponent implements OnInit{

  public profesorAll: Array<profesoresBD>
  public nombreProfesor: string
  public apellidoProfesor: string
  public correoElectronicoProfesor: string
  public cursoProfesor: string

  constructor(private _profesoresServices: ProfesoresService){
    this.profesorAll=this._profesoresServices.getProfesores();
    this.nombreProfesor= this.profesorAll[0].nombreP;
    this.apellidoProfesor= this.profesorAll[0].apellidoP;
    this.correoElectronicoProfesor = this.profesorAll[0].correo;
    this.cursoProfesor= this.profesorAll[0].cursosP
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")

  }



}
