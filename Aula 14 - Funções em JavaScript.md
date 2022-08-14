# Funções

### Objetivo deste curso
1. Mostrar como declarar funções

2. Aprender a manipular parâmetros

3. Apresentar loops e outras declarações

4. Apresentar o argumento "this"

   


## Aula 01 - Tipos de funções

- Definição comum de uma função:

function nome(parametros){
	// instruções
	return // valor de retorno
}

Obs.: Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela
Obs.: Quando invocamos o "return", a função para de ser executada

### Função anônima

- Uma variável pode armazenar uma função

Exemplo:

const soma = function(a, b){
	return a + b;
}

console.log(soma(1, 3)) = 4


### Função autoinvocável

- Uma função anônima entre parenteses, seguida por outro par de parenteses, que representa sua chamada
- Podem receber parâmetros

(
	function(){
	let name = "Digital Innovation One"
	return name;
	}
)();

(
	function(a, b){
	return a+b
	}
)(1, 2); 

### Função callback
- Uma função passada como parâmetro para outra função. Utilizando callbacks, você tem maior controle da ordem de chamadas

Exemplo:

const calc = function(operacao, num1, num2){
	return operacao(num1, num2);
}

const soma = function(num1, num2){
	return num1 + num2;
}

const sub = function(num1, num2){
	return num1 - num2;
}

const resultSoma = calc(soma, 1, 2); 
const resultSub = calc(sub, 1, 2);

console.log(resultSub);
console.log(resultSoma);



## Aula 02 - Parâmetros

**Objetivos**: 

1. Ensinar como manipular parâmetros de uma função
2. Técnicas para lidar com números indefinidos de parâmetros

### Funções

- Atualizações do ECMASCRIPT

![ECMA Script antes x depois!](images\teste.png)

É possível notar que agora, podemos colocar o valor de "num=1" que significa o valor default (padrão) daquela variável.

### Arguments

- Um array com todos os parâmetros passados quando a função foi invocada.

**Exemplo:**

function findMax(){

​	let max = -Infinity;

​	for(let i=0; i< **arguments**.length; i++){

​		if (arguments[i] > max){

​		max = arguments[i];

​		}	

​	}

### Arrays

- **Spread**: Uma forma de lidar separadamente com elementos

O que era parte de um array se torna um elemento independente

**Exemplo**:

function sum(x,y,z){

​	return x + y + z;

}

const numbers = [1, 2, 3];

console.log(sum(**...**numbers)); (este resultado dará 6 = 1+2+3)



- **Rest**: Combina os argumentos em um array

O que era um elemento independente se torna parte de um array

**Exemplo**:

function confereTamanho(**...**args){

​	console.log(args.length)

}

confereTamanho() // 0

confereTamanho(1, 2) // 2

confereTamanho(3, 4, 5) // 3



### Objetos

**Object Destructuring**: Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto

**Exemplo**:

const user = {

  id: 42,

  displayName: 'JDoe',

  fullName: {

​    firstName: 'John',

​    lastName: 'Doe'

  }

};

function userId({*id*}){

  return *id*

}

console.log(userId(user)) 

- O resultado disto deve ser: 42.



## Aula 03 - Loops

**Objetivo**: Ensinar como utilizar algumas das mais famosas declarações do JavaScript



### If/else

**Exemplo**:

function numeroPositivo(*num*){

  let resultado;

  if (*num*<0){ // condição

​    resultado = 'negativo';

  } else {

​    resultado = 'positivo';

  }

  return resultado;

}

console.log(numeroPositivo(-1))

console.log(numeroPositivo(5))

- O resultado deste exemplo deve ser:
  - negativo;
  - positivo;



Podemos também reescrever o código da seguinte maneira:

function numeroPositivo(*num*){

  const ehNegativo = *num* < 0;

  if (ehNegativo){

​    return 'Negativo'

  } else {

​    return 'Positivo'

  }

}

console.log(numeroPositivo(5))

- O resultado é: Positivo



### Else if

**Importante:** *JavaScript **não tem elseif**, as palavras sempre estão espaçadas!*

**Exemplo**:

function numeroPositivo(*num*){

  const ehNegativo = *num* < 0;

  const maiorQueDez = *num* > 10;

  if(ehNegativo){

​    return 'Este número é negativo'

  } else if(!ehNegativo && maiorQueDez){

​    return 'Este número é positivo é maior do que 10!'

  }

  return 'Este número é positivo'

}

console.log(numeroPositivo(12))

- Resultado: Este número é positivo é maior do que 10!



### Switch/case

1. Equivale a uma comparação de tipo e valor (===);
2. Sempre precisa de um valor "default"
3. Ideal para quando se precisa comparar muitos valores;

**Exemplo**:

function getAnimal(*id*){

  if(0 < *id* <= 4){

​    switch(*id*){

​      case 1:

​        return 'Cão';

​      case 2:

​        return 'Gato';

​      case 3:

​        return 'Pássaro';

​      case 4:

​        return 'Peixe';

​    }

  }

  return 'Número inválido. Favor inserir um número entre 1 e 4'

}

console.log(getAnimal(1))

- Resultado: Cão



**Exemplo 2**:

function getAnimal(*id*){

  switch(*id*){

​    case 1:

​      return 'Cão';

​    case 2:

​      return 'Gato';

​    case 3:

​      return 'Pássaro';

​    default:

​      return 'Nenhum animal selecionado';

  }

}

console.log(getAnimal(5))

- Resultado: Nenhum animal selecionado



### For

- É um **loop** dentro de elementos iteráveis (arrays, strings)

**Exemplo**:

function multiplicaPorDois(*array*){

  let mutiplicados = [];

  for (let i = 0; i < *array*.length; i++){

​    mutiplicados.push(*array*[i] * 2);

  }

  return mutiplicados;

}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros));

- Resultado: [4, 66, 912, 712, 80]



### For...in

- Loop entre propriedades enumeráveis de um objeto

**Exemplo 1**:

function forinExemplo(*obj*){

  for (prop in *obj*){

​    console.log(prop);

  }

}

const meuObjeto = {

  nome: 'Luciano',

  idade: 28,

  cidade: 'São Paulo'

}

forinExemplo(meuObjeto);

- Resultado:

  - nome
  - idade
  - cidade

  

**Exemplo 2**:

function forinExemplo(*obj*){

  for (prop in *obj*){

​    console.log(*obj*[prop]);

  }

}

const meuObjeto = {

  nome: 'Luciano',

  idade: 28,

  cidade: 'São Paulo'

}

forinExemplo(meuObjeto);

- Resultado:
  - Luciano
  - 28
  - São Paulo



### For...of

- Loop entre estruturas iteráveis (arrays, strings)

**Exemplo**:

function logLetras(*palavra*){

  for (letra of *palavra*){

​    console.log(letra);

  }

}

const palavra = 'abacaxi';

logLetras(palavra)

- Resultado:
  - a
  - b
  - a
  - c
  - a
  - x
  - i

**Exemplo 2**:

function logLetras(*array*){

  for (numero of *array*){

​    console.log(numero);

  }

}

const nums = [30, 20, 233, 2];

logLetras(nums)

- Resultado:
  - 30	
  - 20
  - 233
  - 2



### While

- Executa instruções até que a condição se torne falsa

**Exemplo**:

function exemploWhile(){

  let num = 0;

  while(num <= 5){

​    console.log(num);

​    num += 1;

  }

}

exemploWhile()

- Resultado:
  - 0
  - 1
  - 2
  - 3
  - 4
  - 5



### Do...while

- Executa instruções até que a condição se torne falsa
- Porém, **a primeira execução sempre vai ocorrer**

**Exemplo**:

function exemploDoWhile(){

  let num = 6;

  do{

​    console.log(num);

​    num++;

  } while(num <= 5)

}

exemploDoWhile()

- Resultado: 6



## Aula 04 - Argumento "this"

**Objetivos**:

1. Apresentar a palavra "This" e a sua utilização;
2. Como aplicar métodos para manipular seu valor;



### This

**O que é?**

A palavra reservada **this** é uma referência de contexto. No exemplo, **this** refere-se ao objeto pessoa.

**Exemplo**:

const pessoa = {

  firstName: 'Luciano',

  lastName: 'Nogueira',

  id: 1,

  fullName: function(){

​    return *this*.firstName + ' ' + *this*.lastName;

  },

  getId: function(){

​    return *this*.id;

  }

};

console.log(pessoa.fullName());

console.log(pessoa.getId());

- Resultado:
  - Luciano Nogueira
  - 1

***Obs. Importante: Quando uma função está dentro de um objeto, nós chamamos ele de método!***

De forma resumida, temos:

|       Contexto        |               Referência               |
| :-------------------: | :------------------------------------: |
| Em um objeto (método) |     Próprio objeto dono do método      |
|        Sozinha        | Objeto global (em navegadores, window) |
|        Função         |             Objeto global              |
|        Evento         |     Elemento que recebeu o evento      |

**Exemplo - Fora de função**:

console.log(this);

- Resultado: {} // ou seja, retornará um valor vazio

  

**Exemplo - No navegador**:

no console: this

- Resultado: Window



**Exemplo - Dentro de uma função**:

(function (){

  console.log(*this*);

})();

- Resultado: Objeto [global]

![This - Dentro de uma função!](images\This dentro de uma funcao.png)



**Exemplo - Em um evento no HTML**:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="my-btn" onclick="console.log(this)">
        click me!
    </button>
</body>
</html>

Então dentro de um evento, o **this** é o elemento que recebeu o evento, então neste caso o this vai se referir ao botão.



### Manipulando seus valores

### Call:

const pessoa = {

  nome: 'Miguel'

};

const animal = {

  nome: 'Murphy'

};

function getSomething(){

  console.log(*this*.nome);

}

getSomething.call(animal);

- Resultado: Murphy



Percebe-se que a **fuction getSomething** não possui relação nenhuma com as constantes acima, no entanto este **this** dentro dessa função se refere a que? Então, quando utilizamos o método **call**, nós colocamos o objeto a qual queremos que o this se refira. Assim, quando damos o getSomething.call(pessoa), o this.nome, refere-se a pessoa, então sairá Miguel.

Também podemos utilizá-lo quando nossa função possui argumentos, por exemplo:

**Exemplo**:

const myObj = {

  num1: 2,

  num2: 4,

};

function soma(*a*, *b*){

  console.log(*this*.num1 + *this*.num2 + *a* + *b*);

}

soma.call(myObj, 1, 5)

- Resultado: 12


### Apply

- Possui uma aplicação muito parecida com o método **call**

**Exemplo**:

const pessoa = {

  nome: 'Miguel'

};

const animal = {

  nome: 'Teddy'

};

function getSomething(){

  console.log(*this*.nome);

}

getSomething.apply(animal);

- Resultado: Teddy



A diferença está na possibilidade de passar parâmetros para essa função dentro de um **array**

**Exemplo**:

const myObj = {

  num1: 2,

  num2: 4,

};

function soma(*a*, *b*){

  console.log(*this*.num1 + *this*.num2 + *a* + *b*);

}

soma.call(myObj, **[1, 5]**) // ao invés de passar os argumentos por vírgulas, passamos dentro de um array

- Resultado: 12



### Bind

- Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

**Exemplo**:

const retornaNome = function(){

  return *this*.nome;

}

let bruno = retornaNome.bind({ nome: 'Bruno'});

console.log(bruno());



## Aula 05 - Arrow functions

**Objetivo**: Apresentar a sintaxe de arrow functions

- Uma **arrow function** é representada pela seta "**=>**"

**Exemplo**:

const helloWorld = function(){

​	return "Hello World";

}

**Pode ser reescrito da seguinte forma**:

const helloWorld = () => {

​	return "Hello World";

}

**ou**

const helloWorld = () => "Hello World";



#### Regras:

1. Caso exista apenas **uma linha**, pode **dispensar** as **chaves** e o **return**;

2. Caso exista apenas um parâmetro, pode dispensar os parênteses;

3. Arrow function **não** faz **hoisting!**

   

**Exemplo 1**:

const soma = (a, b) => a + b;

console.log(soma(4, 6));

- Resultado: 10

**Exemplo 2**:

const soma = a => a;

console.log(soma(4));

- Resultado: 4

**Exemplo 3 - hoisting**:

soma(2, 4);

const soma = (a, b) => a + b; (Aqui teremos um problema, é necessário definir a **arrow function** e depois chamá-la)

*Ou seja a forma correta, seria:*

const soma = (a, b) => a + b;

soma(2, 4);



#### Outras restrições:

O que fazemos em funções normais e não podemos fazer em **arrow function**:

- "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;

- Não existe o objeto "arguments";
- O construtor (ex: new MeuObjeto()) também não pode ser utilizado;
- Sempre utilize uma função comum.



## Aula 06 - Atividade prática

### Atividade 1 - Alunos aprovados

const alunos = [

  {

​    nome: 'João',

​    nota: 5,

​    turma: '1B'

  },

  {

​    nome: 'Sofia',

​    nota: 9,

​    turma: '1A' 

  },

  {

​    nome: 'José',

​    nota: 6,

​    turma: '1C'

  },

  {

​    nome: 'Miguel',

​    nota: 3,

​    turma: '2C'

  }

];

function alunosAprovados(*array_alunos*, *media_alunos*){

  let filtroAprovados = [];

  for(let i = 0; i < *array_alunos*.length; i++){

​    const {nota, nome} = *array_alunos*[i];

​    if (nota >= *media_alunos*){

​      filtroAprovados.push(nome);

​    }

  }

  return filtroAprovados;

}

console.log(alunosAprovados(alunos,5));

- Resultado: (Com a média 5)
  - [ 'João' , 'Sofia' , 'José' ]



### Atividade 2 - Manipulação this (call e apply)

function calculaIdade(*anos*) {

  return `Daqui a ${*anos*} anos, ${*this*.nome} terá ${*this*.idade + *anos*} anos de idade.`;

}

const pessoa1 = {

  nome: 'Maria',

  idade: 30

}

const pessoa2 = {

  nome: 'Carla',

  idade: 26

}

const animal1 = {

  nome: 'Jolie',

  idade: 5,

  raca: 'Pug'

}

console.log(calculaIdade.call(pessoa1, 30));

console.log(calculaIdade.apply(pessoa2, [4]));

- Resultado:
  - Daqui a 30 anos, Maria terá 60 anos de idade.
  - Daqui a 4 anos, Carla terá 30 anos de idade.
