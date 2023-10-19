import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Temporizador } from '../models/temporizador.model';

@Injectable({
  providedIn: 'root'
})
export class TemporizadorService {

  private tiempo$ = new Subject<Temporizador>();
  private temporizadorDisplay: Temporizador = {minutos: 0, segundos: 0};
  private segundos: number = 0;
  private temporizador: any;

  iniciarTemporizador(segundos: number) {
    this.segundos = segundos;
    this.temporizador = setInterval(() => {
      this.segundos--;
      this.mostrarTiempo();
    }, 1000); // El temporizador se actualiza cada 1000 milisegundos (1 segundo)
  }

  detenerTemporizador() {
    clearInterval(this.temporizador);
  }

  reiniciarTemporizador() {
    this.segundos = 0;
    this.mostrarTiempo();
  }

  getTiempo$(): Observable<Temporizador> {
    return this.tiempo$.asObservable();
  }

  private mostrarTiempo() {
    this.temporizadorDisplay = {
      minutos: Math.floor(this.segundos / 60),
      segundos: this.segundos % 60,
    }
    this.tiempo$.next(this.temporizadorDisplay);
  }

}
