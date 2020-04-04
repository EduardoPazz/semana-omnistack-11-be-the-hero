

-----------------------






### Tipos de testes
Os testes são postos na pasta /tests/, e cada tipo de teste recebe uma pasta única.

É interessante criar um banco de dados específicos para os testes, para que esses não interfiram nos dados práticos. Para isso, no caso no KNEX, basta copiar o mesmo formato do objeto 'development' e pôr nomes apropriados *** checar /knexfile.js

cross-env: Este pacote cria uma variável de ambiente no nosso sistema. Isso será útil nesse caso de testes, que queremos que o banco de dados de teste seja usado. ***checar src/database/connection.js e package.json

Sobre o package.json: no script test, o cross-env cria a variável de ambiente chamada test e depois executa o jest



# Utils
Quando temos uma pequena funcionalidade que há de reutilizada em diversas partes da aplicação, exportamos ela em arquivos dentro da pasta src/utils

