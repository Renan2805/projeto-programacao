drop database if exists projeto_programacao;
create database if not exists projeto_programacao;
use projeto_programacao;

create table usuario (
    idUsuario int primary key auto_increment,
    nomeUsuario varchar(45) not null,
    email varchar(45) not null,
    senha varchar(45) not null
);

create table dadosPessoais (
    idDadosPessoais int,
    nome varchar(45) not null,
    sobrenome varchar(45) not null,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario),
    constraint pkDadosPessoais primary key (idDadosPessoais, fkUsuario)
);

create table linguagem (
    idLinguagem int primary key auto_increment,
    nome varchar(45) not null,
    tipo varchar(45),
    urlImagem text
);

alter table linguagem add constraint chkTipo check (tipo in ('compilada', 'interpretada'));

create table linguagemUsuario (
    fkUsuario int,
    fkLinguagem int,
    foreign key (fkUsuario) references usuario(idUsuario),
    foreign key (fkLinguagem) references linguagem(idLinguagem),
    constraint pkComposta primary key (fkUsuario, fkLinguagem)
);

create table quiz (
    idQuiz int primary key auto_increment,
    nome varchar(45)
);

create table tentativa (
    idTentativa int primary key auto_increment,
    pontuacao float not null,
    tempo decimal(5, 3),
    fkQuiz int,
    fkUsuario int,
    foreign key (fkQuiz) references quiz(idQuiz),
    foreign key (fkUsuario) references usuario(idUsuario)
);

create table questao (
    idQuestao int primary key auto_increment,
    enunciado varchar(300) not null,
    fkQuiz int,
    foreign key (fkQuiz) references quiz(idQuiz)
) auto_increment = 1000;

create table alternativa (
    idAlternativa int,
    texto varchar(200),
    certa boolean,
    fkQuestao int,
    foreign key (fkQuestao) references questao(idQuestao),
    constraint pkAlternativa primary key (idAlternativa, fkQuestao)
);