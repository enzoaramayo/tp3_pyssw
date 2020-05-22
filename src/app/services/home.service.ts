import { Injectable } from '@angular/core';
import { HomeInteres } from '../models/home-interes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homesInteres: Array<HomeInteres>;

  constructor() {
    this.homesInteres = new Array<HomeInteres>();
  }

  getPuntos() {
    return this.homesInteres;
  }

  addPuntos(home: HomeInteres) {
    home.id = this.getIdDisponible();
    this.homesInteres.push(home);
  }

  deletePuntos(punto: HomeInteres) {
    var idBorrar = this.homesInteres.findIndex((item: HomeInteres) => item.id == punto.id);
    this.homesInteres.splice(idBorrar, 1);
  }

  updatePunto(punto: HomeInteres) {
    var idBorrar = this.homesInteres.findIndex((item: HomeInteres) => item.id == punto.id);
    //Actualiza la posicion idBorrar, 1 elimina ese esacio y punto lo reemplaza.
    this.homesInteres.splice(idBorrar, 1, punto);
  }

  getIdDisponible() {
    var maxId: number;
    maxId = 0;
    for (var i = 0; i < this.homesInteres.length; i++) {
      if (maxId < this.homesInteres[i].id) {
        maxId = this.homesInteres[i].id;
      }
    }
    return maxId + 1;
  }



}
