insert into linguagem values
    (null, 'Javascript', 'interpretada', null),
    (null, 'C++', 'compilada', null),
    (null, 'Python', 'interpretada', null),
    (null, 'Java', 'compilada', null),
    (null, 'Ruby', 'compilada', null);

insert into usuario VALUES
    (null, 'renan', 'renan@email.com', 'Re123456@'),
    (null, 'leo', 'leo@email.com', 'Le123456@');

insert into dadosPessoais values
    (1, 'Renan', 'Silva', 1),
    (1, 'Leo', 'Bento', 2);

insert into quiz values
    (null, 'Javascript 1', 'facil'),
    (null, 'Javascript 2', 'medio'),
    (null, 'Javascript 3', 'dificil');

-- Inserts quiz 1
insert into questao values
    (null, 'Qual é a sintaxe correta para declarar uma variável em JavaScript?', 1),
    (null, 'Como você exibe uma caixa de diálogo com a mensagem "Hello, World!" em JavaScript?', 1),
    (null, 'Qual é o operador usado para concatenar strings em JavaScript?', 1),
    (null, 'Qual é a forma correta de escrever um comentário de uma linha em JavaScript?', 1),
    (null, 'O que o método document.getElementById() faz em JavaScript?', 1),
    (null, 'Como você declara uma função em JavaScript?', 1),
    (null, 'Qual é o operador de igualdade estrita em JavaScript?', 1),
    (null, 'O que a função parseInt() faz em JavaScript?', 1),
    (null, 'Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?', 1),
    (null, 'Qual é o método usado para remover o último elemento de um array em JavaScript?', 1);

insert into alternativa values
    (1, 'var = myVariable;', 0, 1000),
    (2, 'variable myVariable;', 0, 1000),
    (3, 'var myVariable;', 1, 1000),
    (4, 'v myVariable;', 0, 1000),

    (1, 'alertBox("Hello, World!");', 0, 1001),
    (2, 'msg("Hello, World!");', 0, 1001),
    (3, 'alert("Hello, World!");', 1, 1001),
    (4, 'prompt("Hello, World!");', 0, 1001),

    (1, '.', 0, 1002),
    (2, '+', 1, 1002),
    (3, ',', 0, 1002),
    (4, ':', 0, 1002),

    (1, '/* This is a comment */', 0, 1003),
    (2, '// This is a comment //', 1, 1003),
    (3, "'This is a comment'", 0, 1003),
    (4, '<!-- This is a comment -->', 0, 1003),
    
    (1, 'Retorna o valor de um elemento de formulário.', 0, 1004),
    (2, 'Retorna um elemento HTML com base em seu ID.', 1, 1004),
    (3, 'Retorna a classe de um elemento HTML.', 0, 1004),
    (4, 'Retorna o nome de um elemento HTML.', 0, 1004),

    (1, 'function = myFunction() { }', 0, 1005),
    (2, 'function myFunction() { }', 1, 1005),
    (3, 'var myFunction = function() { }', 0, 1005),
    (4, 'var = function() { myFunction }', 0, 1005),

    (1, '==', 0, 1006),
    (2, '=', 0, 1006),
    (3, '===', 1, 1006),
    (4, '!=', 0, 1006),

    (1, 'Converte um número em uma string.', 0, 1007),
    (2, 'Converte uma string em um número inteiro.', 1, 1007),
    (3, 'Arredonda um número para o inteiro mais próximo.', 0, 1007),
    (4, 'Retorna o valor absoluto de um número.', 0, 1007),
    
    (1, 'array.push()', 1, 1008),
    (2, 'array.unshift()', 0, 1008),
    (3, 'array.append()', 0, 1008),
    (4, 'array.add()', 0, 1008),
    
    (1, 'array.pop()', 1, 1009),
    (2, 'array.shift()', 0, 1009),
    (3, 'array.remove()', 0, 1009),
    (4, 'array.delete()', 0, 1009);

-- inserts quiz 2
insert into questao values
  (null, 'Qual é o resultado da expressão typeof null em JavaScript?', 2),
  (null, 'O que o método Array.isArray() faz em JavaScript?', 2),
  (null, 'Qual é o escopo padrão das variáveis declaradas em JavaScript?', 2),
  (null, 'Qual é o resultado da expressão NaN === NaN em JavaScript?', 2),
  (null, 'O que o método forEach() faz em JavaScript?', 2),
  (null, 'Qual é a diferença entre let e var na declaração de variáveis em JavaScript?', 2),
  (null, 'O que o método map() faz em JavaScript?', 2),
  (null, 'O que o operador === faz em JavaScript?', 2),
  (null, 'Qual é a sintaxe correta para um loop "for" em JavaScript?', 2),
  (null, 'Qual é o resultado da expressão 5 + "5" em JavaScript?', 2);

insert into alternativa values
  (1, '"null"', 0, 1010),
  (2, '"object"', 1, 1010),
  (3, '"undefined"', 0, 1010),
  (4, '"function"', 0, 1010),

  (1, 'Verifica se um elemento é um objeto.', 0, 1011),
  (2, 'Verifica se um valor é uma função.', 0, 1011),
  (3, 'Verifica se um valor é um número.', 0, 1011),
  (4, 'Verifica se um valor é um array.', 1, 1011),

  (1, 'Escopo global', 1, 1012),
  (2, 'Escopo local', 0, 1012),
  (3, 'Escopo de bloco', 0, 1012),
  (4, 'Escopo de função', 0, 1012),

  (1, 'true', 0, 1013),
  (2, 'false', 1, 1013),
  (3, 'undefined', 0, 1013),
  (4, 'NaN', 0, 1013),

  (1, 'Executa uma função para cada elemento de um array.', 1, 1014),
  (2, 'Verifica se um elemento existe em um array.', 0, 1014),
  (3, 'Ordena os elementos de um array em ordem crescente.', 0, 1014),
  (4, 'Retorna a soma dos elementos de um array.', 0, 1014),

  (1, 'let é usado para variáveis globais, enquanto var é usado para variáveis locais.', 0, 1015),
  (2, 'let tem escopo de bloco, enquanto var tem escopo de função.', 1, 1015),
  (3, 'let é usado para variáveis constantes, enquanto var é usado para variáveis mutáveis.', 0, 1015),
  (4, 'Não há diferença significativa entre let e var.', 0, 1015),

  (1, 'Retorna um novo array com os resultados de uma função aplicada a cada elemento do array original.', 1, 1016),
  (2, 'Remove elementos duplicados de um array.', 0, 1016),
  (3, 'Retorna o número de elementos em um array.', 0, 1016),
  (4, 'Inverte a ordem dos elementos em um array.', 0, 1016),

  (1, 'Compara dois valores quanto à igualdade, sem fazer coerção de tipo.', 1, 1017),
  (2, 'Compara dois valores quanto à igualdade, permitindo coerção de tipo.', 0, 1017),
  (3, 'Atribui um valor a uma variável.', 0, 1017),
  (4, 'Compara dois valores quanto à desigualdade, sem fazer coerção de tipo.', 0, 1017),

  (1, 'for (let i = 0; i < 10; i++) { }', 1, 1018),
  (2, 'for (let i = 10; i > 0; i--) { }', 0, 1018),
  (3, 'for (let i = 0; i < 10; i--) { }', 0, 1018),
  (4, 'for (let i = 10; i > 0; i++) { }', 0, 1018),

  (1, '55', 0, 1019),
  (2, '"10"', 1, 1019),
  (3, '10', 0, 1019),
  (4, '"55"', 0, 1019);

insert into questao values
  (null, 'O que é uma closure em JavaScript?', 3),
  (null, 'Qual é o objetivo principal do padrão de projeto "Module Pattern" em JavaScript?', 3),
  (null, 'O que é o "hoisting" em JavaScript?', 3),
  (null, 'O que é o Event Bubbling em JavaScript?', 3),
  (null, 'O que é uma Promise em JavaScript?', 3),
  (null, 'O que é o conceito de "currying" em JavaScript?', 3),
  (null, 'O que é o Event Loop em JavaScript?', 3),
  (null, 'O que é o operador spread (...) em JavaScript?', 3),
  (null, 'O que é o conceito de "callback" em JavaScript?', 3),
  (null, 'O que é o "prototype" em JavaScript?', 3);

insert into alternativa values

  (1, 'Uma função interna anônima.', 0, 1020),
  (2, 'Um método utilizado para fechar um programa.', 0, 1020),
  (3, 'Um mecanismo que permite o acesso a variáveis em um escopo externo, mesmo após a função externa ter sido concluída.', 1, 1020),
  (4, 'Uma técnica para criar classes em JavaScript.', 0, 1020),

  (1, 'Organizar e estruturar o código em módulos reutilizáveis.', 1, 1021),
  (2, 'Garantir a encapsulação dos dados em uma classe.', 0, 1021),
  (3, 'Otimizar a velocidade de execução do código.', 0, 1021),
  (4, 'Evitar o uso de funções aninhadas.', 0, 1021),

  (1, 'O processo de mover todas as variáveis e funções para o topo do escopo antes da execução do código.', 1, 1022),
  (2, 'Uma técnica para elevar a eficiência de um programa JavaScript.', 0, 1022),
  (3, 'Uma propriedade que permite o uso de palavras-chave reservadas como nomes de variáveis.', 0, 1022),
  (4, 'Um recurso usado para criar loops mais eficientes.', 0, 1022),

  (1, 'Um processo que ocorre quando uma função é invocada em resposta a um evento.', 0, 1023),
  (2, 'A propagação de um evento através da hierarquia de elementos do DOM, do elemento mais interno para o mais externo.', 1, 1023),
  (3, 'A captura de um evento antes que ele seja propagado para outros elementos.', 0, 1023),
  (4, 'Um método para evitar a propagação de eventos em JavaScript.', 0, 1023),

  (1, 'Um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.', 1, 1024),
  (2, 'Um método usado para converter um objeto em uma string JSON.', 0, 1024),
  (3, 'Uma função que permite criar uma cópia profunda de um objeto.', 0, 1024),
  (4, 'Uma técnica usada para fazer iterações em um array.', 0, 1024),

  (1, 'Uma técnica para criar funções que podem ser chamadas várias vezes com diferentes argumentos.', 1, 1025),
  (2, 'Um método para manipular strings em JavaScript.', 0, 1025),
  (3, 'Uma técnica para evitar a repetição de código em uma função.', 0, 1025),
  (4, 'Uma propriedade que permite a chamada de funções recursivamente.', 0, 1025),

  (1, 'Um ciclo de execução contínuo que gerencia as tarefas assíncronas em JavaScript.', 1, 1026),
  (2, 'Uma função que é executada quando ocorre um evento no navegador.', 0, 1026),
  (3, 'Um método para criar um loop infinito em JavaScript.', 0, 1026),
  (4, 'Uma técnica usada para iterar sobre os elementos de um array em JavaScript.', 0, 1026),

  (1, 'Um operador usado para espalhar os elementos de um array em um novo array.', 1, 1027),
  (2, 'Um operador usado para realizar operações matemáticas avançadas em JavaScript.', 0, 1027),
  (3, 'Um operador usado para concatenar strings em JavaScript.', 0, 1027),
  (4, 'Um operador usado para converter um valor em um tipo de dado diferente.', 0, 1027),

  (1, 'Uma função que é passada como argumento para outra função e é executada quando um evento assíncrono é concluído.', 1, 1028),
  (2, 'Uma função que retorna um valor booleano.', 0, 1028),
  (3, 'Um método usado para invocar uma função recursivamente.', 0, 1028),
  (4, 'Uma técnica para converter um objeto em uma string JSON.', 0, 1028),

  (1, 'Um objeto interno que todos os objetos JavaScript herdam propriedades e métodos.', 1, 1029),
  (2, 'Um método usado para criar uma nova instância de uma classe.', 0, 1029),
  (3, 'Uma propriedade que permite adicionar novos elementos a um array.', 0, 1029),
  (4, 'Um conceito relacionado à manipulação de datas em JavaScript.', 0, 1029);