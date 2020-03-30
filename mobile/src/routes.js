import React from "react";
import { NavigationContainer } from "@react-navigation/native"; /* este é semelhante ao BrowserRouter no React Web */
import { createStackNavigator } from "@react-navigation/stack"; /* é com esta função que criaremos as rotas */

import Incidents from "./pages/Incidents";
import Detail from "./pages/Details";

const AppStack = createStackNavigator(); /* atribuímos a função a uma variável */

function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator /* screenOptions={{ headerShown: false }} */> {/* Note que estamos acessando a classe Navigator de AppStack */}
                <AppStack.Screen name="Incidents" component={Incidents} /> {/* Haverá um Screen para cada página do nosso app, e duas propriedade desse componente: uma é um name (obrigatório, apesar de não servir para a versão final do aplicativo. Ele insere um singelo título no topo da tela quando acessamos a referida tela. Para desabilitar esse título que existe a propriedade do Navigator ), e o segundo é propriamente component, que acessará os componentes que criarmos */}
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default Routes; /* exportamos então essas rotas para o nosso App.js */