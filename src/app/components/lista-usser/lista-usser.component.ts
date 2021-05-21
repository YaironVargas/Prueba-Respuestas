import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms'

@Component({
  selector: 'app-lista-usser',
  templateUrl: './lista-usser.component.html',
  styleUrls: ['./lista-usser.component.scss']
})
export class ListaUsserComponent implements OnInit {

 /**declaraciones de variables, array y objetos */
 title:string = 'Member List';
 id:number = 0;
 msg:string = ''
 myValue
 hidden:boolean = true
 submitted:boolean = false
 regcorreo:any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

 employees:Employees[] = [
 { name:'Yairon Vargas',position:'Front-end Programmer',email:'yairon91@gmail.com',age:30},
 { name:'Dailet Soto',position:'Analyst',email:'dailet01@gmail.com',age:29},
 { name:'Yanet Aguila',position:'Tester',email:'yaguila70@gmail.com',age:50},
 { name:'Hairam Vargas',position:'Back-end Programmer',email:'hvargas@gmail.com',age:52},
 { name:'Maura Fumero',position:'Tester', email:'maura91@gmail.com',age:61},
 { name:'Anthuan Vargas ',position:'Designer',email:'anthuanv@gmail.com',age:19},
]

model2:any = {}


contact:FormGroup
constructor(private formBuilder:FormBuilder){
this.formBuil()
}

ngOnInit(){}
formBuil(){
  this.contact = this.formBuilder.group({
    name:['',[Validators.required]],
    position:['',Validators.required],
    email:['',[Validators.required,Validators.pattern(this.regcorreo)]],
    age:['', [Validators.required,Validators.min(18),Validators.max(65)]]
   
  })
}


get f(){ return this.contact.controls }

onSubmit(){
 this.submitted = true
 if(this.contact.invalid){
   return this.contact.markAllAsTouched()
  
 }
else{
 this.addEmployees()
}
}



addEmployees():void{
  this.employees.push(this.contact.value)
  this.msg='Successfuly created'
  this.contact.reset()

}


editEmployees(j):void{
this.hidden = false
this.model2.name = this.employees[j].name
this.model2.position = this.employees[j].position
this.model2.email = this.employees[j].email
this.model2.age = this.employees[j].age
this.myValue = j;

}

updateEmployees():void{
let i = this.myValue
for(let j in this.employees){
if(i==j){
 this.employees[i]=this.model2
 this.model2={}
 this.msg='Successfuly updated'
 this.hidden = true
}
}
}

deleteEmployees(j):void{
 var answers = confirm('Are you sure, you want to delete the element?')
 if(answers){
   this.employees = this.employees.filter((x) =>x !== j )
 this.msg=' Successfuly deleted'
 }

}

closeAlert():void{
 this.msg = ''
}

cancelUpdate():void{
 this.hidden = true

}

}

export class Employees{
name:string = '';
position:string = '';
email:string ='';
age:number = 0;

}
