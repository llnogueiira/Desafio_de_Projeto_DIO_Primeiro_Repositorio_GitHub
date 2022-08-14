# TypeScript na prática

**Objetivos**:

1. Apresentar e explicar as vantagens de desenvolver com TypeScript;
2. Explicar na prática como configurar e usar a ferramenta;
3. Solidificar os conhecimenho com uma bateria de exercícios em TypeScript (TS).



## O que é o TypeScript?

- Superset do JavaScript

  - Linguagem contruída por cima do JavaScript;

  - Adiciona **features** à linguagem original;

  - Compila para JS. (O resultado final de um **TypeScript** é sempre um **JavaScript**)

    

## Porque utilizar o TS?

- Adiciona definição estática de tipos:
  - Funcionalidades do código mais explícito;
  - Maior segurança durante o desenvolvimento;
  - Detecta erros durante a compilação que só seriam detectados em execução;
- Compila um JavaScript mais resiliente;
- Ajuda a desenvolver boas práticas de programação;



## Features do TypeScript

- Node
- TypeScript
- Visual Studio Code
- Instalar o TypeScript: npm install -g typescript
- Repositório [Clique aqui!](https://github.com/lira1705/mentoria-typescript)



## Problemas de utilizar a variável ANY

No **TypeScript** não é considerado uma boa prática a utilização de **any** no código! 

- Muitas vezes o any é utilizado para ganhar tempo e dar agilidade na construção do código, mas realizar a tipagem do código te garante mais confiabilidade do código. **É recomendado fortemente realizar a tipagem do código com 'strings', 'numbers', 'booleans' e não utilizar 'any'**

**Por exemplo**:

let valorAny: *any*;

valorAny = 3;

valorAny = 'Olá';

valorAny = true;



let valorString: *string* = 'Teste';

valorString = valorAny;

let valorString2: *string* = 'Testão';

valorString2 = valorAny;



function somarString(*string1*: *string*, *string2*: *string*){

  console.log(*string1* + *string2*);

}



somarString(valorString, valorString2);

- Resultado: **2**



Enquanto o resultado deveria ser: **TesteTestão**



## Definição de tipos e variáveis personalizados

Podemos definir mais de um tipo para mesma variável, **por exemplo:**

- *input1*: *number* | *string*



No exemplo abaixo, temos:

function somarValores(*input1*: *number* | *string*, *input2*: *number* | *string*){

  if(typeof *input1* === 'string' || typeof *input2* === 'string'){

​    return *input1*.toString() + *input2*.toString();

  }else{

​    return *input1* + *input2*;

  }

}



Mas também podemos fazer da seguinte forma:

type *input* = *number* | *string*;



function somarValores(*input1*: *input*, *input2*: *input*){

  if(typeof *input1* === 'string' || typeof *input2* === 'string'){

​    return *input1*.toString() + *input2*.toString();

  }else{

​    return *input1* + *input2*;

  }

}



console.log(somarValores(1, 5));

console.log(somarValores('Olá mundo!', 'Tudo bem?'));

console.log(somarValores('1', 5));

- **Resultado 1:** 6
- **Resultado 2:** Olá mundo!Tudo bem?
- **Resultado 3:** 15



## Definindo o tipo de retorno de uma função

- Podemos definir o tipo de saída de uma função, de que forma? Adicionando ao fim dela o ':' seguido do tipo, **por exemplo:**



function somarValoresNumericos(*num1*: *number*, *num2*: *number*)**: *number***{

  return *num1* + *num2*;

}

console.log(somarValoresNumericos(1, 3));

- Isso nos fornece a informação de que a saída desta função será um número.



## Quando utilizar o tipo 'void' em funções

- O **void** é utilizado para funções que irão rodar, mas não irão precisar retornar nada, como é o exemplo de um console.log() em uma função, ela não retorna nada, apenas mostra o valor esperado no console.

**Exemplo:**

function printarValores(*num1*: *number*, *num2*: *number*): *void*{

  console.log(*num1* + *num2*);

}



## Incluindo callback em funções

O objetivo principal do callback é dar diferentes saídas para a mesma função. De que forma fazemos isto? Podemos criar outras diferentes funções para realizar um passo a mais, algo mais específico de acordo com o nosso objetivo.

**Por exemplo:**

function somarValoresNumTratar(*num1*: *number*, *num2*: *number*, callback: (*num_1*: *number*) => *number*): *number*{

  let resultado = *num1* + *num2*;

  return callback(resultado);

}



function aoQuadrado(*num*: *number*): *number*{

  return *num* * *num*;

}



function divPorEleMesmo(*num*: *number*): *number*{

  return *num* / *num*;

}



console.log(somarValoresNumTratar(1, 3, aoQuadrado));

console.log(somarValoresNumTratar(1, 3, divPorEleMesmo));

- **Resultado 1:** 16
- **Resultado 2:** 1



## Any está de volta e sobre unknown

Se temos uma propriedade do tipo **unknown** (do tipo que não sabemos que tem lá dentro, nós somos obrigados no momento que formos alocar nosso valor para outra propriedade, temos que fazer uma validação para garantir que o que tem naquela variavel naquele momento, é do tipo que aquela propriedade espera receber).



De forma resumida: 

**any**: O any será sempre um any no código e podemos alocar a ele alguém que não deveríamos;

**unknown**: O unknown por sua vez, podemos fazer as verificações necessárias e atribuirmos a ele apenas o tipo que gostaríamos de atribuir, ***por exemplo***:



let anyEstaDeVolta: *any*;

anyEstaDeVolta = 3;

anyEstaDeVolta = 'teste';

anyEstaDeVolta = true;



let stringTest: *string* = 'Verificar';

stringTest = anyEstaDeVolta;



let unknownValor: *unknown*;

unknownValor = 3;

unknownValor = 'testão';

unknownValor = true;

unknownValor = 'testinho'



let stringTest2: *string* = 'Agora vai';



if (typeof unknownValor === 'string'){

  stringTest2 = unknownValor;

}



## Como funciona o tipo 'never' e o comando 'throw'

**Never**: Utilizado para as funções que possuem como saída um **throw** (erro), assim se aconteceu o **throw**, significa que o código deu erro e ele não finaliza mais, ou seja, nunca mais será finalizado até que rode novamente e o erro seja corrigido. 

- Este tipo de exemplo também serve para **loopings**

**Exemplo:**

function jogaErro(*erro*: *string*, *codigo*: *number*): *never*{

  throw {error: *erro*, code: *codigo*}

}

jogaErro('Deu erro', 500);



## Link para os tipos em TypeSript

[TypeScript: Documentation - Everyday Types (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)



## Link para ts.config

[TypeScript: TSConfig Reference - Docs on every TSConfig option (typescriptlang.org)](https://www.typescriptlang.org/tsconfig)
