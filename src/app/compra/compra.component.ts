import { Component, OnDestroy } from '@angular/core';
import { TemporizadorService } from '../services/temporizador.service';
import { Observable, Subscription } from 'rxjs';
import { Temporizador } from '../models/temporizador.model';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnDestroy {
  tiempo$: Observable<Temporizador>;
  tiempo: Temporizador = {minutos: -1, segundos: -1, estado: false};
  segundos = parseInt('80');
  subs = new Subscription();

  constructor(private temporizador: TemporizadorService) {
    this.tiempo$ = this.temporizador.getTiempo$();
  }

  GetToken() {
    console.log('Entree');
    
    this.temporizador.iniciarTemporizador(this.segundos);
    this.tiempo$ = this.temporizador.getTiempo$();
    this.subs.add(this.tiempo$.subscribe(tiempo => {
      this.tiempo = tiempo;
      console.log(this.tiempo);
    }));
    
    console.log('Ya cree el temporizador');

    // Espera n segundos y luego detiene el temporizador
    setTimeout(() => {
      this.temporizador.detenerTemporizador();
    }, this.segundos*1000);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  
}
