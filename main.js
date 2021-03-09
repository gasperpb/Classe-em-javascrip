//01) Escreva uma classe cujos objetos representam alunos matriculados 
//em uma disciplina. Cada objeto dessa classe deve guardar os seguintes dados 
//do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes 
//métodos para esta classe:


class Alunos {
    constructor(matricula, nome, n1, n2, trabalho) {

        matricula = this.matricula
        nome = this.nome
        n1 = this.n1
        n2 = this.n2
        trabalho = this.trabalho
    }
}


//function media() {
return ((n1 + n2) * 2.5 + trabalho * 2) / 7;
}

function aFinal() {
    media = media();
    if (media < 2.5 || media >= 5)
        return 0;

    return 10 - media;
}


//Para deixar o resultado para apenas duas casas decimais:
// public static double round(double value, int places) {
//     if (places < 0) throw new IllegalArgumentException();

//     long factor = (long) Math.pow(10, places);
//     value = value * factor;
//     long tmp = Math.round(value);
//     return (double) tmp / factor;
// }

//Utilização
Aluno eu = new Aluno(123, "Léo", 8, 1, 5);
System.out.println("A média é: " + round(eu.media(), 2) + " e é necessário mais " + round(eu.aFinal(), 2) + " para ser aprovado.");