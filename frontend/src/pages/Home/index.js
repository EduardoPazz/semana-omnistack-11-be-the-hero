import React from "react";

import { Link } from "react-router-dom";

import './styles.css';

import heroesImg from "../../assets/heroes.png";

import logo from "../../assets/logo.svg";

function Home() {
    return(
        <div className="home-container">
            <div className="redirect">
                <img src={logo} alt="Be the Hero"/>
                <p>O Be the Hero conecta um doador anônimo à ONG's que necessitem de doações para casos específicos. Faça a diferença hoje e seja um herói!</p>
                <h1>Quem é você?</h1>
                <Link className="button" to="/doner">Sou doador</Link>
                <Link className="button" to="/logon" >Sou ONG</Link>
            </div>
            <img src={heroesImg} alt="The heroes"/>
        </div>
    );
}

export default Home;