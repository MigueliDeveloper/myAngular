import { Component } from '@angular/core';
import { profesoresBD } from '../Models/profesores';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})

export class ProfesoresComponent {
  public profesoresAll: Array<profesoresBD>
  public nombresProfesores: string
  public apellidosProfesores: string
  public cursosProfesores: string

  constructor(){

    this.profesoresAll=[]
    this.nombresProfesores= ""
    this.apellidosProfesores= ""
    this.cursosProfesores= ""
  }
}
