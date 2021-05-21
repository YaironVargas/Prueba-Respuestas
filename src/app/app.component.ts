import { Component, OnInit } from '@angular/core';

import{ FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**declaraciones de variables, array y objetos */
  title:string = 'Member List';
  id:number = 0;
  employees:Employees[] = [
  { name:'Yairon Vargas',position:'Front-end Programmer',email:'yairon91@gmail.com',age:30},
  { name:'Dailet Soto',position:'Analyst',email:'dailet01@gmail.com',age:29},
  { name:'Yanet Aguila',position:'Tester',email:'yaguila70@gmail.com',age:50},
  { name:'Hairam Vargas',position:'Back-end Programmer',email:'hvargas@gmail.com',age:52},
  { name:'Maura Fumero',position:'Tester', email:'maura91@gmail.com',age:61},
  { name:'Anthuan Vargas ',position:'Designer',email:'anthuanv@gmail.com',age:19},
]
model:any = {}
model2:any = {}
msg:string = ''
myValue
hidden:boolean = true

contact:FormGroup
submitted:boolean = false

constructor(private formBuilder:FormBuilder){}

ngOnInit(){
  this.contact = this.formBuilder.group({
    name:['',[Validators.required]],
    position:['',Validators.required],
    email:['',Validators.required],
    age:['', Validators.required]
   
  })
}



get f(){ return this.contact.controls }

onSubmit(){
  this.submitted = true
  if(this.contact.invalid){
    return
   
  }
else{
  this.addEmployees()
}
}



addEmployees():void{
   this.employees.push(this.model)
   this.msg='Successfuly created'
   this.model={}
  
 
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
