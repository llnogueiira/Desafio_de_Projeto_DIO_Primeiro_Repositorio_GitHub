# Mapas e Conjuntos com JavaScript



## Coleções Chaveadas

**Objetivo do Curso**

1. Apresentar o objeto Map
2. Apresentar o objeto Set



## Map

**Objetivo**: 

1. Apresentar a coleção Map
2. Explicar sua aplicação
3. Explicar a diferença entre Map e Objeto

**Características**:

- Uma coleção de arrays no formato [chave, valor];
- Pode iterado por um loop for...of

**Declaração**: const myMap = New Map()



#### Métodos - Coleções chaveadas

const myMap = new Map()

myMap.set('apple', 'fruit'); // Map(1) {'apple' => 'fruit'}

myMap.get('apple'); // 'fruit'

myMap.delete('apple'); // true

myMap.get('apple'); // undefined porque foi excluído acima

#### Map vs Objeto

- Maps podem ter **chaves** de qualquer tipo; (Objeto sempre tem chaves no formato de **string**)
- Maps possuem a propriedade length; (Objeto você precisa itera por todas propriedades para ver quantas propriedades tem)
- Maps são mais fáceis de iterar
- Utilizado quando o valor das chaves é desconhecido (Objeto é utilizado quando conhecemos os valores das chaves)
- Os **valores** tem o mesmo tipo (Não necessariamente o Objeto possui valores do mesmo tipo)



## Set

**Objetivo**:

1. Apresentar a coleção Set
2. Explicar sua aplicação
3. Explicar a diferença entre Set e Array

**Estrutura**:

- Sets são estruturas que armazenam apenas **valores únicos**

**Exemplo**:

const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

const mySet = **new** *Set*(myArray);

console.log(myArray)

console.log(mySet)

- Resultado:

  - [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1]

  - [1, 2, 3, 4, 5, 6, 7, 8]

    

#### Métodos - Coleções chaveadas

- Adicionar, consultar e deletar:

**Exemplo**:

const mySet = **new** *Set*();

mySet.add(1);

mySet.add(5);

mySet.add(8);

console.log(mySet);

console.log(mySet.has(1));

console.log(mySet.has(3));

mySet.delete(5);

console.log(mySet);

- Resultado:
  - Set(3) {1, 5, 8}
  - true
  - false
  - Set(2) {1, 8}

#### Set vs Array

- Set possui valores únicos
- Em vez da propriedade **length**, consulta-se o número de registros pela propriedade **size**
- Não possui os métodos **map, filter, reduce** etc.



*Importante! Se queremos **transformar** um **SET** em um **ARRAY**, precisamos utilizar o argumento **spread**, desta forma temos o exemplo abaixo:*

**Exemplo**:

return **mySet**; // vai retornar um **Set**

return **[...mySet]**; // vai retornar um **Array**

