import { Component, OnInit } from '@angular/core';
import { Palabra } from './../../models/palabra'
import { MisPalabrasService } from 'src/app/services/mis-palabras.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  vidas: number;
  puntaje: number;
  palabra: Palabra;

  perdiste: boolean;
  ganaste: boolean;
  activo: any

  iniciar: boolean;
  crossword: Array<String>;

  letra: string;

  caracter1: string;
  caracter2: string;
  caracter3: string;
  caracter4: string;
  caracter5: string;
  caracter6: string;
  caracter7: string;
  caracter8: string;
  caracter9: string;
  caracter10: string;
  caracter11: string;

  contador: number;

  constructor(private palabras: MisPalabrasService) {
    this.vidas = 0;
    this.puntaje = 0;
    this.ganaste = false;
    this.perdiste = false;
    this.iniciar = false;
    this.palabra = new Palabra();
    this.palabra.urlImagen = "assets/adivina.png";
    this.limpiar();
    this.contador = 0;
  }

  ngOnInit(): void {

  }

  obtenerPalabra() {
    this.vidas = 6;
    this.puntaje = 0;
    this.palabra = this.palabras.getPalabra();
    this.iniciar = true;
    this.ganaste=false
    this.limpiar();
    this.cargarArregloDeLetras();
  }

  cargarArregloDeLetras() {
    this.crossword = new Array<String>();
    for (var i = 0; i < this.palabra.palabraIngles.length; i++) {
      this.crossword.push(this.palabra.palabraIngles[i]);
      console.log(this.crossword[i]);
    }
  }

  cargarPalabra() {
    this.caracter1 = this.palabra.palabraIngles[0];
    this.caracter2 = this.palabra.palabraIngles[1];
    this.caracter3 = this.palabra.palabraIngles[2];
    this.caracter4 = this.palabra.palabraIngles[3];
    this.caracter5 = this.palabra.palabraIngles[4];
    this.caracter6 = this.palabra.palabraIngles[5];
    this.caracter7 = this.palabra.palabraIngles[6];
    this.caracter8 = this.palabra.palabraIngles[7];
    this.caracter9 = this.palabra.palabraIngles[8];
    this.caracter10 = this.palabra.palabraIngles[9];
    this.caracter11 = this.palabra.palabraIngles[10];
  }

  limpiar() {
    this.caracter1 = null;
    this.caracter2 = null;
    this.caracter3 = null;
    this.caracter4 = null;
    this.caracter4 = null;
    this.caracter5 = null;
    this.caracter6 = null;;
    this.caracter7 = null;
    this.caracter8 = null;;
    this.caracter9 = null;
    this.caracter10 = null;
    this.caracter11 = null;
  }

  controlar() {
    console.log("probando probando");
  }

  descontarvidas(primera: string, segunda: string) {
    if (primera.toUpperCase() != segunda) {
      this.vidas--;
      console.log("menos vidas");

    } else {
      this.contador++;
      console.log("mas puntaje");
    }
    if (this.vidas < 1) {
      this.perdiste = true;
    }
    if (this.contador == this.crossword.length) {
      this.renovarPalabra();
    }
  }

  renovarPalabra() {
    this.puntaje += 100;
    if (this.puntaje > 300) {
      this.ganaste = true;
    } else {
      this.contador = 0;
      this.palabra = this.palabras.getPalabra();
      this.cargarArregloDeLetras();
      this.limpiar();
    }
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
        console.log(this.activo.id);
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