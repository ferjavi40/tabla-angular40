import { Component } from '@angular/core';


//consumir json
import animales from './_animales/animals.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoVista';


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
  

mostrar:boolean=false;
 
}
