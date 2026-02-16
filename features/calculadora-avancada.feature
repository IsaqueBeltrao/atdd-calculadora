# language: pt
Funcionalidade: Validações da Calculadora
  Como um desenvolvedor
  Quero que a calculadora valide operações
  Para garantir resultados precisos e seguros

  Contexto:
    Dado que eu tenha acesso à calculadora

  Esquema do Cenário: Somar múltiplos pares de números
    Quando eu somo <num1> e <num2>
    Então o resultado deve ser <resultado>

    Exemplos:
      | num1  | num2 | resultado |
      | 10    | 20   | 30        |
      | -5    | 5    | 0         |
      | 100   | 200  | 300       |
      | -10   | -20  | -30       |
      | 0     | 0    | 0         |

  Esquema do Cenário: Multiplicar números variados
    Quando eu multiplico <num1> por <num2>
    Então o resultado deve ser <resultado>

    Exemplos:
      | num1 | num2 | resultado |
      | 2    | 3    | 6         |
      | -2   | 3    | -6        |
      | 0    | 100  | 0         |
      | 5    | 5    | 25        |
