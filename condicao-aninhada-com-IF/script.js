let renda = Number(prompt("digite sua renda"));

if (!isNaN(renda)){
    if (renda >= 3000) {
        let nomelimpo = prompt("Nome limpo? (sim ou nao)");
        if (nomelimpo === "sim"){
            alert("Financiamento aprovado");
        } else {
            alert("Nome negativado");
        }
    } else {
        alert("Renda insuficiente");
    }
}