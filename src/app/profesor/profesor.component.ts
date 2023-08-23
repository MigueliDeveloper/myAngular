import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../Models/profesores';
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})

export class ProfesorComponent {

  public profesorAll: Array<profesoresBD>
  public nombreProfesor: string
  public apellidoProfesor: string
  public cursoProfesor: string

  constructor(){
    this.profesorAll=[]
    this.nombreProfesor= ""
    this.apellidoProfesor= ""
    this.cursoProfesor= ""
  }



}
