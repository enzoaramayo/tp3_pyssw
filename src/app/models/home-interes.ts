export class HomeInteres {
    id: number;
    nombre: string;
    descripcion: string;
    latitud: number;
    longitud: number;
    urlmapa: string;
    ultimaModificacion: Date;

    HomeInteres(id?: number, nombre?: string, descripcion?: string, latitud?: number, longitud?: number, urlmapa?: string, ultimaModificacion?: Date) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.urlmapa = urlmapa;
        this.ultimaModificacion = ultimaModificacion;
    }
}

