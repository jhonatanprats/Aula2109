// let nome = prompt("Digite aqui seu nome");

// console.log(`O nome digitado foi ${nome}`);

// alert(`Olá! Seja bem vindo, ${nome} !!!`);

let entrada = (prompt("Digite um número aqui': "));

if(entrada.trim()){
    let numero = Number(entrada);
    if(numero > 15){
    console.log("Numero maior que 15.");
 }
    else if(numero < 15){
    console.log("Numero menor que 15.");
 }
    else if (numero === 15){
    console.log("Numero igual a 15.");
 }
    else {
    console.log("Valor inválido."); 
 }
}
else {
    console.log("Nenhum valor digitado.");
}