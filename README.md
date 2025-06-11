# Sistema de Gerenciamento Escolar

## Iniciando o APP

- Clone o repo 

    ```sh
    git clone https://github.com/Diego0Alves/sistema-de-gerenciamento-escolar.git
    
    ```

- Entre no diretório do repo local

    ```sh

    cd sistema-de-gerenciamento-escolar

    ```

- Crie o .env:

    ```sh

    copy .env.example .env

    ```

- Preencha os dados no .env:

```

POSTGRES_USER=
POSTGRES_PASSWORD=

JWT_SECRET=

```

- Iniciando com Docker

    ```sh

    docker compose up --build

    ```

- Acesse o serviço em:
    [localhost:8080](http://localhost:8080/)

### Estrutura de Pastas

```
    └── sistema-de-gerenciamento-escolar
            └── index
            └── info
                └── exclude
            └── logs
        └── app
            └── Http
                └── Controllers
                    └── AlunosApi
                        └── DeleteAlunoController.js
                        └── GetAlunoController.js
                        └── InsertAlunoController.js
                        └── PostAlunoController.js
                        └── UpdateAlunoController.js
                    └── dateController.js
                └── Middlewares
                    └── jwtAuthMiddleware.js
            └── Models
                └── alunosModel.js
                └── professoresModel.js
        └── bootstrap
            └── app.js
            └── constants.js
            └── helpers.js
        └── docker
            └── nginx
                └── default.conf
                └── dockerfile
            └── node-cli
                └── dockerfile
            └── node-web
                └── dockerfile.dev
            └── postgres
                └── init.sql
        └── Docs
        └── public
            └── index.html
        └── routes
            └── api
            └── api.js
                └── alunosApi.js
            └── routes.js
            └── web.js
        └── .env.example
        └── .gitignore
        └── docker-compose.yaml
        └── README.md
        └── server.js
```