import React from "react";

import './styles.css';

import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import heroesImg from '../../assets/heroes.png';

function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the Hero"/>
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>
                    <a href="/register">
                        <FiLogIn size="30" color="#E02041" />
                        Não possuo registro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

export default Logon;