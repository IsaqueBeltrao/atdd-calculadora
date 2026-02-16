const { Given, When, Then, Before } = require('@cucumber/cucumber');
const Calculadora = require('../../src/calculadora');

let calculadora;
let resultadoObtido;
let erroObtido;

Before(function() {
  // Hook que executa antes de cada cenário
  calculadora = new Calculadora();
  resultadoObtido = null;
  erroObtido = null;
});

Given('que eu tenha acesso à calculadora', function() {
  // Step de contexto - prepara o ambiente
  if (!calculadora) {
    calculadora = new Calculadora();
  }
});

When('eu somo {int} e {int}', function(num1, num2) {
  resultadoObtido = calculadora.soma(num1, num2);
});

When('eu subtraio {int} de {int}', function(subtraendo, minuendo) {
  // subtraio X de Y => Y - X
  resultadoObtido = calculadora.subtracao(minuendo, subtraendo);
});

When('eu multiplico {int} por {int}', function(num1, num2) {
  resultadoObtido = calculadora.multiplicacao(num1, num2);
});

When('eu divido {int} por {int}', function(dividendo, divisor) {
  try {
    resultadoObtido = calculadora.divisao(dividendo, divisor);
  } catch (error) {
    erroObtido = error.message;
  }
});

Then('o resultado deve ser {int}', function(resultadoEsperado) {
  if (resultadoObtido !== resultadoEsperado) {
    throw new Error(`Esperado ${resultadoEsperado}, mas obtive ${resultadoObtido}`);
  }
});

Then('deve gerar um erro {string}', function(mensagemErro) {
  if (!erroObtido) {
    throw new Error(`Esperava um erro, mas a operação não gerou nenhum`);
  }
  if (erroObtido !== mensagemErro) {
    throw new Error(`Esperava erro "${mensagemErro}", mas obtive "${erroObtido}"`);
  }
});
