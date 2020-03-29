diferenças de react native e html:
Diferentemente do HTML, as tags em react native não possuem semântica. Todos os containeres serão feitos com o componente View, e qualquer tipo de texto será feito com o componente Text

------------------
Componentes do RN:
View = div
Text = qualquer texto
Image = img
-----------------

Os componentes não possuem id ou class. Para estilizarmos ele, criamos um objeto com o pacote StyleSheet e depois atribuímos esse objeto como uma propriedade do componente

Todos os componentes em RN são do tipo display: flex. E este é o único display possível

Como em JS Vanilla, as propriedades das declarações de estilo são feitas em camelCase, sendo o valor da propriedade uma string, sempre

Em RN, o efeito cascata das folhas de estilo não existe

 ----------------------

Estrutura de pastas:

App.js

assests/

----------------------
Os demais conceitos de componentes do React se aplicam normalmente ao React Native

--------------------
Para lidarmos com rotas em RN, precisa-se do pacote:
yarn add @react-navigation/native

e, com projeto em expo, instalar as seguintes dependências:

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

E há diversas formas de guiar as nossas rotas em um app, seja por navegação por menu ou por botões. Nesse app, usaremos a navegação por botões, que se assemelha ao nosso site (o site não possui um menu, por exemplo).

Para a navegação por botões, usamos o pacote stack:

@react-navigation/stack

*** checar routes.js para a configuração ds rotas

--------------------------
O pacote expo-constants fornece valores constantes relacionados ao próprio dispositivo, úteis na hora da estilização e em outras situações.

Para instalá-lo:

expo install expo-constants

Para utilizá-lo: *** olhar o styles.js de incidents e listar os valores constantes disponíveis.
