import { Pipe, PipeTransform } from '@angular/core';
import { Temporizador } from '../models/temporizador.model';

@Pipe({
  name: 'temporizador'
})
export class TemporizadorPipe implements PipeTransform {
  minutos: string = '';
  segundos: string = '';

  transform(value: Temporizador, ...args: unknown[]): unknown {
    this.minutos = (value.minutos >= 10) ? value.minutos.toString() : `0${value.minutos}`;
    this.segundos = (value.segundos >= 10) ? value.segundos.toString() : `0${value.segundos}`;
    return `${this.minutos}:${this.segundos}`;
  }

}
