# Projeto Car Shop

Neste projeto foi utilizado os princípios de Programação Orientada a Objetos (POO) para a construção de um API com CRUD para gerenciar uma concessionária de veículos. A aplicação possibilita ler, criar, atualizar e excluir carros e motos de um banco de dados MongoDB através do framework do Mongoose. Além disso, foram desenvolvidos testes unitários para testar a camada Service.

## Habilidades utilizadas

- Node.js
- Express
- Typescript
- MongoDB
- Mongoose
- POO
- Mocha
- Chai
- Sinon

## Para rodar o projeto pela sua máquina com o Docker:

1. Clone o repositório:

`git clone git@github.com:Helena-Rodrigues-Figueiredo/project-car-shop.git`

2. Entre na pasta do projeto:

`cd project-car-shop`

3. Suba os containers com o Docker-Compose:

`docker-compose up -d`

4. Conecte ao terminal do container car_shop:

`docker exec -it car_shop bash`

5. Instale as dependências:

`npm install`

6. Inicie a aplicação:

`npm run dev`

7. Para rodar os testes unitários:

`npm run test:mocha`

⚠️ As seguintes portas serão utilizadas:
- Node: 3001
- MongoDB: 27017


