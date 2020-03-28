import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function Routes() {
    return(
        <BrowserRouter> {/* Para criar as rotas, o BrowserRouter precisa envolver tudo */}
            <Switch> {/* O Switch impede que mais de uma rota seja executada por momento */}
                <Route path="/" exact component={Logon} /> {/* Esta linha diz que, na pasta raiz, acessaremos o componente Logon */}
                <Route path="/register" component={Register}/> {/* Esta linha, apesar de definir a rota para o componente Register, nunca permitira que esse componente seja acessado, pois o React analisa a rota pelo "denominador comum" e termina nele. Neste caso, a / é o denominador comum das duas rotas, e encontrando a primeira (A do Logon), terminará nela, independente do restante da rota. Para consertar isso, é necessário o uso da propriedade "exact" na rota raiz, para que ele considere EXATAMENTE a rota "/" */}
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;