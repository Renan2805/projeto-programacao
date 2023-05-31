insert into linguagem values
    (null, 'Javascript', 'interpretada', null),
    (null, 'C++', 'compilada', null);

insert into usuario VALUES
    (null, 'renan', 'renan@email.com', 'Re123456@'),
    (null, 'leo', 'leo@email.com', 'Le123456@');

insert into dadosPessoais values
    (1, 'Renan', 'Silva', 1),
    (1, 'Leo', 'Bento', 2);

insert into linguagemUsuario values
    (1, 1),
    (1, 2),
    (2, 1);

insert into quiz values
    (null, 'Javascript 1'),
    (null, 'Javascript 2'),
    (null, 'Javascript 3');

insert into tentativa values
    (null, 0, 60.000, 1, 1),
    (null, 3, 59.990, 1, 1),
    (null, 5, 30.460, 1, 1),
    (null, 2, 72.971, 1, 1),
    (null, 7, 90, 1, 1),
    (null, 9, 65.123, 1, 1);

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