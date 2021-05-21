
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'login',
  templateUrl: './login-usser.component.html',
  styleUrls: ['./login-usser.component.scss']
})
export class AppLoginComponent implements OnInit {
   
   categories:string[] = ['category 1','category 2','category 3','category 4']
   signupForm: FormGroup;

   form:FormGroup

   constructor(private formBuilder:FormBuilder) {this.buildForm()}

   ngOnInit() { }


  private buildForm(){
    this.form = this.formBuilder.group({
    username:  ['',[Validators.required]],
    date:  ['',[Validators.required]],
    email:  ['',[Validators.required,Validators.email]],
    textarea:  ['',[Validators.required,Validators.maxLength(200),Validators.minLength(6)]],
    category:  ['',[Validators.required]],
    
  })

  //para ver por consola los cambios del form en tiempo real
  // this.form.valueChanges
  // .pipe(debounceTime(500))
  // .subscribe(value => {console.log(value)});

}
save(event:Event){
if(this.form.valid){
    event.preventDefault() //para que no recargue la página
  const value = this.form.value
  console.log(value)
}else{
return this.form.markAllAsTouched()
}
}

get usernameField(){return this.form.get('username')}
get dateField(){return this.form.get('date')}
get emailField(){return this.form.get('email')}
get textareaField(){return this.form.get('textarea')}
get categoryField(){return this.form.get('category')}




// public longValid(){
// let contTextArea = document.forms[0].textarea.value.length
// let numFieldPermit = 200
// if(contTextArea > numFieldPermit ){
//   return document.forms[0].textarea.value = numFieldPermit
// }else{
//   return numFieldPermit = document.forms[0].textarea.value
// }

// }



}




