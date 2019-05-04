## Back end


### Funcionamento

A aplicação se comunica com a API OpenWeatherMap, normaliza os dados para reduzir a complexidade e evitar trafegar dados desnecessários.
Além disso, também persiste no banco de dados o histórico das consultas feitas pelo usuário.

### Estrutura

* Implementada em NodeJS utilizando o Framework Express.
* Possui Sequelize como ORM e interface de comunicação com o banco de dados.
* Utiliza biblioteca dotenv para tornar a aplicação Production Ready, executando a partir de parâmetros de configuração.
* Docker-compose para agilizar a configuração e desenvolvimento

TODO: Arquitetura

### Como executar
TODO: