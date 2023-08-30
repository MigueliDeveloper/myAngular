import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})

export class FormularioRegistroComponent implements OnInit{
  registrationForm!: FormGroup;  // Definir FormGroup para el formulario reactivo

  constructor(private readonly fb: FormBuilder){} // Inyectar FormBuilder

  ngOnInit(){
    this.registrationForm = this.fb.group({
      nombreR: ['', Validators.required],
      emailR: ['', [Validators.required, Validators.email]],
      contrasenaR: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  submitForm(){
    if(this.registrationForm.valid) {
      console.log('Formulario enviado:');
      console.log('Nombre:', this.registrationForm.value.nombreR);
      console.log('Email', this.registrationForm.value.email);
      console.log('Contraseña:', this.registrationForm.value.contrasenaR);
    }
  }

}
