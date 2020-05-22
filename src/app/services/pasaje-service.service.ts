import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeServiceService {

  ventas: Array<Pasaje>;

  constructor() {
    this.ventas = new Array<Pasaje>();
  }

  calcularPasaje(pasaje: Pasaje) {
    var total = pasaje.precioPasaje;
    if (pasaje.categoriaPasajero == "m") {
      total *= 0.75;
    }
    if (pasaje.categoriaPasajero == "j") {
      total *= 0.5;
    }
    return total;
  }

  guardarVenta(pasaje: Pasaje) {
    this.ventas.push(pasaje);
  }

  obtenerVentas() {
    return this.ventas;
  }

}
