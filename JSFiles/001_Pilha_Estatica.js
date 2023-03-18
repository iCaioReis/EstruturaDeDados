class PilhaEstatica {
  constructor(tamanho) {
    // definindo tamanho máximo caso o usuário não envie um valor que não seja um número
    // ou se esse número não estiver entre 1 - 10
    if (isNaN(tamanho) || tamanho <= 0 || tamanho > 10) {
      console.log("Valor iválido, a pilha foi definida por padrão com tamanho 10");
      tamanho = 10;
    }

    this.tamanho = tamanho; // iniciar um array que conterá os valores da pilha
    this.container = []; // vetor que terá os elementos da pilha
  }

  //Empilhar no topo da pilha o elemento passado como parâmetro
  empilhar(elemento) {
    if (this.estaCheia()) {
      return ("A Pilha está cheia!");
    } else {
      this.container.push(elemento);
      return (`Elemento "${elemento}" adcionado com sucesso!`)
    }
  }

  //Desempilhar elemento no topo da pilha
  desempilhar() {
    if (this.estaVazia()) {
      return ("A Pilha está vazia!");
    } else {
      const elemntoRemovido = this.topo()
      this.container.pop();
      return (`Elemento "${elemntoRemovido}" removido com sucesso!`);
    }
  }

  //Retorna o elemento no topo da pilha
  topo() {
    if (this.estaVazia()) {
      return ("A Pilha está vazia!");
    } else {
      return this.container[this.container.length - 1];
    }
  }

  //Métodos Auxiliares
  estaCheia() {
    return this.container.length >= this.tamanho;
  }
  estaVazia() {
    return this.container.length === 0;
  }
  imprimir() {
    return (this.container);
  }
}

//Teste
let pilha = new PilhaEstatica(5);

console.log(pilha.empilhar(1))
console.log(pilha.empilhar(20))
console.log(pilha.empilhar(2))
console.log(pilha.topo())
console.log(pilha.imprimir())
console.log(pilha.desempilhar())
console.log(pilha.imprimir())