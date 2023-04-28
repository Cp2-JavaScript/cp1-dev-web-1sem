alert("Vamos conhecer sobre Vinho!")
let pontos = 0;

// perguntas
let resposta1 = prompt("Qual é a principal uva utilizada na produção de vinho tinto na região de Bordeaux?");
if(resposta1.toLowerCase() === "cabernet sauvignon") {
    pontos++;
}

let resposta2 = prompt("Qual é a uva utilizada na produção do vinho do porto?");
if(resposta2.toLowerCase() === "touriga nacional") {
    pontos++;
}

let resposta3 = prompt("Qual é a principal uva utilizada na produção do vinho Chianti?");
if(resposta3.toLowerCase() === "sangiovese") {
    pontos++;
}

let resposta4 = prompt("Qual é a uva utilizada na produção do vinho branco Riesling?");
if(resposta4.toLowerCase() === "riesling") {
    pontos++;
}

let resposta5 = prompt("Qual é a uva utilizada na produção do vinho branco Chardonnay?");
if(resposta5.toLowerCase() === "chardonnay") {
    pontos++;
}

let resposta6 = prompt("Qual é o nome do vinho tinto produzido na região de Bordeaux?");
if(resposta6.toLowerCase() === "bordeaux") {
    pontos++;
}

let resposta7 = prompt("Qual é o tipo de vinho produzido na região da Toscana, na Itália?");
if(resposta7.toLowerCase() === "chianti") {
    pontos++;
}

let resposta8 = prompt("Qual é a uva utilizada na produção do vinho branco Sauvignon Blanc?");
if(resposta8.toLowerCase() === "sauvignon blanc") {
    pontos++;
}

let resposta9 = prompt("Qual é a uva utilizada na produção do vinho tinto Syrah?");
if(resposta9.toLowerCase() === "syrah") {
    pontos++;
}

let resposta10 = prompt("Qual é o país que produz o vinho Sauvignon Blanc?");
if(resposta10.toLowerCase() === "nova zelândia") {
    pontos++;
}

// exibe o resultado
let resultado = document.getElementById("resultado");
resultado.innerHTML = `Você acertou ${pontos} de 10 perguntas sobre vinho.`
