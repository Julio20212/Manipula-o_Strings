// Atividade 1
//function enviar() {
//const opa = document.getElementById('opa').value;

//if (opa.startsWith("Ola")){
//  alert("Olá mundo");
//  }
// else {
//  alert("A frase não tem ola")
//  }
//
//}


//Atividade 2

//function verificar() {
//const palavra = document.getElementById('palavra').value;

//let terminaComCao = palavra.endsWith("ção");
//console.log(terminaComCao);
//}

//Atividade 3

//function mudaCor() {
//const cor = document.getElementById('caixa');
//cor.style.backgroundColor = "green";
//}

//Atividade 4

//function alternar() {
    //const desaparecer = document.getElementById('desaparecer');
    //if(desaparecer.style.display === "block"){
        //desaparecer.style.display = "none";
    //}
    //else {
       // desaparecer.style.display = "block";
    //}
//}

//Atividade 5
function ativ5() {
    const aumentar = document.getElementById('aumentar');

    let tamanho = aumentar.style.fontSize;

    if (tamanho === ""){
        tamanho = "16px";
    }

    let tamanhoNumero = parseInt(tamanho);
    aumentar.style.fontSize = (tamanhoNumero + 2) + "px";
}
