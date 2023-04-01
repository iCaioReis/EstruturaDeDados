let form = document.querySelector("form");
let vetorElementos = []
let tamanhoMax = 5

function enfileirar() {
    if (vetorElementos.length == tamanhoMax){
        alert ("Pilha Cheia!")
    }else {
        let elemento = prompt("digite um elemento:");
        vetorElementos.push(elemento);
        alert(`elemento ${elemento} enfileirado!`);

        let tr = tbody.insertRow()
        let td = tr.insertCell()

        td.innerText = vetorElementos[vetorElementos.length - 1]
    }
    
}

function desenfileirar() {
    vetorElementos.shift();
    document.getElementsByTagName("tr")[0].remove()
    console.log(vetorElementos)
}