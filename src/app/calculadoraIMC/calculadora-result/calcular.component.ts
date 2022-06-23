import { Component } from "@angular/core";

@Component({
  selector: "calculadora-resultado",
  templateUrl: "./calcular.component.html",
  styleUrls: ["./calcular.component.css"]

})

export class CalcularImcComponent{
    peso! : number;
    altura! : number;
    imc! : number;

    constructor(){

    }

    calcularImc (): number {

      let imc = 0;
      let peso = this.peso;
      let altura = this.altura;

      this.imc = peso / (altura ** 2);
      alert(this.imc);

      return this.imc;

    }

  }
