
import { Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.scss']
})
export class Prueba2Component implements OnInit {
  num:number
  n:number

  title4='Exercise 4'
  title5='Exercise 5'
  users:User[]
  us={
    name:'',
    value:''
  }
  constructor() { 
   
  }


  ngOnInit(): void {
    this.users = [{inputName:'Name',inputValue:'Jhon'},{inputName:'City',inputValue:'York'}]
    }

    addElement(){
           this.users.push({inputName:this.us.name,inputValue:this.us.value})
           console.log(this.users)
        }
        convertDecimal(){
           this.n = this.num;
        }
      

}
export class User{
inputName:string;
inputValue:string
}
