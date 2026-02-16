class Calculadora {
  constructor() {
    this.resultado = 0;
    this.erro = null;
  }

  soma(a, b) {
    this.erro = null;
    this.resultado = a + b;
    return this.resultado;
  }

  subtracao(a, b) {
    this.erro = null;
    this.resultado = a - b;
    return this.resultado;
  }

  multiplicacao(a, b) {
    this.erro = null;
    this.resultado = a * b;
    return this.resultado;
  }

  divisao(a, b) {
    this.erro = null;
    if (b === 0) {
      this.erro = "Não é possível dividir por zero";
      throw new Error(this.erro);
    }
    this.resultado = a / b;
    return this.resultado;
  }

  obterResultado() {
    return this.resultado;
  }

  obterErro() {
    return this.erro;
  }
}

module.exports = Calculadora;
