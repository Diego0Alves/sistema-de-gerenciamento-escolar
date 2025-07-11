# Sistema de Gerenciamento Escolar

### Para mais informações veja a wiki:

- [Sistema de Gerenciamento Escolar Wiki](https://github.com/Diego0Alves/sistema-de-gerenciamento-escolar/wiki)

## Iniciando o APP com Docker

- Clone o repo

    ```sh

    git clone https://github.com/Diego0Alves/sistema-de-gerenciamento-escolar.git
    
    ```

- Entre no diretório do repo local

    ```sh

    cd sistema-de-gerenciamento-escolar

    ```

- Entre no diretório do app

    ```sh

    cd APP-

    ```

- Crie o .env:

    ```sh

    copy .env.example .env

    ```

- Preencha os dados no .env:

```sh

POSTGRES_USER=
POSTGRES_PASSWORD=

JWT_SECRET=

```

- Iniciando com Docker

    ```sh

    docker compose up --build

    ```

> Acesse o serviço em:

- [localhost:8080](http://localhost:8080/)

> Acesse o banco de dados na porta 6789 com um SGBD seguindo os dados inseridos no .env

> Documentação da api no Swagger em:

- [localhost:808/swagger](http://localhost:8080/swagger/)


### As rotas estão documentadas através do arquivo: insomnia.yaml

- Baixe o Insomnia para utilizar o arquivo: [Insomnia](https://insomnia.rest/download)

> Arquivo Insomnia.yaml em: DOCs-/Insomnia.yaml


## DER/MER do Banco de Dados:

![MER](./Docs-//MER-DER/MER-Escola.png)

| Entidade    | Relacionamento    | Entidade  | Cardinalidade  |
| ----------- | ----------------- | --------- | -------------- |
| Responsável | é responsável por | Aluno     | 1\:N           |
| Turma       | possui            | Aluno     | 1\:N           |
| Turma       | é lecionada por   | Professor | 1:1 (ou N:1)   |

### Estrutura de Pastas

```
└── sistema-de-gerenciamento-escolar
    └── APP-
        └── app
            └── Commands
                ├── ListRoutesCommand.js
            └── Http
                └── Controllers
                    └── AlunosApi
                        ├── DeleteAlunoController.js
                        ├── GetAlunoController.js
                        ├── InsertAlunoController.js
                        ├── ListAlunoController.js
                        ├── UpdateAlunoController.js
                    └── ProfessoresApi
                        ├── DeleteProfessorController.js
                        ├── GetProfessorController.js
                        ├── InsertProfessorController.js
                        ├── ListProfessorController.js
                        ├── UpdateProfessorController.js
                    └── ResponsaveisApi
                        ├── DeleteResponsavelController.js
                        ├── GetResponsavelController.js
                        ├── InsertResponsavelController.js
                        ├── ListResponsavelController.js
                        ├── UpdateResponsavelController.js
                    └── TurmasApi
                        ├── DeleteTurmaController.js
                        ├── GetTurmaController.js
                        ├── InsertTurmaController.js
                        ├── ListTurmaController.js
                        ├── UpdateTurmaController.js
                    ├── dateController.js
                    ├── LoginJwtController.js
                    ├── userController.js
                └── Middlewares
                    ├── jwtAuthMiddleware.js
            └── Models
                ├── alunosModel.js
                ├── professoresModel.js
                ├── responsaveisModel.js
                ├── roleModel.js
                ├── turmasModel.js
                ├── userModel.js
        └── bootstrap
            ├── app.js
            ├── constants.js
            ├── helpers.js
        └── config
            ├── db.js
            ├── sequelize_relations.js
            ├── sequelize.js
        └── Core
            └── CommandCore
                ├── CommandManager.js
                ├── ListRoutes.js
            └── SwaggerCore
                ├── CreateSwaggerDocs.js
                ├── SwaggerGenerate.js
            ├── GetFiles.js
        └── database
            └── migrations
                ├── create_alunos_table.js
                ├── create_professores_table.js
                ├── create_responsaveis_table.js
                ├── create_turmas_table.js
        └── docker
            └── nginx
                ├── default.conf
                ├── dockerfile
            └── node-cli
                ├── dockerfile
            └── node-web
                ├── dockerfile.dev
            └── postgres
                └── init
                    ├── 01-init.sql
                    ├── 02-insert.sql
        └── docs
            ├── 01-UserLoginDoc.js
            ├── 02-AlunosDoc.js
            ├── 03-TurmasDoc.js
            ├── 04-ProfessoresDoc.js
            ├── 05-ResponsaveisDoc.js
        └── public
            ├── index.html
        └── routes
            └── api
                ├── alunosApi.js
                ├── professoresApi.js
                ├── responsaveisApi.js
                ├── turmasApi.js
            ├── api.js
            ├── routes.js
            ├── web.js
        ├── .env.example
        ├── .gitignore
        ├── command
        ├── docker-compose.yaml
        ├── package-lock.json
        ├── package.json
        ├── server.js
    └── Docs-
        └── MER-DER
            ├── MER-Escola.png
        ├── Insomnia.yaml
    └── README.md
```