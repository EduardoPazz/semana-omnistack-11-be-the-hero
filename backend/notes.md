validação das requests: usando o pacote joi, específico para validações com nodejs, porém, implementado para o express, e este pacote é o celebrate

Para manter aquela organização marota, é sempre importante manter uma pasta específica para a validação

-----------------------
# Automação de Testes:
São importantes, pois o teste "físico" do desenvolvedor na aplicação só é válido quando ela está muito simples ainda. Ao passo que ela escala, fica humanamente impossível realizar os testes um a um.

## TDD (Test-driven Development = Desenvolvimento dirigido a testes)

Essa metodologia de desenvolvimento visa implementar os testes antes mesmo do código existir. Isso basicamente funciona pra guiarmos o nosso desenvolvimento de acordo com as regras de negócio já estabelecidas da aplicação.

## O framework para lidarmos com testes se chama jest

Para iniciarmos o jest, basta:
```bash
npx jest --init
```
ele irá fazer as seguintes perguntas:

- incluir scripts no package.json?
- Y
- Rodar os testes no node ou no navegador? 
- Node
- Adicionar reports?
- N
- Fazer com que as variáveis de um teste não valham para outros testes?
- Y

Ele então vai criar um jest.config.js

### Tipos de testes
Os testes são postos na pasta /tests/, e cada tipo de teste recebe uma pasta única.

É interessante criar um banco de dados específicos para os testes, para que esses não interfiram nos dados práticos. Para isso, no caso no KNEX, basta copiar o mesmo formato do objeto 'development' e pôr nomes apropriados *** checar /knexfile.js

cross-env: Este pacote cria uma variável de ambiente no nosso sistema. Isso será útil nesse caso de testes, que queremos que o banco de dados de teste seja usado. ***checar src/database/connection.js e package.json

Sobre o package.json: no script test, o cross-env cria a variável de ambiente chamada test e depois executa o jest

#### Dois principais testes

Os arquivos que farão parte de teste levam o mesmo nome que seus originais, porém, com um '.spec' antes da extensão do arquivo:
`example.spec.js`

##### Unit
São testes de unidade, que testam uma parte bastante específica da aplicação, como a geração de um id único
##### Integration
São testes que testam a uma rota ou funcionalidade inteira.

Geralmente, separamos cada arquivo de teste de integração por controller, e para testar as requests, não usaremos o axios, e sim o supertest

npm install supertest

Para podermos testar nossa rota precisamos do index.js. Porém precisamos que o comando do express para ouvir a uma porta não seja importado junto. Para isso, no index.js nos exportamos o app (com todos as rotas e comandos antes usados) para server.js, na mesma pasta, para então usarmos o método listen.

# Utils
Quando temos uma pequena funcionalidade que há de reutilizada em diversas partes da aplicação, exportamos ela em arquivos dentro da pasta src/utils

