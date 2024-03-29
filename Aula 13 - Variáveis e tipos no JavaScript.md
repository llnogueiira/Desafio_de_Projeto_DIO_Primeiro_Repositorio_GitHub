# Aula 03 - Variáveis e tipos no Javascript



# Variáveis

### Objetivos desta aula

Conhecer as principais estruturas de dados do JavaScript, como utilizá-las e suas possibilidades



## 1. Atribuindo valores

- O que são variáveis?
- O que são constantes?
- Diferença entre **var**, **const** e **let**

**Case Type**					**Exemplo**
Original Variable as String		some awesome var
Camel Case					someAwesomeVar (Muito utilizado para variáveis)
Snake Case					some_awesome_var
Kebab Case					some-awesome-var
Pascal Case					SomeAwesomeVar
Upper Case Snake Case			SOME_AWESOME_VAR (Muito utilizados para constantes)



## 2. Variáveis

- São valores dinâmicos que podem ser alterados ao longo do código;

Podemos utilizar **var** e **let** para declaração de variáveis.


### let

- **var** e **let** possuem escopos diferentes. Não existia, existia apenas a **var**. A **let** introduz o conceito de escopo de bloco;
- Hoisting (sempre que formos utilizar o **let** é necessário declarar antes, no entanto para o **var** não.
- Redeclaração
- Reatribuição
- camelCase


Por exemplo:

var a = 1;
var b = 2;

if(a === 1) {
	var a = 11; //the scope is global
	var b = 22; //the scope is inside the if-block

	console.log(a); // 11
	console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2



## 3. Constantes

- Declaradas em formato **SNAKE_UPPER_CASE**
- Escopo de bloco
- Não faz hoisting

Exemplo:

const DAYS_IN_A_WEEK = 7;
const MY_NAME = "Kieran";



## 4. Resumo >> var, let e const <<

			**var**				**const**				**let**
escopo		global ou local		bloco				bloco
redeclarar	sim					não					não
reatribuir	sim					não					sim
hoisting		sim					não					não



# Tipos

**Objetivos:** Apresentar as principoais estruturas de daos do JavaScript e seus principais métodos



## Estrutura de dados

São coisas que existem em todas as linguagens de programação, porém as estruturas do javascript são:
- JavaScript é uma linguagem de tipagem dinâmica (conseguimos por exemplo modificar o tipo da variável, ou seja, antes de declarar um valor não precisamos informar o tipo dele)

### Tipos primitivos
- Não possuem métodos dentro deles;
- São escritos com letra minúscula;

### Tipos não primitivos
- São objetos e arrays;



## Strings

- Comumente utilizadas para textos;
- Valores declarados entre aspas ou crases;

let firstName = "Luciano";
let lastName = "Nogueira";

let nomeCompleto = firstName + " " + lastName
ou
let nomeCompleto = firstName.concat(" ", lastName);
ou
let nomeCompleto = `${firstName} ${lastName}`


**Métodos importantes:**
- Concatenação;
- Propriedade length;
- Iterabilidade;
- Formatação;



## Números

- Podemos realizar operações aritiméticas com eles.

Exemplo:

let num = 100;

num * 3 = 300;
num / 2 = 50;
num % 2 = 0; (significa que este número é um número par)


let num2 = 101;

num2 % 2 = 1; (significa que num2 é um número impar)



### Math 

- Math é um objeto, assim conseguimos fazer várias operações com ele.

Exemplo:

typeof Math = "object"
Math.PI = 3.141592653589793

let fiveByThree = 5 / 3;
fiveByThree = 1.66666666667

Math.floor(fiveByThree)
1

Math.ceil(fiveByThree)
2

***Obs.: Não conseguimos declarar porcentagem. É necessário declarar um número e depois concatenar com uma string.***

Por exemplo:

let percent = '10%' (undifined)

Agora, façamos da seguinte forma:

let percent = 10
percent + '%' = 10%



## Booleanos

- Valores booleanos só podem atender aos seguintes requisitos:
1. True (Verdadeiro)
2. False (Falso)

Exemplo:

let validation = 3 === 0;
Resposta: False

let validation = 10 === 10;
Resposta: True

- Podemos criar uma string, da seguinte forma:

validation.toString() = "true"


- Podemos fazer a negação:

validation = true;
!validation = false;



## Arrays (vetores de trabalho)

- São listas iteráveis de elementos;

Por exemplo:

- Vamos criar um array
let array = []

- Adicionar o número 2
array.push(2)

- Adicionar outro número
array.push(5)

console.log(array) = [2 5]

- Para remover o ultimo elemento
array.pop()

console.log(array) = [2]

- Para remover o primeiro elemento
array.shift()

console.log(array) = [5]

- Para adicionar um item ao primeiro elemento
array.unshift(8)

console.log(array) = [8 2 5]



## Objetos

- Estrutura do tipo chave e valor -> no python seria o equivalente ao dicionário

**Exemplo:**

let obj = {}

obj.name = 'Julia'
obj.age = 20

console.log(obj) = {name: 'Julia', age: 20}

Se quisermos consultar os valores deste dicionário, fazemos:

Object.values(obj) = ["Julia",20]

Se quisermos consultar as chaves deste dicionário, fazemos:

Object.keys(obj) = ["name", "age"]



## Empty, null e undefined

- Empty: é quando você declara aquela variável e se ela é um número você declarou como zero, string como "", array [], objeto {}
- Null: é quando você quer que proprositalmente aquele valor não exista.
- Undefined: é quando você nem declara esta variável.