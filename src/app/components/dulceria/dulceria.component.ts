import { Component, OnInit } from '@angular/core';

//para formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-dulceria',
  templateUrl: './dulceria.component.html',
  styleUrls: ['./dulceria.component.scss']
})
export class DulceriaComponent implements OnInit {

     //declaracion de variables
     cake:string[] = ['Cake de Bombones','Cake de Chocolate','Cake de Fresa','Cake de Vainilla','Cake de Almendras']
     contacto:FormGroup
     submitted:boolean = false
     regcorreo:any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    


     constructor(private formBuilder:FormBuilder) { }

     ngOnInit(): void {

        this.contacto = this.formBuilder.group({
          cake:['', Validators.required],
          nombre:['',[Validators.required]],
          correo:['',[Validators.required,Validators.pattern(this.regcorreo)]],
          asunto:['', Validators.required],
          mensaje:['', [Validators.required,Validators.minLength(6),Validators.maxLength(250)]],
        })
     }

get f(){ return this.contacto.controls }

onSubmit(){
   this.submitted = true
   
   if(this.contacto.invalid){
     return
   }
return alert('Mensaje Enviado')

}


}

