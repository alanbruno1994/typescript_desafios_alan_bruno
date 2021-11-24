"use strict";
// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
let funcionario = {
    supervisores: ['Bruno', 'Ricardo'],
    baterPonto: function (hora) {
        return hora <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(5));
//# sourceMappingURL=desafio1.js.map