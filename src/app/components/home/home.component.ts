import { Component, OnInit } from '@angular/core';
import { HomeInteres } from './../../models/home-interes'
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeInteres: HomeInteres;
  homesInteres: Array<HomeInteres>;
  urlTest: string;

  //Inyectar un service no se instancian porque se hacen de manera automatica
  constructor(private homeService: HomeService) {
    this.homeInteres = new HomeInteres();
    this.homesInteres = new Array<HomeInteres>();
    this.urlTest = "http://www.google.com/maps/place/";
    this.obtenerPuntos();
  }

  ngOnInit(): void {
  }

  actualizarUrl() {
    this.urlTest = "http://www.google.com/maps/place/" + this.homeInteres.latitud + "," + this.homeInteres.longitud;
  }

  guardarPunto() {
    console.log("guardando ...");
    this.homeInteres.ultimaModificacion = new Date();
    this.homeService.addPuntos(this.homeInteres);
    this.obtenerPuntos();

    //Nomas para crear nuevos puntos en la vista
    this.homeInteres = new HomeInteres();

  }

  //Refresca la lista de puntos
  obtenerPuntos() {
    this.homesInteres = this.homeService.getPuntos();
  }

  //Este método solo trabaja en la capa vista
  elegirPunto(punto: HomeInteres) {
    this.homeInteres = punto;
  }

  //Este otro ya trabaja con la capa de Service
  borrarPunto(punto: HomeInteres) {
    this.homeService.deletePuntos(punto);
    this.obtenerPuntos();
  }

  updatePunto() {
    this.homeService.updatePunto(this.homeInteres);
    this.homeInteres = new HomeInteres();
    this.obtenerPuntos();
  }

  limpiarPunto() {
    this.homeInteres = new HomeInteres();
  }

}
