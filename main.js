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

const vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newVetor = vetor.map(
    function (numero) {
        if (numero % 2 == 0) {
            return 'par';
        }
        else { return 'impar' }
    }
);
console.log(newVetor);


const vetor2 = vetor.map(
    function (numero, index) {
        return 'índice ' + index + ' => ' + numero;
    }
);
console.log(vetor2);

const soma = vetor.reduce(
    function (total, next) {
        return total + next;
    }
);
console.log(soma);

const pares = vetor.filter(
    function (numero) {
        return numero % 2 ==0;
        /*filter retorna true ou false*/
    }
);
console.log(pares);

const busca = newVetor.find(
    function (numero) {
        return numero == 'par';
        /*filter também retorna true ou false*/
    }
);
console.log(busca);

/*arrow functions*/
const dobro = vetor.map(numero => 2 * numero);
console.log(dobro);

/*é o mesmo que...*/
const dobro2 = vetor.map(
    function (numero) { return 2 * numero }
);
console.log(dobro2);

/*valor padrão nos parâmetros*/
function soma2(a=1, b=2) {
    return a + b
}
console.log(soma2(5));

/*ou*/
const soma3 = (a=1, b=2) => a + b;
console.log(soma3(5));