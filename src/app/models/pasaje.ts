export class Pasaje {

    dniPasajero: string;
    precioPasaje: number;
    categoriaPasajero: string;
    fechaCompra: Date;

    Pasaje(dniPasajero?: string, precioPasaje?: number, categoriaPasajero?: string, fechaCompra?: Date) {
        this.dniPasajero = dniPasajero;
        this.precioPasaje = precioPasaje;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
    }
}
