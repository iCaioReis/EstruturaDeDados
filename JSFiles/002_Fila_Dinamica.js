class FilaDinamica {
    constructor() {
        this.container = []; // vetor que terá os elementos da pilha

      }

    enfileirar(elemento){
       /* if (this.estaCheia()) {
            return ("A Pilha está cheia!");
          }else {*/
            this.container.push(elemento);
            return (`Elemento "${elemento}" adcionado com sucesso!`)
         // }
    }
	desenfileirar() {
        if (this.estaVazia()) {
            return("A Pilha está vazia!");
          }else{
            let elemntoRemovido = this.espiar()
            this.container.shift();
            return (`Elemento ${elemntoRemovido} removido com sucesso!`);
          }
    }
    
	espiar(){
        if (this.estaVazia()) {
            return("A Pilha está vazia!");
          }else {
            return this.container[this.container[1]];
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