use Wine;


create table WineType(
 wineTypeId  int not null auto_increment primary key,
 wineTypeName varchar(50) not null
);

insert into WineType(wineTypeName)
values
('Red'),
('White'),
('Rose'),
('Sparkling');


create table Wine(
wineId int not null auto_increment primary key,
wineName varchar(50) not null,
wineTypeId int null,
styleId int null,
estateId int null,
vintage int null,
rating int null,
description varchar(100) null,
quantity int not null
);

select *
 from Wine a
join WineType b on a.wineTypeId = b.wineTypeId
join Style c on a.styleId = c.styleId
join Estate d on a.estateId = d.estateId;
