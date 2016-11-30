create database Wine;
use Wine;

create table Estate(
estateId int not null auto_increment primary key,
estateName varchar(50) not null
);

insert into Estate(estateName)
values
('Vergelegen'),
('Lourensford'),
('Spier');