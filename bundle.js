"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mostrar =
/*#__PURE__*/
function () {
  function Mostrar() {
    _classCallCheck(this, Mostrar);

    this.data = [];
  }

  _createClass(Mostrar, [{
    key: "add",
    value: function add(dado) {
      this.data.push(dado);
      console.log(this.data);
    }
  }]);

  return Mostrar;
}();

var TodoList =
/*#__PURE__*/
function (_Mostrar) {
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'usuario';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  _inherits(TodoList, _Mostrar);

  return TodoList;
}(Mostrar);

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      console.log(a + b);
    }
  }]);

  return Matematica;
}();

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo');
  MinhaLista.mostraUsuario();
};

document.getElementById('soma').onclick = function () {
  Matematica.soma(5, 8);
}; //erro: const não pode ser alterada

/*const a = 5;
a=3;*/
//mas pode ser multada


var pessoa = {
  nome: 'Luiz',
  idade: 33
};
pessoa.idade = 34;
console.log(pessoa); //variaveis de escopo 'let'

function teste(x) {
  var y = 2;

  if (x > 5) {
    y = 4;
    console.log(x, y);
  }
}

teste(12);
/*erro y é variavel local, só é vista na function
console.log(y);*/

var vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var newVetor = vetor.map(function (numero) {
  if (numero % 2 == 0) {
    return 'par';
  } else {
    return 'impar';
  }
});
console.log(newVetor);
var vetor2 = vetor.map(function (numero, index) {
  return 'índice ' + index + ' => ' + numero;
});
console.log(vetor2);
var soma = vetor.reduce(function (total, next) {
  return total + next;
});
console.log(soma);
var pares = vetor.filter(function (numero) {
  return numero % 2 == 0;
  /*filter retorna true ou false*/
});
console.log(pares);
var busca = newVetor.find(function (numero) {
  return numero == 'par';
  /*filter também retorna true ou false*/
});
console.log(busca);
/*arrow functions*/

var dobro = vetor.map(function (numero) {
  return 2 * numero;
});
console.log(dobro);
/*é o mesmo que...*/

var dobro2 = vetor.map(function (numero) {
  return 2 * numero;
});
console.log(dobro2);
/*valor padrão nos parâmetros*/

function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
}

console.log(soma2(5));
/*ou*/

var soma3 = function soma3() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma3(5));
/*Desestruturação:*/

var usuario = {
  nome: 'Luiz',
  idade: 33,
  endereco: {
    cidade: 'Parnamirim',
    estado: 'RN'
  }
};
var nome1 = usuario.nome;
var cidade1 = usuario.endereco.cidade;
var estado1 = usuario.endereco.estado;
console.log("Meu nome \xE9 ".concat(nome1, ", moro em ").concat(cidade1, " / ").concat(estado1));
/*ou*/

var idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(idade);
console.log(cidade);
console.log(estado);

function mostrarDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome, idade, cidade, estado);
}

mostrarDados(usuario);
/*Short Syntax*/

var user1 = {
  nome: 'outro usuário',
  cidade1: cidade1,
  estado1: estado1
};
console.log(user1);
/*REST (...) (Pega o 'resto das propriedades')*/

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(c);
/*SPREAD (Repassa informações de um objeto/array para outra estrutura de dados)*/

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log(arr3);

var usuario2 = _objectSpread({}, usuario, {
  nome: 'mudei o nome'
});

console.log(usuario2);
