import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

 
  
    private _alumnosUtl:AlumnosUtl[]=[
      {
        nombre:'Gustavo',
        edad:20,
      },
      {
        nombre:'Juan Carlos',
        edad:22,
      },
      {
        nombre:'Rosa',
        edad:24,
      }
    ]
  constructor() { }
  get alumnos():AlumnosUtl[]{
    return[...this._alumnosUtl];
  }

  
  agregarNuevoAlumno(datos:AlumnosUtl){

    this._alumnosUtl.push(datos);
  }

}
