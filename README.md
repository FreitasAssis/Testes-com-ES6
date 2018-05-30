# Testes-com-ES6
### Repositório dos meus arquivos de estudo em ECMAScript.
### Configurações iniciais:

_Obs: Aqui no repositório não está a pasta com os arquivos do Node. Na sequência temos as configurações iniciais do ambiente, para trabalhar com ES6. Os códigos JS estão nos demais arquivos do repositório, em especial, no **main.js**_

```yarn init```

__Instalar as dependencias para trabalhar com a interface de linha de comando do Babel:__

```yarn add @babel/cli```

```yarn add @babel/preset-env```

```yarn add @babel/core```

__Ignorar a pasta do node no controle de versão do git:__
> criar o arquivo **.gitignore** na raiz do projeto
>
> listar a pasta **node_modules/** na primeira linha do arquivo

__Configurar o Babel:__
> criar o arquivo **.babelrc** contendo o código:

```
   {
      "presets": ["@babel/preset-env"]
   }
```
**Criar o arquivo "index.html"**

**Criar "main.js"**

_Dentro de main:_

```alert('Teste');```

_Em package.json, criar a propriedade "scripts", que vai descrever como executar comandos via terminal_

```
"scripts": {
   "dev": "babel ./main.js -o ./bundle.js -w"
}
```

_Feito isso, podemos criar o arquivo bundle.js, que trará o código ES6 traduzido para os navegadores:_

```yarn dev```

_No body do html, inserir o script q chama o bundle:_

```<script src="./bundle.js"></script>```

**Utilizando REST / SPREAD**

```yarn add @babel/plugin-proposal-object-rest-spread```

_Em babelrc:_
```
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
```

_Como as dependências que estão sendo instaladas são apenas para o ambiente de desenvolvimento, alteramos as dependências para_ **devDependencies**

_Instalar as seguintes dependências:_

```yarn add webpack webpack-cli -D```

> O -D é para que seja instalado apenas para o ambiente de desenvolvimento

_Criar o arquivo de configuração do webpack **webpack.config.js** com as seguintes configurações:_

```
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
```
**Instalar o loader:**

```yarn add babel-loader -D```

**Testar o webpack**

_Alterar o script em package-json para_ **"dev": "webpack --mode=development -w"**

**Organizando o projeto:** 

_Criar as pastas **'public'**, onde ficarão os arquivos que não precisam ser monitorados pelo webpack e **'src'**, onde ficarão os arquivos .js, que precisam ser monitorados._

**Instalar dev-server:**

```yarn add webpack-dev-server -D```

_Alterar webpack.config.js:_

```
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase:  __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
```

_Alterar o script em package.json:_

```"dev": "webpack-dev-server --mode=development"```

_Como o dev-server não cria o bundle.js, apenas o deixa embutido, caso precise do arquivo (para subir a aplicação, por exemplo), adicionamos um comando no script:_

```
"scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production"
  }
```

_Em seguida rodamos o comando:_

```yarn build```
