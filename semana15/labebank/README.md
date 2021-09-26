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

### POST /users

Criar um usuário.

**Parâmetros**

|              Name | Required |  Type  | Description                                                                                                                                                                                       |
| ----------------: | :------: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nome` | Obrigatório | string | Nome do usuário a adicionar|
| `cpf` | Obrigatório | string | CPF do usuário a adicionar|
| `dataNascimento` | Obrigatório | string | Data de nascimento do usuário a adicionar. Deve estar no formato "aaaa-mm-dd"|

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

---

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
