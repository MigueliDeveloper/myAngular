import { Injectable } from "@angular/core";
import { profesoresBD } from "../Models/profesores";

@Injectable({
  providedIn: 'root'

})

export class ProfesoresService {
  private profesoresall: Array<profesoresBD>

    constructor(){
      this.profesoresall= [
        new profesoresBD( "Manolo", "Gonzalez","manologonzalez@gmail.com" ,"./assets/media/fotommp.jpg"),
        new profesoresBD( "Antonio", "Sanchez","antoniosanchez@gmail.com" ,"./assets/media/fotommp.jpg"),
        new profesoresBD( "Gilberto", "Lopez","gilbertolopez@gmail.com" ,"./assets/media/fotommp.jpg"),
      ]
    }

    getTexto(){
      return "Texto desde un servicio"

    }

    getCursos(): Array<profesoresBD>{

      return this.profesoresall
    }

    setCursos(){
    }
}


