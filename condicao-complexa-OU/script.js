let idade = Number(prompt("insira sua idade"));
let estudante = prompt("É estudante?(sim ou nao)");
let professor = prompt("É professor?(sim ou nao)");

if (idade >= 60 || estudante === "sim" || professor === "sim") {
    alert("Tem direito a desconto");
}  else {
    alert("Não tem desconto");
}