import { TabelaImcModule } from './tabelaImc/tabelaImc.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalculadoraImcModule } from './calculadoraIMC/calculadoraImc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TabelaImcModule,
    CalculadoraImcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
