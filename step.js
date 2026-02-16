const fs = require("fs");
const acceptance = require("./acceptance");
const { soma } = require("./calculadora");

// Lê o arquivo .feature
const feature = fs.readFileSync("./calculadora.feature", "utf16le");

// Divide em linhas
const linhas = feature.split("\n").map(l => l.trim());

let numero1, numero2, esperado;

//interpretação manual do cenário
linhas.forEach(linha => {
    if (linha.includes("somo")) {
        const match = linha.match(/(\d+)\s+e\s+(\d+)/);
        if (match) {
            numero1 = Number(match[1]);
            numero2 = Number(match[2]);
        }
    }

    if (linha.includes("resultado")) {
        const match = linha.match(/ser\s+(\d+)/);
        if (match) {
            esperado = Number(match[1]);
        }
    }
});

//Execução do teste de aceitação
acceptance('O sistema deve permitir somar dois números ', () => {
    const resultado = soma(numero1, numero2);
    if (resultado !== esperado) {
        throw new Error(`Esperado ${esperado}, mas recebeu ${resultado}`);
    }
});