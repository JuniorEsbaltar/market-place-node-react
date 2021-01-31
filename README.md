
##### Pré-requisitos
Yarn e Node
Banco utilizado: Postgres
### Instalação - back-end

Instalação das dependencias.
Após fazer o clone do projeto
```sh
$ cd back-end
$ yarn install 
```

Acesse o arquivo database.js e coloque as configurações do seu banco.
Configs: host, username, password.

```sh
./src/config/database.js
```

Acesse seu banco de dados é crie um database chamado market_place

Novamente na pasta do back-end, rode o comando para gerar as migration e as tabela:
```sh
yarn sequelize db:migrate
```
Para iniciar o back-end basta rodar o comando :

```sh
yarn dev
```
##### Instalação - front-end

Na raiz do projeto acesse a pasta do front-end e instale as dependências :

```sh
$ cd front-end
$ cd market-place
$ yarn install 
```

Para iniciar o projeto basta rodar o comando:

```sh
yarn start
```

Projeto ira rodar na porta 3000