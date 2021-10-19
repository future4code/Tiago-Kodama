# Todo List
API para gerenciar os usuários, atividades e responsáveis.

## Mock de dados

### TodoListUser
```
    id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
```

### TodoListTask
```
    id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
```

### TodoListResponsibleUserTaskRelation
```
    task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
```

### Endpoints do usuário
**get** 
* "/user" buscar usuários
* "/user/all" buscar todos os usuários
* "/user/:id" buscar usuário pelo id

**post**
* "/user" criar usuário

**put**
* "/user/edit/:id" atualizar usuário

**delete**
* "/user/:id" remover usuário

### Endpoints das atividades
**get**
* "/task" buscar tarefa através de uma query
* "/task/delayed" pegar as atividades atrasadas
* "/task/:id/responsible" pegar responsáveis pela atividade pelo id da atividade
* "/task/:id" pegar atividades pelo id

**post**
* "/task" criar atividade
* "/task/responsible" atribuir responsável
 
**put**
* "/task/status/edit" atualizar o estatos de muitas atividade
* "/task/status/:id" atualizar o estatos de uma atividade
 
**delete**
* "/task/:id" remover atividade
* "/task/:taskId/responsible/:responsibleUserId" remover responsabilidade