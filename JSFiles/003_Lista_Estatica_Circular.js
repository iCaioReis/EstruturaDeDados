class lista {

	constructor(tamanho) {

		// definindo tamanho máximo caso o usuário não envie um valor que não seja um número
		// ou se esse número não estiver entre 1 - 10
		if (isNaN(tamanho) || tamanho <= 0 || tamanho > 10) {
			console.log("Valor iválido, a pilha foi definida por padrão com tamanho 10");
			tamanho = 10;
		}

		this.quantidade = 0;
		this.ponteiroInicio = -1;
		this.ponteiroFim = -1;


		this.dados = [];
		this.tamanho = tamanho; // iniciar um array que conterá os valores da pilha
		this.container = []; // vetor que terá os elementos da pilha
	}

	//anexa(insere ao final da lista) a lista o novo dado fornecido
	anexar(elemento) {
		if (!this.estaCheia()) {
			//patch para que a fila funcione de forma circular
			if (this.ponteiroFim == this.dados.length - 1) {
				this.ponteiroFim = -1;
			}
			this.quantidade++;
			//fim do patch
			this.ponteiroFim++;
			this.dados[this.ponteiroFim] = elemento;
		} else {
			return("Lista Cheia!");
		}
	}

	//insere o novo dado fornecido na lista, numa posicao logica informada 
	inserir(posicao, elemento) {
		if (!this.estaCheia()) {
			//verificar se a posicao informada é valida
			if ((posicao >= 0) && (posicao <= quantidade)) {
				//mapeamento DE endereçamento lógico (informado pelo usuário)
				//PARA endereçamento físico (onde o elemento está no array
				//Instrução comum a maioria dos métodos
				let pontoManipulacao = ((this.ponteiroInicio + 1) + posicao) % this.dados.length;
				for (i = (this.ponteiroFim + 1) % this.dados.length; i != pontoManipulacao; i--) {
					let atual = i;
					let anterior = i - 1;
					//patch (correção) para que a lista funcione circular
					if (i == 0) {
						i = this.dados.length;
						//corrijo o anterior para não ser -1, 
						//uma vez que o atual = 0
						anterior = i - 1;
					}
					//fim do patch
					this.dados[atual] = this.dados[anterior];
				}
				this.dados[pontoManipulacao] = elemento;
				this.quantidade++;
				//patch (correção) para que a lista funcione circular
				if (this.ponteiroFim == this.dados.length - 1) {
					this.ponteiroFim = -1;
				}
				this.ponteiroFim++;
				//fim do patch
			} else {
				return("Indice Inválido");
			}
		} else {
			return("Lista Cheia!");
		}
	}

	//retorna o elemento que está numa posicao logica informada
	selecionarUm(posicao) {
		let elementoTemp
		if (!this.estaVazia()) {
			//verificando se o índice/posição é válido 
			if ((posicao >= 0) && (posicao < this.quantidade)) {
				//mapeamento DE endereçamento lógico (informado pelo usuário)
				//PARA endereçamento físico (onde o elemento está no array
				//Instrução comum a maioria dos métodos
				let pontoManipulacao = ((this.ponteiroInicio + 1) + posicao) % this.dados.length;
				elementoTemp = this.dados[pontoManipulacao];
			} else {
				return("Indice Invalido!");
			}
		} else {
			return("Lista Vazia!");
		}
		return elementoTemp;
	}

	//substitui o elemento de uma posicao logica informada,
	//pelo novo elemento fornecido
	atualizar(posicao, novoElemento) {
		if (!this.estaVazia()) {
			//verificando se o índice/posição é válido
			if ((posicao >= 0) && (posicao < quantidade)) {
				//mapeamento DE endereçamento lógico (informado pelo usuário)
				//PARA endereçamento físico (onde o elemento está no array
				//Instrução comum a maioria dos métodos
				let pontoManipulacao = ((this.ponteiroInicio + 1) + posicao) % this.dados.length;
				this.dados[pontoManipulacao] = novoElemento;
			} else {
				return("Indice Inválido!");
			}
		} else {
			return("Lista Vazia!");
		}
	}

	//remove o elemento de uma posicao logica informada
	apagar(posicao) {
		let elementoTemp
		if (!this.estaVazia()) {
			//verificar se a posicao informada é valida
			if ((posicao >= 0) && (posicao < this.quantidade)) {
				//mapeamento DE endereçamento lógico (informado pelo usuário)
				//PARA endereçamento físico (onde o elemento está no array
				//Instrução comum a maioria dos métodos
				let pontoManipulacao = ((this.ponteiroInicio + 1) + posicao) % this.dados.length;
				elementoTemp = this.dados[pontoManipulacao];
				for (i = pontoManipulacao; i != this.ponteiroFim ; i++) {
					let atual = i;
					let proximo = i + 1;
					//patch (correção) para que a lista funcione circular
					if (i == this.dados.length - 1) {
						//corrijo o proximo para não ser dados.length, 
						//uma vez que o atual é dados.length-1
						proximo = 0;
						i = -1;
					}
					//fim do patch
					this.dados[atual] = this.dados[proximo];
				}
				this.quantidade--;
				this.ponteiroFim--;
				//patch (correção) para que a lista funcione circular
				if (this.ponteiroFim == -1) {
					this.ponteiroFim = this.dados.length - 1;
				}
				//fim do patch
			} else {
				return("Indice Inválido!");
			}
		} else {
			return("Lista Vazia!");
		}
		return elementoTemp;
	}

	//métodos auxiliares
	estaCheia() {
		return (this.tamanho === this.container.length);
	}
	estaVazia() {
		return (this.quantidade == 0);
	}
	imprimir() {
		return (this.container);
	}
}

		let listaEstatica = new lista(5);
		console.log (listaEstatica.anexar("A"))
		console.log(listaEstatica.imprimir())
		console.log(listaEstatica.anexar("B"))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.inserir(2,"C"))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.anexar("D"))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.apagar(0))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.inserir(0,"E"))
		console.log(listaEstatica.imprimir());
		console.log(listaEstatica.selecionarUm(1));
		console.log(listaEstatica.atualizar(1,"E"))
		console.log(listaEstatica.imprimir());