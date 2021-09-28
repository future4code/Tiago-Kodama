# Atividade 6 

**a** alter table Filmes add playinglimitdate Date;

**b** alter table Filmes
change avaliacao avaliacao float;

**c** update Filmes 
set data_lancamento = "2051-05-05"
where data_lancamento < curdate()
limit 2;


