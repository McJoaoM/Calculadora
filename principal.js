function verificarAprovacao() {
    // Obter a nota do aluno
    var nota = parseFloat(prompt("Insira a nota do aluno:"));

    // Verificar se a nota é válida
    if (isNaN(nota)) {
        console.log("Por favor, insira uma nota válida.");
        return;
    }

    // Definir a nota de corte
    var notaDeCorte = 6.0;

    // Verificar se o aluno foi aprovado ou reprovado
    if (nota >= notaDeCorte) {
        console.log("O aluno foi aprovado!");
    } else {
        console.log("O aluno foi reprovado.");
    }
}

// Chamar a função para verificar a aprovação
verificarAprovacao();

