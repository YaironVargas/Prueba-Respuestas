import { Component, Input,OnInit, EventEmitter} from '@angular/core';





@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

 title7='Exercise7'
 title6='Exercise6'

@Input() cont:number
  checked:boolean=false

  changeStatus(){
     if(this.checked === false){
     this.checked = true
     console.log('es : '+ this.checked)
     
   }
     else{
      this.checked = false
      console.log('es : '+ this.checked)
      }
  }
  
  toggleBorder(){
    if(this.checked==true){
      return 'solid 1px red'
    }else{
      return 'dashed 1px blue'
    }
  }


  constructor() { }

  ngOnInit(): void { }
  card:string='down'

  count:number = 0
  cards:String[]=[]
cardsClick:String[]=[]  

AddCard(){
this.cards.push(this.card)
this.count = this.count+1
//console.log(this.count)
  }

  stateButton(i){
    if(this.cards[i]==='Up'){
      this.cards
    }else{
      this.cardsClick = []
      for(let a in this.cards){
         this.cardsClick.push(this.cards[a])
         if(this.cardsClick[a]==='Up'){
           this.cards[a]='down'
         }else{
           this.cards[a]='down'
         }
      }
      this.cards[i]="Up"      
    }
         
  }
}

