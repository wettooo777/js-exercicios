let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.0;

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média final do aluno é: " + media.toFixed(1));

if (media >= 7.0) {
    console.log("Situação: Aprovado");
} else if (media >= 5.0 && media < 7.0) {
    console.log("Situação: Se Liga");
} else {
    console.log("Situação: Reprovado");
}