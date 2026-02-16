# language: pt
Funcionalidade: Calculadora Básica
  Como um usuário
  Quero usar uma calculadora
  Para realizar operações matemáticas básicas

  Contexto:
    Dado que eu tenha acesso à calculadora

  Cenário: Somar dois números positivos
    Quando eu somo 10 e 20
    Então o resultado deve ser 30

  Cenário: Somar dois números negativos
    Quando eu somo -5 e -3
    Então o resultado deve ser -8

  Cenário: Subtrair dois números
    Quando eu subtraio 20 de 30
    Então o resultado deve ser 10

  Cenário: Multiplicar dois números
    Quando eu multiplico 6 por 7
    Então o resultado deve ser 42

  Cenário: Dividir dois números
    Quando eu divido 20 por 4
    Então o resultado deve ser 5

  Cenário: Divisão por zero deve gerar erro
    Quando eu divido 10 por 0
    Então deve gerar um erro "Não é possível dividir por zero"
