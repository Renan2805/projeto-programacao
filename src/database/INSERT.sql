insert into linguagem values
    (null, 'Javascript', 'interpretada', null),
    (null, 'Typescript', 'interpretada', null),
    (null, 'C++', 'compilada', null),
    (null, 'Python', 'interpretada', null),
    (null, 'Java', 'compilada', null),
    (null, 'Ruby', 'compilada', null);

insert into usuario VALUES
    (null, 'renan', 'Re123456@'),
    (null, 'leo', 'Le123456@');

insert into dadosPessoais values
    (1, 'Renan', 'Silva', 1),
    (1, 'Leo', 'Bento', 2);

insert into quiz values
    (null, 'Javascript 1', 'facil'),
    (null, 'Javascript 2', 'medio'),
    (null, 'Javascript 3', 'dificil'),
    (null, 'Java 1', 'facil'),
    (null, 'Java 2', 'medio'),
    (null, 'Java 3', 'dificil');

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



-- Inserção das questões do Quiz 1 - Nível Iniciante
INSERT INTO questao VALUES
  (null, 'Qual é a finalidade principal da linguagem de programação Java?', 4),
  (null, 'Qual é o método principal em uma aplicação Java?', 4),
  (null, 'Qual palavra-chave é usada para definir uma classe em Java?', 4),
  (null, 'Qual é a sintaxe correta para declarar uma variável inteira em Java?', 4),
  (null, 'Em Java, qual é o operador usado para verificar se dois valores são iguais?', 4),
  (null, 'O que significa JVM?', 4),
  (null, 'Qual é a forma correta de criar um objeto em Java?', 4),
  (null, 'Qual é o resultado da expressão 5 % 2 em Java?', 4),
  (null, 'Em Java, qual palavra-chave é usada para definir uma constante?', 4),
  (null, 'Qual é a forma correta de escrever um comentário de uma linha em Java?', 4);


INSERT INTO alternativa VALUES
(1, 'Desenvolvimento de aplicações de propósito geral', 1, 1030),
(2, 'Desenvolvimento de aplicações móveis', 0, 1030),
(3, 'Criação de websites', 0, 1030),
(4, 'Desenvolvimento de jogos', 0, 1030);

-- Questão 2
INSERT INTO alternativa VALUES
(1, 'init()', 0, 1031),
(2, 'main()', 1, 1031),
(3, 'start()', 0, 1031),
(4, 'execute()', 0, 1031);

-- Questão 3
INSERT INTO alternativa VALUES
(1, 'class', 1, 1032),
(2, 'define', 0, 1032),
(3, 'create', 0, 1032),
(4, 'new', 0, 1032);

-- Questão 4
INSERT INTO alternativa VALUES
(1, 'int x;', 1, 1033),
(2, 'x = int;', 0, 1033),
(3, 'integer x;', 0, 1033),
(4, 'x = new int;', 0, 1033);

-- Questão 5
INSERT INTO alternativa VALUES
(1, '==', 1, 1034),
(2, '=', 0, 1034),
(3, '!=', 0, 1034),
(4, '<>', 0, 1034);

-- Questão 6
INSERT INTO alternativa VALUES
(1, 'Java Visual Machine', 0, 1035),
(2, 'Java Virtual Machine', 1, 1035),
(3, 'Java Virtual Memory', 0, 1035),
(4, 'Java Variable Method', 0, 1035);

-- Questão 7
INSERT INTO alternativa VALUES
(1, 'new objectName;', 0, 1036),
(2, 'create objectName;', 0, 1036),
(3, 'objectName = new Object;', 0, 1036),
(4, 'Object objectName = new Object();', 1, 1036);

-- Questão 8
INSERT INTO alternativa VALUES
(1, '2.5', 0, 1037),
(2, '2', 0, 1037),
(3, '1', 1, 1037),
(4, '0', 0, 1037);

-- Questão 9
INSERT INTO alternativa VALUES
(1, 'constant', 0, 1038),
(2, 'final', 1, 1038),
(3, 'static', 0, 1038),
(4, 'const', 0, 1038);

-- Questão 10
INSERT INTO alternativa VALUES
(1, '// Este é um comentário', 1, 1039),
(2, '/* Este é um comentário */', 0, 1039),
(3, '<!-- Este é um comentário -->', 0, 1039),
(4, '** Este é um comentário **', 0, 1039);


INSERT INTO questao VALUES
  (null, 'O que é um objeto em Java?', 5),
  (null, 'Qual é a diferença entre uma classe abstrata e uma interface em Java?', 5),
  (null, 'O que é o polimorfismo em Java?', 5),
  (null, 'Qual é a diferença entre os modificadores "public", "private" e "protected" em Java?', 5),
  (null, 'O que é uma exceção em Java?', 5),
  (null, 'Qual é a diferença entre uma ArrayList e uma LinkedList em Java?', 5),
  (null, 'O que é a palavra-chave "static" em Java?', 5),
  (null, 'Qual é o objetivo do garbage collector em Java?', 5),
  (null, 'O que é o Java Development Kit (JDK)?', 5),
  (null, 'O que é o Java Virtual Machine (JVM)?', 5);


INSERT INTO alternativa VALUES
(1, 'Uma variável de tipo primitivo', 0, 1040),
(2, 'Um valor inteiro', 0, 1040),
(3, 'Uma instância de uma classe', 1, 1040),
(4, 'Um método em uma classe', 0, 1040);

-- Questão 2
INSERT INTO alternativa VALUES
(1, 'Uma classe abstrata pode ser instanciada, enquanto uma interface não pode', 1, 1041),
(2, 'Uma classe abstrata não pode ter métodos, enquanto uma interface pode', 0, 1041),
(3, 'Uma interface pode herdar de várias classes, enquanto uma classe abstrata não pode', 0, 1041),
(4, 'Uma classe abstrata pode implementar métodos, enquanto uma interface não pode', 0, 1041);

-- Questão 3
INSERT INTO alternativa VALUES
(1, 'A capacidade de uma classe herdar atributos de outra classe', 0, 1042),
(2, 'A capacidade de uma classe ter vários construtores', 0, 1042),
(3, 'A capacidade de uma classe implementar várias interfaces', 0, 1042),
(4, 'A capacidade de uma classe ser referenciada como um tipo mais genérico', 1, 1042);

-- Questão 4
INSERT INTO alternativa VALUES
(1, '"public" permite acesso de qualquer classe, "private" permite acesso apenas dentro da mesma classe, e "protected" permite acesso dentro do mesmo pacote', 1, 1043),
(2, '"public" permite acesso apenas dentro da mesma classe, "private" permite acesso de qualquer classe, e "protected" permite acesso dentro do mesmo pacote', 0, 1043),
(3, '"public" permite acesso de qualquer classe, "private" permite acesso apenas dentro do mesmo pacote, e "protected" permite acesso dentro da mesma classe', 0, 1043),
(4, '"public" permite acesso dentro do mesmo pacote, "private" permite acesso apenas dentro da mesma classe, e "protected" permite acesso de qualquer classe', 0, 1043);

-- Questão 5
INSERT INTO alternativa VALUES
(1, 'Um erro grave que encerra a execução do programa', 0, 1044),
(2, 'Um comportamento inesperado que não deve ocorrer em tempo de execução', 1, 1044),
(3, 'Uma instrução condicional em um laço de repetição', 0, 1044),
(4, 'Uma variável que não foi inicializada corretamente', 0, 1044);

-- Questão 6
INSERT INTO alternativa VALUES
(1, 'ArrayList é uma lista ordenada, enquanto LinkedList é uma lista não ordenada', 0, 1045),
(2, 'ArrayList é mais eficiente em termos de acesso aleatório, enquanto LinkedList é mais eficiente em termos de inserção e remoção de elementos', 1, 1045),
(3, 'ArrayList é uma implementação da interface List, enquanto LinkedList é uma implementação da interface Collection', 0, 1045),
(4, 'ArrayList permite armazenar apenas objetos, enquanto LinkedList permite armazenar tanto objetos quanto tipos primitivos', 0, 1045);

-- Questão 7
INSERT INTO alternativa VALUES
(1, 'Ela indica que uma variável é constante e não pode ser modificada', 0, 1046),
(2, 'Ela indica que um método pode ser acessado sem criar uma instância da classe', 1, 1046),
(3, 'Ela indica que uma variável é local e só pode ser usada dentro de um bloco específico de código', 0, 1046),
(4, 'Ela indica que uma classe não pode ser herdada por outras classes', 0, 1046);

-- Questão 8
INSERT INTO alternativa VALUES
(1, 'Identificar e corrigir erros de compilação em tempo de execução', 0, 1047),
(2, 'Realizar a compilação just-in-time (JIT) de código Java', 0, 1047),
(3, 'Gerenciar a memória e liberar objetos que não são mais utilizados', 1, 1047),
(4, 'Realizar a interpretação de bytecode Java em tempo de execução', 0, 1047);

-- Questão 9
INSERT INTO alternativa VALUES
(1, 'Um ambiente de desenvolvimento integrado (IDE) para programação Java', 0, 1048),
(2, 'Um compilador de código-fonte Java para gerar bytecode', 0, 1048),
(3, 'Um conjunto de bibliotecas e ferramentas para desenvolvimento em Java', 1, 1048),
(4, 'Um servidor web para hospedar aplicações Java', 0, 1048);

-- Questão 10
INSERT INTO alternativa VALUES
(1, 'Um componente do JDK que compila código Java para executar em diferentes sistemas operacionais', 0, 1049),
(2, 'Um programa que interpreta bytecode Java e executa as instruções em tempo de execução', 1, 1049),
(3, 'Um compilador de código Java que gera código nativo para um sistema operacional específico', 0, 1049),
(4, 'Um ambiente de desenvolvimento para escrever e testar código Java', 0, 1049);

INSERT INTO questao VALUES
  (null, 'O que é uma classe aninhada em Java?', 6),
  (null, 'O que é uma expressão lambda em Java?', 6),
  (null, 'O que é o recurso de serialização em Java?', 6),
  (null, 'O que é uma anotação em Java?', 6),
  (null, 'Qual é a diferença entre uma exceção verificada e uma exceção não verificada em Java?', 6),
  (null, 'O que é a palavra-chave "synchronized" em Java?', 6),
  (null, 'O que é o padrão de projeto Singleton em Java?', 6),
  (null, 'O que é o Java Naming and Directory Interface (JNDI)?', 6),
  (null, 'O que é o JavaServer Pages (JSP)?', 6),
  (null, 'O que é o Java Message Service (JMS)?', 6);


INSERT INTO alternativa VALUES
(1, 'Uma classe que estende outra classe', 0, 1050),
(2, 'Uma classe que implementa uma interface', 0, 1050),
(3, 'Uma classe definida dentro de outra classe', 1, 1050),
(4, 'Uma classe com acesso restrito apenas para o pacote em que está definida', 0, 1050);

-- Questão 2
INSERT INTO alternativa VALUES
(1, 'Uma expressão matemática que realiza cálculos complexos', 0, 1051),
(2, 'Uma função anônima que pode ser tratada como um valor', 1, 1051),
(3, 'Uma instrução condicional que verifica uma condição específica', 0, 1051),
(4, 'Uma sintaxe especial usada para declarar variáveis em Java', 0, 1051);

-- Questão 3
INSERT INTO alternativa VALUES
(1, 'A capacidade de estender uma classe existente para adicionar novos comportamentos', 0, 1052),
(2, 'A capacidade de salvar objetos em um formato binário para armazenamento ou transferência', 1, 1052),
(3, 'A capacidade de compilar código Java para gerar código nativo', 0, 1052),
(4, 'A capacidade de ocultar detalhes de implementação de uma classe através do uso de interfaces', 0, 1052);

-- Questão 4
INSERT INTO alternativa VALUES
(1, 'Uma maneira de adicionar comentários em blocos de código', 0, 1053),
(2, 'Um tipo especial de classe usada para definir objetos em Java', 0, 1053),
(3, 'Uma marcação que fornece informações adicionais sobre elementos de código, como classes, métodos ou variáveis', 1, 1053),
(4, 'Uma estrutura de controle que permite repetir um bloco de código várias vezes', 0, 1053);

-- Questão 5
INSERT INTO alternativa VALUES
(1, 'Exceções verificadas são lançadas explicitamente pelo programador, enquanto exceções não verificadas são lançadas pelo sistema operacional', 0, 1054),
(2, 'Exceções verificadas são exceções que ocorrem durante a compilação, enquanto exceções não verificadas são exceções que ocorrem em tempo de execução', 0, 1054),
(3, 'Exceções verificadas são obrigatórias de serem tratadas pelo programador, enquanto exceções não verificadas não precisam ser tratadas', 1, 1054),
(4, 'Exceções verificadas são exceções que ocorrem em blocos "try-catch", enquanto exceções não verificadas ocorrem fora desses blocos', 0, 1054);

-- Questão 6
INSERT INTO alternativa VALUES
(1, 'Ela indica que uma classe pode ser estendida por outras classes', 0, 1055),
(2, 'Ela indica que um método pode ser acessado sem criar uma instância da classe', 0, 1055),
(3, 'Ela indica que uma variável é constante e não pode ser modificada', 0, 1055),
(4, 'Ela indica que um bloco de código pode ser executado por apenas uma thread por vez', 1, 1055);

-- Questão 7
INSERT INTO alternativa VALUES
(1, 'Um padrão que garante que apenas um objeto de uma classe seja criado em um determinado momento', 1, 1056),
(2, 'Um padrão que define uma hierarquia de classes com uma classe base e várias classes derivadas', 0, 1056),
(3, 'Um padrão que permite que um objeto altere seu comportamento quando o estado interno muda', 0, 1056),
(4, 'Um padrão que permite que um objeto seja substituído por outro sem alterar o comportamento do programa', 0, 1056);

-- Questão 8
INSERT INTO alternativa VALUES
(1, 'Uma API que permite que aplicações Java acessem serviços de diretório, como o LDAP', 1, 1057),
(2, 'Um mecanismo de busca avançada usado para pesquisar arquivos Java no sistema de arquivos', 0, 1057),
(3, 'Uma ferramenta que gera automaticamente o código Java a partir de um diagrama de classes UML', 1, 1057),
(4, 'Um framework que permite que desenvolvedores Java trabalhem com bancos de dados relacionais', 0, 1057);

-- Questão 9
INSERT INTO alternativa VALUES
(1, 'Uma linguagem de programação orientada a objetos que roda na JVM', 0, 1058),
(2, 'Uma biblioteca de classes para criar interfaces gráficas em Java', 0, 1058),
(3, 'Uma tecnologia que permite a criação de páginas web dinâmicas usando código Java embutido em HTML', 1, 1058),
(4, 'Um servidor web para hospedar aplicações Java', 0, 1058);

-- Questão 10
INSERT INTO alternativa VALUES
(1, 'Uma API que permite que aplicações Java se comuniquem por meio de mensagens assíncronas', 1, 1059),
(2, 'Um servidor de aplicação usado para implantar e gerenciar aplicações Java', 0, 1059),
(3, 'Uma biblioteca de classes para manipulação de arquivos XML em Java', 0, 1059),
(4, 'Um protocolo de rede usado para transferir arquivos entre sistemas diferentes', 0, 1059);