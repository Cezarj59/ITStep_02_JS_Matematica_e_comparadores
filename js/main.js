function mostrar(conteudo) {
    document.write(conteudo + "<br/>");
}

let nomeAluno, nota1, nota2, nota3, notaSurpresa, inicio, fim, media;

nomeAluno = prompt("Digite o Nome do Aluno.");
mostrar(nomeAluno);

nota1 = Number(prompt("Digite a 1º nota."));
mostrar("1° nota = " + nota1);
nota2 = Number(prompt("Digite a 2º nota."));
mostrar("2° nota = " + nota2);
nota3 = Number(prompt("Digite a 3º nota."));
mostrar("3° nota = " + nota3);

inicio = 5;
fim = 11;

notaSurpresa = Math.random() * (fim - inicio) + inicio;
mostrar("Nota Surpresa = " + notaSurpresa.toFixed(1));

media = (nota1 + nota2 + nota3 + notaSurpresa) / 4;
mostrar("Média do aluno " + nomeAluno + " é = " + media.toFixed(1));