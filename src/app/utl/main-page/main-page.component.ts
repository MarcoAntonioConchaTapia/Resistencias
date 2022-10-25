import { Component} from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.Interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent{
  regAlumno:AlumnosUtl={
    nombre:'Pablo',
    edad:24,
  }



}
