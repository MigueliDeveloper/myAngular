import { Component, OnInit } from '@angular/core';
import { profesoresBD } from '../Models/profesores';
import { ProfesoresService } from '../servicios/profesores';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers: [ProfesoresService]
})

export class ProfesoresComponent implements OnInit{
  public profesoresAll: Array<profesoresBD>;
  public nombresProfesores: string;
  public apellidosProfesores: string;
  public cursosProfesores: string;

  constructor(private _profesoresServices: ProfesoresService){

    this.profesoresAll= new Array<profesoresBD>();
    this.nombresProfesores= "";
    this.apellidosProfesores= "";
    this.cursosProfesores= "";
  }

  ngOnInit(){
    this.profesoresAll = this._profesoresServices.getCursos();
    this.getNombreProfesor();
    this.getCorreoEle();
  }



  getNombreProfesor(){
    this.profesoresAll.forEach((profesor) =>{
      this.nombresProfesores.push(profesor.nombreP);
    });

    console.log(this.nombresProfesores)
  }

  getCorreoEle(){
    this.profesoresAll.forEach((profesor) => {
      this.cursosProfesores.push(profesor.correo);

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
