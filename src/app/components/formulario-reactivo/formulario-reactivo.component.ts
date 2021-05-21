import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void { }

  //unico formulario de control
pais = new FormControl('',[Validators.required,Validators.minLength(3)])


//controles de formularios con FormGroup(creacion manual de intancias)
formPais = new FormGroup({
  pais: new FormControl('',[Validators.required]),
  capital:new FormControl('',[Validators.required]),
})

//controles de formularios con FormGroup(creacion manual de intancias)
formGroup = this.formBuilder.group({
  nombre: ['',[Validators.required,Validators.minLength(2)]],
  apellidos: ['',[Validators.required,Validators.minLength(2)]],
  edad:['',[Validators.required,Validators.min(18)]],
  universidad : this.formBuilder.group({
    nombre: ['',[Validators.required]],
    cede:['',[Validators.required]],
  })
})

updatePais(){
  this.pais.setValue('Cuba')
}




}
