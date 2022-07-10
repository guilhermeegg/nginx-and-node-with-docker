# Projeto nginx-and-node-with-docker
Desafio Fullcycle nginx e node.js com docker

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

# Comando para executar a aplicação
```
docker-compose up -d
```
# URL
http://localhost:8080/