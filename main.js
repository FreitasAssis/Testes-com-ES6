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

/*Desestruturação:*/

const usuario = {
    nome: 'Luiz',
    idade: 33,
    endereco: {
        cidade: 'Parnamirim',
        estado: 'RN',
    },
};

const nome1 = usuario.nome;
const cidade1 = usuario.endereco.cidade;
const estado1 = usuario.endereco.estado;

console.log(`Meu nome é ${nome1}, moro em ${cidade1} / ${estado1}`);

/*ou*/

const { idade, endereco: { cidade, estado } } = usuario;

console.log(idade);
console.log(cidade);
console.log(estado);

function mostrarDados({ nome, idade, endereco: { cidade, estado } }) {
    console.log(nome, idade, cidade, estado);
}
mostrarDados(usuario);

/*Short Syntax*/

const user1 = {
    nome: 'outro usuário',
    cidade1,
    estado1,
};
console.log(user1);

/*REST (...) (Pega o 'resto das propriedades')*/

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [ a, b, ...c ] = arr;
console.log(a);
console.log(c);

/*SPREAD (Repassa informações de um objeto/array para outra estrutura de dados)*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const usuario2 = { ...usuario, nome: 'mudei o nome' };
console.log(usuario2);