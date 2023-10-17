import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompraComponent } from './compra/compra.component';
import { TemporizadorPipe } from './pipes/temporizador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    TemporizadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
