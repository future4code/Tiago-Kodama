# Banco de dados - Filmes
### Exercícios 5, 6 e 7 da aula 45

### Criar e popular a tabela
```
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT,
    data_lancamento DATE NOT NULL,
    avaliacao tinyint NOT NULL
);
```

```
INSERT INTO Filmes (
	id,
    nome,
    sinopse,
    data_lancamento,
    avaliacao
) values (
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

```
INSERT INTO Filmes (
	id,
    nome,
    sinopse,
    data_lancamento,
    avaliacao
) values (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

```
INSERT INTO Filmes (
	id,
    nome,
    sinopse,
    data_lancamento,
    avaliacao
) values (
	"003",
    "Dona Flor e Seus dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

```
INSERT INTO Filmes (
	id,
    nome,
    sinopse,
    data_lancamento,
    avaliacao
) values (
	"004",
    "Tropa de elite",
    "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
    "2007-10-27",
    9
);
```

### Buscando dados

#### Por id
```
SELECT id, nome, avaliacao from Filmes where id = "003";
```

#### Por nome
```
SELECT id, nome, avaliacao from Filmes where nome like "Tropa%";
```

#### Por avaliação mínima
```
SELECT id, nome, avaliacao from Filmes where avaliacao > 7;
```

### Filtros

**a** select * from Filmes where nome like "%vida%"

**b** select * from Filmes
where 
nome like "%termo%" or
sinopse like "%termo%"

**c** select * from Filmes where data_lancamento < current_date();


