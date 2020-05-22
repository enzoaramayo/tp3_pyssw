export class Palabra {

    urlImagen: string;
    palabraIngles: string;
    palabraEspanol: string;

    constructor(urlImagen?: string, palabraIngles?: string, palabraEspanol?: string) {
        this.urlImagen = urlImagen;
        this.palabraIngles = palabraIngles;
        this.palabraEspanol = palabraEspanol;
    }
}
