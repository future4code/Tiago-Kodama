# Labebank

## Concurso para uma POC de um sistema bancário usando Typescript.

### Features

- Criar conta
- Pegar saldo
- Adicionar saldo
- Pegar conta
- Transferência interna

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório

# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3003 - acesse <http://localhost:3003>
```

### Endpoints

#### POST /users

Criar um usuário.

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nome` | Obrigatório | string | Nome do usuário a adicionar|
| `cpf` | Obrigatório | string | CPF do usuário a adicionar|
| `dataNascimento` | Obrigatório | string | Data de nascimento do usuário a adicionar. Deve estar no formato "aaaa-mm-dd"|

**Exemplo**
```
{
    "nome": "Tiago",
    "cpf": "111.111.111-11",
    "dataNascimento": "1888-02-25"
}
```

**Respostas**

```
// Sucesso
{
    O usuário foi criado.
}

ou

// Cliente já cadastrado
{
    CPF já cadastrado
}

ou

// Cliente deve ser maior de idade
{
   Usuário deve ter no mínimo 18 anos
}

ou

// Informações incorretas
{
    Informações incorretas ou faltando
}

```
#### POST /users/transferencia-interna

Transferência interna de uma conta à outra.

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nome` | Obrigatório | string | Nome do usuário|
| `cpf` | Obrigatório | string | CPF do usuário|
| `nomeDestinatario` | Obrigatório | string | Nome do destinatário|
| `cpfDestinatario` | Obrigatório | string | CPF do destinatário|
| `valorTransferir` | Obrigatório | number | Valor a transferir|

**Exemplo**
```
{
    "cpf": "111.111.111-11",
    "nome": "Tiago",
    "cpfDestinatario": "999.999.999-02",
    "nomeDestinatario": "Alessandra",
    "valorTransferir": 3
}
```

**Respostas**

```
// Sucesso. Retorna o comprovante
{
    "cpf": "99999999902",
    "data": "2021-09-26T02:41:48.922Z",
    "valor": 3,
    "descricao": "Valor depositado pelo Tiago"
}

ou

// Saldo insuficiente para realizar o pagamento
{
    Saldo insuficiente
}

ou

// Informações do usuário incorretas
{
    Informações do usuário incorretas
}

ou

// Informações do destinatário incorretas
{
    Informações do destinatário incorretas
}

ou

// O valor informado deve ser um número
{
    Valor incorreto. Deve ser um número
}
```

#### POST /users/pagar-conta

Pagar uma conta a partir de um usuário

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cpf` | Obrigatório | string | CPF do usuário|
| `descricao` | Obrigatório | string | Descrição do pagamento|
| `valor` | Obrigatório | number | Valor positivo do pagamento|
| `data` | Opcional | string | Data a cobrar. Formato aaaa-m-d|

**Exemplo**
```
{
    "cpf": "111.111.111-11",
    "descricao": "Conta de luz",
    "valor": 3,
    "data": "2021-9-26"
}
```

**Respostas**

```
// Sucesso. Retorna o comprovante
{
    "cpf": "11111111111",
    "descricao": "Conta de luz",
    "valor": 3,
    "data": "2021-09-26T03:00:00.000Z"
}

ou

// Saldo insuficiente para realizar o pagamento
{
    Saldo insuficiente
}

ou

// Informações do usuário incorretas
{
    Informações do usuário incorretas
}

ou

// Informações da descrição incorretas
{
    Informações da descrição incorretas
}

ou

// O valor informado deve ser um número
{
    Valor incorreto. Deve ser um número
}
```

#### PUT /users/adicionar-saldo

Adicionar um valor à um saldo de um usuário.

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cpf` | Obrigatório | string | CPF do usuário|
| `valor` | Obrigatório | number | Valor positivo do pagamento|

**Exemplo**
```
{
    "saldo":40,
    "cpf": "111.111.111-11"
}
```

**Respostas**

```
// Sucesso.
{
    Saldo adicionado
}

ou


// Informações do usuário incorretas ou faltando
{
    Informações do usuário incorretas ou faltando
}

```

#### PUT /users/atualizar-saldo

Atualizar o saldo de um usuário. Este endpoint faz a contabilização das entradas e saídas de uma conta já efetuadas.

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cpf` | Obrigatório | string | CPF do usuário|

**Exemplo**
```
{
    "saldo":40,
    "cpf": "111.111.111-11"
}
```

**Respostas**

```
// Sucesso.
{
    Saldo atualizado com sucesso
}

ou


// Informações do usuário incorretas ou faltando
{
    Informações do usuário incorretas ou faltando
}

```

#### GET /users

Ver todos os usuários


**Respostas**

```
// Sucesso.
[
    {
        "nome": "Tiago",
        "cpf": "11111111111",
        "dataNascimento": "1888-02-25T00:00:00.000Z",
        "saldo": 0,
        "extrato": []
    },
    {
        "nome": "Alessandra",
        "cpf": "99999999902",
        "dataNascimento": "1992-04-30T00:00:00.000Z",
        "saldo": 0,
        "extrato": []
    }
]


```

#### GET /users/consultar-saldo/?cpf=111.111.111-11

Atualizar o saldo de um usuário. Este endpoint faz a contabilização das entradas e saídas de uma conta já efetuadas.

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cpf` | Obrigatório | string | CPF do usuário|


**Respostas**

```
// Sucesso.
{
    "saldo": 112
}

ou


// Informações do usuário incorretas
{
    Usuário não encontrado.
}

ou

// Informações do usuário faltando
{
    Faltando informação
}

```
---

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
