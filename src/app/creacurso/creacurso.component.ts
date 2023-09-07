import { Component, OnInit } from '@angular/core';
import { Curso } from '../Models/curso';
import { Global } from '../servicios/global'; 
import { save_cursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-creacurso',
  templateUrl: './creacurso.component.html',
  styleUrls: ['./creacurso.component.css'],
  providers: [save_cursoService]
})

export class CreacursoComponent implements OnInit {
  
  public title: string
  public curso: Curso
  public save_curso: any
  public status: any
  public result: any

  constructor(private _cursoService: save_cursoService) { 
    this.result = null
    this.title = "Crear Curso"
    this.curso = new Curso('','','','',6,'','')
  }

  ngOnInit() {
  }

  onSubmit(form: {reset: ()=> void}){
    this._cursoService.saveCurso(this.curso).subscribe(
      response => {
      if(response.curso){
        this.save_curso = this.result.curso
        this.status = 'success'
        form.reset()
      }else{
        this.status= 'failed'
      }
    }
    )
  }

}
