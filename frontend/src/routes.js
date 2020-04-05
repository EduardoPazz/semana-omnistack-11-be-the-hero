import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Doner from "./pages/Doner";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/doner" component={Doner} />
                <Route path="/logon" component={Logon} /> {/* movi a rota de Logon para um URL específico, e deixei o URL raiz para a tela Home */}
                <Route path="/register" component={Register}/> 
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;