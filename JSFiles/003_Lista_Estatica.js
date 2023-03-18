class lista {

	constructor(tamanho) {

		// definindo tamanho máximo caso o usuário não envie um valor que não seja um número
		// ou se esse número não estiver entre 1 - 10
		if (isNaN(tamanho) || tamanho <= 0 || tamanho > 10) {
			console.log("Valor iválido, a pilha foi definida por padrão com tamanho 10");
			tamanho = 10;
		}

		this.quantidade = 0; //Verificar o uso
		this.ponteiroInicio = -1;
		this.ponteiroFim = -1;
		this.dados = [];
		this.tamanhoMaximo = tamanho;
	}

	//anexa ao final do array um novo dado
	anexar(elemento) {
		if (!this.estaCheia()) {
			this.quantidade++;
			this.ponteiroFim++;

			this.dados[this.ponteiroFim] = elemento;
			return (`Elemento ${elemento} anexado com sucesso!`)
		} else {
			return("Lista Cheia!");
		}
	}

	//insere um dado no índice indicado pelo usuário
	inserir(posicao, elemento) { //Revisar essa poha
		if (!this.estaCheia()) {
			//verificando se o índice informado é valido
			if ((posicao >= 0) && (posicao <= this.quantidade)) {
				for (let i = this.dados.length ; i != 0 ; i--) {
					let atual = i;
					let anterior = i - 1;
					this.dados[atual] = this.dados[anterior];
				}
				this.dados[posicao] = elemento;
				this.quantidade++;
				this.ponteiroFim++;

				return (`Elemento ${elemento} inserido na posição ${posicao} com sucesso!`)
			} else {
				return("Indice Inválido!");
			}
		} else {
			return("Lista Cheia!");
		}
	}

	//retorna o dado na posição informada
	selecionarUm(posicao) {
		if (!this.estaVazia()) {
			//verificando se o índice é válido 
			if ((posicao >= 0) && (posicao < this.quantidade)) {
				return (this.dados[posicao])
			} else {
				return("Indice Invalido!");
			}
		} else {
			return("Lista Vazia!");
		}
	}

	//Sobrescreve o dado na posição informada
	atualizar(posicao, novoElemento) {
		if (!this.estaVazia()) {
			//verificando se a posição é válida
			if ((posicao >= 0) && (posicao < this.quantidade)) {
				this.dados[posicao] = novoElemento;
			} else {
				return("Indice Inválido!");
			}
		} else {
			return("Lista Vazia!");
		}
	}

	//remove o elemento de uma posicao logica informada
	apagar(posicao) {
		if (!this.estaVazia()) {
			//verificar se a posicao informada é valida
			if ((posicao >= 0) && (posicao < this.quantidade)) {
				for (let i = 0; i != this.ponteiroFim ; i++) {
					let atual = i;
					let proximo = i + 1;
					this.dados[atual] = this.dados[proximo];
				}
				this.quantidade--;
				this.ponteiroFim--;
				this.dados.pop()

				return (`Elemento na posição ${posicao} apagado com sucesso!`)
			} else {
				return("Indice Inválido!");
			}
		} else {
			return("Lista Vazia!");
		}
	}

	//métodos auxiliares
	estaCheia() {
		return (this.tamanhoMaximo === this.quantidade);
	}
	estaVazia() {
		return (this.quantidade == 0);
	}
	imprimir() {
		return (this.dados);
	}
}

		let listaEstatica = new lista(5);
		console.log (listaEstatica.anexar("A"))
		console.log(listaEstatica.anexar("B"))
		console.log(listaEstatica.anexar("c"))
		console.log(listaEstatica.anexar("d"))
		console.log(listaEstatica.imprimir())

		console.log(listaEstatica.anexar("j"))
		console.log(listaEstatica.anexar("e"))
		console.log(listaEstatica.imprimir())

		console.log(listaEstatica.apagar(0))
		console.log(listaEstatica.imprimir())

		console.log(listaEstatica.inserir(0,"EE"))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.atualizar(1, "certo"))
		console.log(listaEstatica.anexar("d"))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.selecionarUm(0));