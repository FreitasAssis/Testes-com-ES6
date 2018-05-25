class Mostrar {
    constructor() {
        this.data = [];
    }

    add(dado) {
        this.data.push(dado);
        console.log(this.data);
    }
}

class TodoList extends Mostrar {
    constructor() {
        super();
        this.usuario = 'usuario';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b) {
        console.log(a+b);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo');
    MinhaLista.mostraUsuario();
}
document.getElementById('soma').onclick = function () {
    Matematica.soma(5, 8);
}

//erro: const não pode ser alterada
/*const a = 5;
a=3;*/

//mas pode ser multada
const pessoa = {
    nome: 'Luiz',
    idade: 33
};
pessoa.idade=34;
console.log(pessoa);

//variaveis de escopo 'let'
function teste(x) {
    let y = 2;
    if (x>5) {
        y=4;
        console.log(x,y);
    }
}
teste(12);
/*erro y é variavel local, só é vista na function
console.log(y);*/


