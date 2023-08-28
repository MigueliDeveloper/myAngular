import { Injectable } from "@angular/core";
import { cursosBD } from "../Models/cursos";

@Injectable({
  provideIn: 'root'
})

export class CursosService {
  private cursosall: Array<cursosBD>

    constructor(){

      this.cursosall = [
        new cursosBD("Matematicas", "Asignatura de Matematicas", 580),
        new cursosBD("Lógica de Programación", "Asignatura de Logica de Programación", 650),
        new cursosBD("Física", "Asignatura de Física", 500),
      ]

    }

    getTexto(){
      return "Texto desde un servicio"

    }

    getCursos(): Array<cursosBD>{

        return this.cursosall
    }

    setCursos(){
    }

}
