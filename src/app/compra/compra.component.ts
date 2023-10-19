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
  tiempo: Temporizador = {minutos: 0, segundos: 0};
  segundos = parseInt('6');
  subs = new Subscription();

  mostrarTiempo = false;
  mostrarReenvio = false;
  mostrarEnvio = true;

  constructor(private temporizador: TemporizadorService) {
    this.mostrarEnvio = true;
    this.tiempo$ = this.temporizador.getTiempo$();
  }

  GetToken() {
    console.log('Entree');
    
    this.temporizador.iniciarTemporizador(this.segundos);
    this.tiempo$ = this.temporizador.getTiempo$();
    this.subs.add(this.tiempo$.subscribe(tiempo => {
      this.tiempo = tiempo;
      this.mostrarTiempo = true;
      this.mostrarReenvio = false;
      this.mostrarEnvio = false;
      console.log(this.tiempo);
    }));
    
    console.log('Ya cree el temporizador');

    // Espera n segundos y luego detiene el temporizador
    setTimeout(() => {
      this.temporizador.detenerTemporizador();
      this.mostrarReenvio = true;
    }, this.segundos*1000);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  
}
