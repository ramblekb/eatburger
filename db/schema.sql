DROP DATABASE IF EXISTS burger;
create database burger;

use burger;
select * from burger;

CREATE TABLE Burgers(
id int NOT NULL auto_increment,
burger_name varchar(225),
devoured bool,
PRIMARY KEY(id)
)