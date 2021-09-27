# Aula 45 - Banco de dados
### Exercício 1
```
use `lovelace-2147075-tiago-kodama`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
**a)**
* id é um texto e é a identificação em comum entre outas tabelas
* name é um texto com 255 caracteres e não pode estar em branco
* birth_date não pode estar em branco
* gender é um texto de 6 caracteres e não pode estar em branco

**b)** SHOW TABLES e SHOW DATABASES retornam as tabelas e os bancos existentes respectivamente.

**c)** DESCRIBE Actor retorna todas as colunas e os seus tipos.
    
### Exercício 2
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```
**a)**

**b)** Existe um outro elemento com o mesmo primary key

**c)** A contagem das colunas não bate com os do resultado

**d)** O campo name não possui valor padrão

**e)** Valor incorreto para birth_date

**f)**

### Exercício 3

**a)** SELECT * FROM Actor;

**b)** SELECT salary FROM Actor WHERE name="Tony Ramos";

**c)** SELECT * FROM Actor WHERE gender="invalid";
Não tem resultado

***d)*** nome deve ser trocado por name

### Exercício 4

**a)** Buscar todas as informações de quem tem o nome que comece por A ou J e, além disso, deve ter um salário maior que 300 000,00.

**b)** SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

**c)** SELECT * FROM Actor WHERE name LIKE "%g%" OR name like "%G%";

**d)** where (name like "%a%" or name like "%A%"
or name like "%g%" or name like "%G%")
and salary between 350000 and 900000;
