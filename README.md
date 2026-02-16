# Calculadora ATDD/BDD

![CI](https://github.com/IsaqueBeltrao/atdd-calculadora/actions/workflows/ci.yml/badge.svg)

Projeto profissional de Calculadora usando **Behavior Driven Development (BDD)** com **Cucumber**.

## 🚀 O que foi evoluído

### Estrutura Profissional
```
calculadora-atdd/
├── features/                          # Todos os arquivos BDD
│   ├── calculadora.feature           # Especificações em linguagem natural
│   └── step_definitions/
│       └── calculadora.steps.js       # Implementação dos steps
├── src/
│   └── calculadora.js                # Lógica de negócio
├── cucumber.js                       # Configuração do Cucumber
├── package.json                      # Dependências do projeto
└── README.md
```

### Do que saiu (forma artesanal)
- ❌ `acceptance.js` customizado
- ❌ `step.js` com parser manual
- ❌ Sem suporte a múltiplos cenários escalável

### Para que entrou (forma profissional)
- ✅ **@cucumber/cucumber** - Framework BDD real
- ✅ **Arquivos .feature** em português com sintaxe Gherkin
- ✅ **Step Definitions** com hooks e expressões regulares
- ✅ **Classe Calculadora** bem estruturada
- ✅ **Múltiplos cenários** testando diferentes operações
- ✅ **Tratamento de erros** (divisão por zero)

## 🧪 Como rodas os testes

```bash
npm test
```

Resultado esperado:
```
6 scenarios (6 passed)
18 steps (18 passed)
```

## Nota sobre Gherkin (pt)

- Ao escrever features em Português, use as palavras-chave Gherkin corretas em pt.
- Por exemplo, o correto para outlines de cenários (Scenario Outline) em pt é "Esquema do Cenário:" —
  usar a ordem invertida "Cenário esquema:" provoca erro de parse do Cucumber.
- Corrigi esse problema em [features/calculadora-avancada.feature](features/calculadora-avancada.feature).


## 📚 Entendendo BDD

### O que é BDD (Behavior Driven Development)?

BDD é uma metodologia que coloca o **comportamento do sistema** no centro. Funciona em 3 camadas:

1. **Feature (Negócio)** - `.feature` - Escrito em Gherkin (linguagem natural)
2. **Step Definitions (Implementação)** - `.steps.js` - Conecta a feature com o código
3. **Implementation (Código)** - `src/` - Lógica real do sistema

### Estrutura Gherkin

```gherkin
Funcionalidade: Descrição do que o sistema faz
  Como um usuário
  Quero usar a feature
  Para alcançar um objetivo

  Contexto:
    Dado que tenha pré-condições

  Cenário: Descrição do caso de uso
    Quando eu faço algo
    Então o resultado é esperado
```

### Os 3 Níveis de BDD

| Nível | Quem | Ferramenta | Linguagem |
|-------|------|-----------|-----------|
| **Behavior** | Product Owner/Analista | Gherkin | `.feature` |
| **Integration** | QA/Dev | Cucumber | Step Definitions |
| **Unit** | Developer | Jest/Mocha | Testes unitários |

## 🎯 Próximos Passos para Escalabilizar

### 1. Adicione mais features
- Criar arquivo `calculadora-avancada.feature` com cenários de logs, histórico, etc.

### 2. Use Data Tables
```gherkin
Cenário: Validar várias operações
  Quando eu realizo as seguintes operações:
    | operacao    | numero1 | numero2 | resultado |
    | soma        | 10      | 20      | 30        |
    | subtracao   | 30      | 20      | 10        |
```

### 3. Use Outlines de cenário
```gherkin
Cenário esquema: Somar números
  Quando eu somo <num1> e <num2>
  Então o resultado deve ser <resultado>

  Exemplos:
    | num1 | num2 | resultado |
    | 10   | 20   | 30        |
    | -5   | 5    | 0         |
```

### 4. Integre com CI/CD
- GitHub Actions
- GitLab CI
- Jenkins

### 5. Gere relatórios
```bash
# Já está configurado no cucumber.js
# Acesse cucumber-report.html após rodar npm test
```

### 6. Use bibliotecas de assertion
```bash
npm install chai
```

### 7. Teste integração com API/BD
- Adicione testes de integração
- Mock de serviços externos

## 📖 Boas Práticas BDD

✅ **DOs:**
- Escreva cenários do ponto de vista do usuário
- Use names descritivos e claros
- 1 comportamento = 1 cenário
- Use Contexto para pré-condições repetidas
- Mantenha steps simples e reutilizáveis

❌ **DONTs:**
- Não escreva testes técnicos em .feature
- Não misture múltiplas ações em um Quando
- Não use "E" excessivamente (quebra em passos)
- Não deixe steps muito genéricos
- Não testar detalhes de implementação

## 🔗 Recursos Úteis

- [Cucumber Official Docs](https://cucumber.io/docs/cucumber/)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [BDD Best Practices](https://cucumber.io/docs/bdd/)

---

**Status:** ✈️ Pronto para produção e escalabilização!
