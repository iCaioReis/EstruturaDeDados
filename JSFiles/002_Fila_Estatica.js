class FilaDinamica {
  constructor() {
    this.container = []
  }

  //Enfilerar elemento passado como parâmetro na fila
  enfileirar(elemento) {
    this.container.push(elemento);
    return `Elemento "${elemento} enfileirado com sucesso!"`;
  }

  desenfileirar() {
    if (this.estaVazia()) {
      return ("A Pilha está vazia!");
    } else {
      let elementoRemovido = this.espiar()
      this.container.shift();
      return (`Elemento ${elementoRemovido} desenfileirado com sucesso!`);
    }
  }

  //Retorna o próximo elemento a ser desenfileirado, ou seja, o na primeira posição da fila
  espiar() {
    if (this.estaVazia()) {
      return ("A Pilha está vazia!");
    } else {
      return this.container[0];
    }
  }

  //Métodos Auxiliares
  estaVazia() {
    return this.container.length === 0;
  }
  imprimir() {
    return (this.container);
  }
}

let fila = new FilaDinamica();

console.log(fila.enfileirar(12))
console.log(fila.enfileirar(0))
console.log(fila.enfileirar(5))
console.log(fila.enfileirar(1))
console.log(fila.imprimir())
console.log(fila.desenfileirar())
console.log(fila.imprimir())
