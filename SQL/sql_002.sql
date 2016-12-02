use Wine;

create table Style(
styleId int not null auto_increment primary key,
styleName varchar(50) not null
);

insert into Style(styleName)
values
('Shiraz'),
('Merlot'),
('Pinotage');

select * from Style;