import { Component } from '@angular/core';


//consumir json
import animales from './_animales/animals.json';
import  personas  from './personas/persons.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoVista';
  page:number=1;


  listaAnimales:{
    _id_legal: Number,
    date_birth:Number,
    genus:String,
    sex:String,
    name:String,
    createdAt:Number,
    updatedAt:Number, 
    age: any
  }[]=animales;
  
  //lista de personas

  listaPersonas:{
    userId:number,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    emailAddress:string
  }[]=personas;

  constructor(){
    
  }

 
  mostrar:boolean=false;

  mostrar2:boolean=false;
 
}
