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


insert into tentativa values
    (null, 0, 1);

insert into questao values
    (null, 'Qual a linguagem mais usada no mundo', 1);

insert into alternativa values
    (1, 'Javascript', 0, null, 1),
    (2, 'Python', 1, null, 1),
    (3, 'C++', 0, null, 1),
    (4, 'COBOL', 0, null, 1);