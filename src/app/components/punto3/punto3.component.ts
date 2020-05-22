import { Component, OnInit } from '@angular/core';
import { Pasaje } from './../../models/pasaje'
import { PasajeServiceService } from 'src/app/services/pasaje-service.service';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']

})
export class Punto3Component implements OnInit {

  show: boolean = false;
  precioFinal: number;
  importeTotal: number;
  pasaje: Pasaje;
  ventas: Array<Pasaje>;
  resumen: string;

  constructor(private pasajeService: PasajeServiceService) {
    this.pasaje = new Pasaje();
    this.ventas = new Array<Pasaje>();
  }

  ngOnInit(): void {
  }

  obtenerVentas() {
    this.ventas = this.pasajeService.obtenerVentas();
    this.importeTotal = 0;
  }

  calcularDescuento() {
    if (this.pasaje.categoriaPasajero == "s" || this.pasaje.precioPasaje == null) {
      this.show = false;
    } else {
      this.show = true;
      this.precioFinal = this.pasajeService.calcularPasaje(this.pasaje);
    }
  }

  guardarVenta() {
    console.log("guardando ...");
    if(this.pasaje.categoriaPasajero=="m"){
      this.pasaje.categoriaPasajero="Menor";
    }
    if(this.pasaje.categoriaPasajero=="a"){
      this.pasaje.categoriaPasajero="Adulto";
    }
    if(this.pasaje.categoriaPasajero=="j"){
      this.pasaje.categoriaPasajero="Jubilado";
    }
    this.pasaje.precioPasaje = this.precioFinal;
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.guardarVenta(this.pasaje);
    this.obtenerVentas();
    this.obtenerResumen();
    this.pasaje = new Pasaje();
  }

  limpiar() {
    this.pasaje = new Pasaje();
    this.show = false;
  }

  obtenerResumen() {
    this.obtenerVentas();
    var cantidad: number[] = new Array(0, 0, 0);
    var total: number[] = new Array(0, 0, 0);
    for (var i = 0; i < this.ventas.length; i++) {
      if (this.ventas[i].categoriaPasajero == "Menor") {
        cantidad[0]++;
        total[0] += this.ventas[i].precioPasaje;
      }
      if (this.ventas[i].categoriaPasajero == "Adulto") {
        cantidad[1]++;
        total[1] += this.ventas[i].precioPasaje;
      }
      if (this.ventas[i].categoriaPasajero == "Jubilado") {
        cantidad[2]++;
        total[2] += this.ventas[i].precioPasaje;
      }
      this.importeTotal += this.ventas[i].precioPasaje;
    }
    this.resumen = "Resumen" + "\n" + "Niños: " + cantidad[0] + "\n" + "Total: $" + total[0] +
      "\nAdultos: " + cantidad[1] + "\nTotal: $" + total[1] +
      "\nJubilados: " + cantidad[2] + "\nTotal: $" + total[2] +
      "\nTotal Ventas: $" + this.importeTotal;
  }
}
