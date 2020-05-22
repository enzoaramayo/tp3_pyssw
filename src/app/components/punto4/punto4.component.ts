import { Component, OnInit } from '@angular/core';
import { Palabra } from './../../models/palabra'
import { MisPalabrasService } from 'src/app/services/mis-palabras.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  vidas: number;
  puntaje: number;
  palabra: Palabra;
  palabraIngles: string;
  perdiste: boolean;
  activo: any

  constructor(private palabras: MisPalabrasService) {
    this.vidas = 0;
    this.puntaje = 0;
    this.perdiste = false;
    this.palabra = new Palabra();
    this.palabra.urlImagen = "assets/adivina.png";
  }

  ngOnInit(): void {

  }

  obtenerPalabra() {
    this.vidas = 6;
    this.puntaje = 0;
    this.palabra = this.palabras.getPalabra();
    this.removerBotones();
    this.dibujarPalabra(this.palabra.palabraIngles);
    this.capturaTeclado();
  }

  dibujarPalabra(palabra: string): void {
    var div = document.getElementById('div_palabra')
    for (let i = 0; i < palabra.length; i++) {
      var btn = document.createElement('button')
      btn.addEventListener('click', (e) => this.activo = e.target)
      var txt = document.createTextNode('_')
      btn.appendChild(txt)
      div.appendChild(btn)
    }

  }

  capturaTeclado(): void {
    document.addEventListener('keyup', (e) => {
      if (this.activo && e.keyCode > 64 && e.keyCode < 90) {
        this.activo.innerText = e.key
      }
    })
  }

  removerBotones() {
    let botones = document.getElementById('div_palabra');
    while (botones.firstChild) {
      botones.removeChild(botones.firstChild);
    }
  }

}
