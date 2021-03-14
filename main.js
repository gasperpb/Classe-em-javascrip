//01) Escreva uma classe cujos objetos representam alunos matriculados 
//em uma disciplina. Cada objeto dessa classe deve guardar os seguintes dados 
//do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes 
//métodos para esta classe:


class Alunos {

    constructor(matricula, nome, n1, n2, trabalho) {
        this.matricula = matricula
        this.nome = nome
        this.n1 = n1
        this.n2 = n2
        this.trabalho = trabalho
    }
    get media() {
        return this.calcularMedia()
    }
    calcularMedia() {
        return ((this.n1 + this.n2) * 2.5 + this.trabalho * 2) / 7;
    }
    get final() {
        if (this.media < 2.5 || this.media >= 5)
            return 0
        return 10 - this.media
    }
}
let achilles = new Alunos(123, "Achilles", 3, 3, 5);

console.log(achilles.media + "  final  " + achilles.final)