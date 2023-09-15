import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../Models/profesores';
import { ProfesoresService } from '../servicios/profesores';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers: [ ProfesoresService ],
  standalone: true,
  imports:[MatCardModule],
})

export class ProfesoresComponent implements OnInit{
  public profesoresAll: Array<profesoresBD>;
  public nombresProfesores: string;
  public nombresP: string[] = [];
  public apellidosProfesores: string;
  public cursosProfesores: string;

  public correosEle: string[] = [];

  constructor(private _profesoresServices: ProfesoresService){

    this.profesoresAll= this._profesoresServices.getProfesores();
    this.nombresProfesores= this.profesoresAll[0].nombreP;
    this.apellidosProfesores= this.profesoresAll[0].apellidoP;
    this.cursosProfesores= this.profesoresAll[0].cursosP;
  }

  ngOnInit(){
    this.profesoresAll = this._profesoresServices.getProfesores();
    this.getNombreProfesor();
    this.getCorreoEle();
  }


  getNombreProfesor(){
    this.profesoresAll.forEach((profesor) =>{
      this.nombresP.push(profesor.nombreP);
    });

    console.log(this.nombresProfesores)
  }

  getCorreoEle(){
    this.profesoresAll.forEach((profesor) => {
      this.correosEle.push(profesor.nombreP);

    });

    console.log(this.cursosProfesores);
  }

  // setRegistrado() {
  //   this.registrado = true;
  // }

  // unsetRegistrado() {
  //   this.registrado = false;
  // }

}
