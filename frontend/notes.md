- Para utilizar ícones no site, o pacote react-icons pode ser usado. Depois de baixá-lo, basta importá-lo onde queres usá-los.

Na importação, você vai escolher um subpacote do pacote react-icons. Existem vários. Você pode importar todos os ícones de uma vez ou usar desconstrução para pegar ícones específicos. Cada subpacote possui um site específico, então você pode ir lá e checar esses nomes, e na hora da importação, basta informar a sigla do pacote e o nome do ícone em específico.

Na hora de estilizar, todo componente que é um ícone tem o seletor "svg"

---------------------------------

Para a criação de rotas nas páginas, é preciso instalar o pacote "react-router-dom"
 *** Checar a página routes na hora de escrever

------------------------------
As seguintes linhas são necessárias para que o VSCode ative os snippets do React:

    "emmet.syntaxProfiles": {"javascript": "jsx"},
    "emmet.includeLanguages": {"javascript": "javascriptreact"},

------------------------------
*** trocar <a> por <Link>

------------------------
Para podermos conectar o frontend com o backend, é necessário uma api de requisições http. Há o AJAX, o Fetch, mas o mais famosinho é o Axios

O uso do axios será feito na pasta src/services/ , em um arquivo convencionalmente chamado api.js

A pasta src/services guarda qualquer tipo de serviço que proverá alguma forma de acessar dados externos

Configurando axios: checar api.js

Configurando api para cada requisição: checar os comentários deixados