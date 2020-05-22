import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class MisPalabrasService {

  palabra: Palabra;
  palabras: Palabra[];

  constructor() {
    this.palabras = [
      new Palabra("assets/caballo.jpg", "HORSE", "CABALLO"),
      new Palabra("assets/carpincho.jpg", "CAPYBARA", "CARPINCHO"),
      new Palabra("assets/cocodrilo.jpg", "CROCODILE", "COCODRILO"),
      new Palabra("assets/colibri.jpg", "HUMMINGBIRD", "COLIBRI"),
      new Palabra("assets/leon.jpg", "LION", "LEON"),
      new Palabra("assets/loro.jpg", "PARROT", "LORO"),
      new Palabra("assets/oso.jpg", "BEAR", "OSO"),
      new Palabra("assets/pato.jpg", "DUCK", "PATO"),
      new Palabra("assets/rata.jpg", "RAT", "RATA"),
      new Palabra("assets/tigre.jpg", "TIGER", "TIGRE"),
    ];
  }

  getPalabra() {
    return this.palabras[this.getNumber()];
  }

  getNumber() {
    var numero = Math.round(Math.random() * 9);
    console.log(numero);
    return numero;
  }

}
