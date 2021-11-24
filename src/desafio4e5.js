"use strict";
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //Criar metodo precoComDesconto
    //Quais os parametros e o retorno
    //Alterar o metodo resumo para mostrar com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
}
const produto1 = new Produto('Livro', 4.20);
const produto2 = new Produto('Lapis', 18.80, 0.25);
//# sourceMappingURL=desafio4e5.js.map