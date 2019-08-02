let filme = document.querySelector ("ul"); 
let corpo = document.querySelector ("body");


let filmes = [
    {nome:"Frozen"},
    {nome:"Alladin"},
    {nome:"Olga"},
    {nome:"Moana"},
]


let imprimirNomes = (cor) =>{
    for(let filmes of filme){
    lista.innerHTML += `<li>${filmes.nome}</li>`
    }
    corpo.style.backgroundColor = cor;
}
 
let adicionarCor = (callback) => {
    let escolherUmacor = prompt("Escolha uma cor EM INGLES");
     setTimeout (() => {
         filmes.push({nome:"A freira"});
         callback(escolherUmacor);
     } , 3000);




 adicionarCor(imprimirNomes);
 
 
 
 
 
 
//  function abrirAlert(nome){
//     alert(nome);

// }

//  function receberNome(callbackNome){
//     let nome = "Karen"     
//     callbackNome(nome); }

// receberNome(abrirAlert);
