
## Back end


### Funcionamento

A aplicação se comunica com a API OpenWeatherMap, normaliza os dados para reduzir a complexidade e evitar trafegar dados desnecessários.
Além disso, também persiste no banco de dados o histórico das consultas feitas pelo usuário.

**TODO** List:
- [ ] Expor em um endpoint os registros de histórico de pesquisa


### Estrutura

* Implementada em NodeJS utilizando o Framework Express.
* Possui Sequelize como ORM e interface de comunicação com o banco de dados.
* Utiliza biblioteca dotenv para tornar a aplicação Production Ready, executando a partir de parâmetros de configuração.
* Docker-compose para agilizar a configuração e desenvolvimento
* Seguindo as melhores práticas da comunidade [https://github.com/i0natan/nodebestpractices](https://github.com/i0natan/nodebestpractices)
[https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)


### Como executar

Baixar as dependências utilizando `npm install`

Configurar as propriedades abaixo, através de um arquivo .env na pasta raíz do projeto ou como variáveis de ambiente.
* DATABASE
* DATABASE_USER
* DATABASE_PASSWORD

Executar com `npm start`
