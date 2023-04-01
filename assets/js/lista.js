let form = document.querySelector("form");
let vetorElementos = []
let tamanhoMax = 5
let ponteiroAtual = 0

function addLista() {
    if (vetorElementos.length == tamanhoMax) {
        alert("Lista Cheia!")
    } else {
        let elemento = prompt("digite um elemento:");
        let posicao = prompt("digite uma posição da lista:");

        if (posicao > 5 || posicao < 0 || posicao > ponteiroAtual) {
            alert("Posição inválida")
        } else if (posicao == ponteiroAtual) {
            vetorElementos.push(elemento);
            alert(`elemento ${elemento} adicionado a lista!`);
            ponteiroAtual++

            let tr = tbody.insertRow(posicao)
            let td = tr.insertCell()

            td.innerText = vetorElementos[posicao]
        } else {
            vetorElementos.splice(posicao, 0, elemento);
            alert(`elemento ${elemento} adicionado a lista!`);
            ponteiroAtual++

            let tr = tbody.insertRow(posicao)
            let td = tr.insertCell()
            td.innerText = vetorElementos[posicao]
        }

        alert(vetorElementos)
    }
}

function removerLista() {
    let posicao = prompt("digite uma posição da lista:");
    if (posicao > 5 || posicao < 0 || posicao > ponteiroAtual) {
        alert("Posição inválida")
    } else {
        vetorElementos.splice(posicao, 1);
        ponteiroAtual--
        document.getElementsByTagName("tr")[posicao].remove()
    }

    alert(vetorElementos)
}