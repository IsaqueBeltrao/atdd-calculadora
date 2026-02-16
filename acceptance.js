function acceptance(descricao, func) {
    try {
        func();
        console.log(`Sucesso: ${descricao}`);
    } catch (error) {
        console.error(`Falha: ${descricao}`);
        console.error(error.message);
    }
}

module.exports = acceptance;