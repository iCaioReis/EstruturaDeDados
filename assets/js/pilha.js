let form = document.querySelector("form");
let vetorElementos = []
let tamanhoMax = 5

function empilhar() {
    if (vetorElementos.length == tamanhoMax){
        alert ("Pilha Cheia!")
    }else {
        let elemento = prompt("digite um elemento:");
        vetorElementos.push(elemento);
        alert(`elemento ${elemento} empilhado!`);

        let tr = tbody.insertRow(0)
        let td = tr.insertCell()

        td.innerText = vetorElementos[vetorElementos.length - 1]
    }
    
}

function desempilhar() {
    vetorElementos.pop();
    document.getElementsByTagName("tr")[0].remove()
}