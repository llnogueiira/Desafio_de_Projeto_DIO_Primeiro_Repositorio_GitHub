# Curso de JavaScript

# Aula 01 - O que é JavaScript?

1. Entender a história da linguagem
2. Familiarizar-se com a sintaxe
3. Utilização de recursos básicos
4. Criar seu primeiro projeto
5. Conhecer possibilidades no mercado de trabalho



## História do JavaScript

- Leve
- Interpretada (Significa que está sendo rodada em tempo real e os resultados do código está sendo disponibilizado instantaneamente)
- Baseada em Protótipos 
- Multiparadigma (Pode escolher se queremos trabalhar com orientações a objetos, programação funcional ou programação estruturada)
- Comumente utilizada em aplicações web client-side (parte da sua aplicação que vai ter interação com o usuário)
- Segue o padrão ECMAScript



## Evolução

1997 - ECMAScript 1 (First Edition)
1998 - ECMAScript 2 (Editorial changes only)
1999 - ECMAScript 3 (Regular Expressions. try/catch) >> ECMAScript 4 (Never released)
2009 - ECMAScript 5 ("strict mode". JSON support. String.trim(). Array.isArray(). Array Interation Methods
2015 - ECMAScript 6



## Aplicações

- Web
- Mobile
- Smartwatches
- Games
- Internet of Things
- APIs




# Recursos básicos da linguagem



## Manipulando um arquivo

### Diferença entre variável e constante

A variável pode ser alterada ao longo do código, já a constante sempre deve permanecer fixa.

- Exemplo 1 (variável):

		- var preco = 10
		- var desconto = 0,8
		- var preco = preco * desconto // esta operação estará aplicando um desconto de 20% ao preco inicial

- Exemplo 2 (constante):

		- const PRECO = 10
		- var desconto = 0,8
		- var preco_final = PRECO * desconto // esta operação também estará aplicando um desconto de 20% ao preco inicial, no entanto o valor da constante preco permanece inalterada e é criado uma nova variável para encontrar o novo valor de preço (preco_final)




## Manipulando um arquivo

O conteito de função é simples. Você declara as variáveis no parenteses e dentro da função desenhamos a sua lógica e por fim, mandamos retornar o valor esperado.

- Exemplo:

function soma(a,b){
	return a+b;
}

Assim, se fizermos:

soma(3,2);
o resultado deve ser: 5




# Console

**Objetivos**:
- Aprender a utilizar o console em uma página web
- Aprender a utilizar o console no terminal

### Console em uma página web

1. Com o botão direito, clicar na página e em seguida ir em inspecionar.
2. No canto superior direito, teremos uma aba escrito console e lá podemos codar.

### Console no terminal

1. Criar um novo projeto no VS Code em formato .js e em seguida, clicar em **Terminal** e escolher o **Git Bash** para executar o teste.
2. Vá até a página do arquivo
3. Escreva: node nome_do_arquivo.js
4. O resultado será impresso no Terminal do VS Code.




# JavaScript em uma página da Web

- DOM (Documento Object Model)
- Estrutura dos elementos dentro da janela